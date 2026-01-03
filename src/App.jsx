
import ProductDetails from "./components/ProductDetails.jsx";
import PageContent from "./layout/PageContent.jsx";
import ShopPage from "./pages/ShopPage.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>


      <Switch>
        <Route exact path="/" component={PageContent} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/shopdetail" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
