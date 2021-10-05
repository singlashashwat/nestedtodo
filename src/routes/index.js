import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/Home";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
