import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./views/pages/Home";
import Login from "./views/pages/auth/Login";
import Register from "./views/pages/auth/Register";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          {/* auth */}
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          {/* page */}
          <Route path="/" component={Home} exact />

      
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
