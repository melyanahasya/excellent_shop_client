import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./views/pages/Home";
import Beranda from "./views/pages/Beranda";
import ServiceLaptop from "./views/pages/service/Service_laptop";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>

          {/* page */}
          <Route path="/" component={Home} exact />
          <Route path="/beranda" component={Beranda} exact />
          <Route path="/service-laptop" component={ServiceLaptop} exact />
      
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
