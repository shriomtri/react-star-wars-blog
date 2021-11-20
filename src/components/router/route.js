import PropType from 'prop-types';
import { Component } from 'react';
import invariant from 'invariant';

class Route extends Component {

  render(){
    return invariant(false, '<Route> element is for config only not for render')
  }

}

Route.propTypes = {
  route: PropType.string,
  component: PropType.oneOfType([PropType.element, PropType.func])
}

export default Route