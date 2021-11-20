import * as History from 'history';
const history = History.createBrowserHistory();
const navigate = to => history.push(to);
export { history, navigate };
