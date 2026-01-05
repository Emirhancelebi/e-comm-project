
import ProductDetails from "./components/ProductDetails.jsx";
import PageContent from "./layout/PageContent.jsx";
import About from "./pages/About.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Pricing from "./pages/Pricing.jsx";
import ShopPage from "./pages/ShopPage.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Team from "./pages/Team.jsx";
import SignupForm from "./components/SignupForm.jsx";

function App() {
  return (
    <Router>


      <Switch>
        <Route exact path="/" component={PageContent} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/shopdetail" component={ProductDetails} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/team" component={Team} />
        <Route path="/signup" component={SignupForm} />

      </Switch>
    </Router>
  );
}

export default App;
