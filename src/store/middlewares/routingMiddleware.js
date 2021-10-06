import { history } from "../history";

export const ROUTING = "ROUTING";

export const routingMiddleware = () => (next) => (action) => {
  if (action.type === ROUTING) {
    history.push(action.to);
  }
  return next(action);
};
