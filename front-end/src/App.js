import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Order from "./Components/Order";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/Checkout">
          <Checkout/>
          </Route>
          <Route path="/Order">
          <Order/>
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
