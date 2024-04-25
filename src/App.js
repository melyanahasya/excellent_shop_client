import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./views/pages/Home";
import Beranda from "./views/pages/Beranda";
import ServiceLaptop from "./views/pages/service/Service_laptop";
import ServicePrinter from "./views/pages/service/Service_printer";
import Login from "./views/pages/auth/Login";
import RegistAdmin from "./views/pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>

          {/* page */}
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/regist-admin" component={RegistAdmin} exact />
          <Route path="/beranda" component={Beranda} exact />
          <Route path="/service-laptop" component={ServiceLaptop} exact />
          <Route path="/service-printer" component={ServicePrinter} exact />
      
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
