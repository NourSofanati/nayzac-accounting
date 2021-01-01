import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Vendors from "./components/Vendors";
import VendorsAdd from "./components/VendorsAdd";
import CreateCompany from "./components/CreateCompany";
import CompanyAssets from "./components/CompanyAssets";


function App() {
  return (
    <Router>
      <Sidebar></Sidebar>
      <div className="routerView p-5 ">
        <div className="card shadow-lg h-100">
          <Switch >

            {/* Dashboard */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Dashboard} />

            {/* Vendors */}
            <Route exact path="/vendors" component={Vendors} />
            <Route exact path="/vendors/add" component={VendorsAdd} />

            {/* Company */}
            <Route exace path="/company/create" component={CreateCompany} />
            <Route exace path="/company/assets" component={CompanyAssets} />


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
