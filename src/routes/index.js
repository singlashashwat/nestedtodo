import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/index";
import Home from "../views/Home";
import { saveState } from "../store/localStorage";

store.subscribe(() => {
  saveState({
    dataReducer: store.getState().dataReducer,
  });
});

function App() {
  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
