import PropType from 'prop-types';
import { Component } from 'react';
import enroute from 'enroute';
import invariant from 'invariant';

class Router extends Component {

  constructor(props){
    super(props)

    // We'll store the routes on the Router component
    this.routes = {};

    // Add all the children components to the routes
    this.addRoutes(props.children);

    // Set up the router for matching & routing
    this.router = enroute(this.routes);
  }

  cleanPath(path) {
    return path.replace(/\/\//g, '/');
  }

  normalizeRoute(path, parent) {
    if(path[0] === '/'){
      return path
    }

    if(parent == null) {
      return path
    }

    return `${parent}/${path}`;

  }

  addRoute(element, parent) {
    const { component, path , children } = element.props; 
    invariant(component, `Route ${path} is missing this "path"  property`)
    invariant(typeof path === 'string', `Route  ${path} is not string`)

    const render = (params, renderProps) => {
      const finalProps = {
        ...this.props,
        ...renderProps,
        params
      }
      const children = React.createElement(component, finalProps);

      return parent ? parent.render(params, { children }) : children;

    };

    // Set up the route itself (/a/b/c)
    const route = this.normalizeRoute(path, parent);

    // If there are children, add those routes, too
    if (children) {
        this.addRoutes(children, { route, render });
    }

    // Set up the route on the routes property
    this.routes[this.cleanPath(route)] = render;

  }

  addRoutes(routes, parent) {
    React.Children.forEach(routes, route => this.addRoute(route, parent));
  }

  render() {
    const { location } = this.props;
    invariant(location, '<Router> needs location to work');
    return this.router(location);
  }

}

Router.propTypes = {
  children: PropType.object,
  location: PropType.string.isRequired,
}

export default Router;