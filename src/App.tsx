import React from "react";
import "./App.css";
import { Navbar } from "./layout/NavBarAndFooter/Navbar";
import { Footer } from "./layout/NavBarAndFooter/Footer";
import { HomePage } from "./layout/HomePage/HomePage";

export const App = () => {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Footer/>
    </>
  );
}

