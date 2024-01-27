import { BrowserRouter, Route } from "react-router-dom";
import Body from "./components/body/Body";
import CreateColor from "./pages/create-color/CreateColor";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import React, { Component } from "react";
import ShowColors from "./components/body/body-components/show-colors/ShowColors";
import EditColor from "./pages/edit-color/EditColor";
import ContractUs from "./pages/contract-us/ContractUs";

class MainComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" render={() => <ShowColors />} />
        <Route exact path="/create-color" render={() => <CreateColor />} />
        <Route exact path="/edit-color" render={() => <EditColor />} />
        <Route exact path="/contract-us" render={() => <ContractUs />} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default MainComponent;
