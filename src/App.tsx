import React from "react";
import "./App.css";
import { Navbar } from "./layout/NavBarAndFooter/Navbar";
import { Footer } from "./layout/NavBarAndFooter/Footer";
import { HomePage } from "./layout/HomePage/HomePage";
import { SearchBook } from "./layout/SearchBooksPage/components/SearchBook";
import { SearchBooksPage } from "./layout/SearchBooksPage/SearchBooksPage";

export const App = () => {
  return (
    <>
    <Navbar/>
    {/* <HomePage/> */}
    <SearchBooksPage/>
    <Footer/>
    </>
  );
}

