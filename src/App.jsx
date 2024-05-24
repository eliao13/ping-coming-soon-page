import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="h-svh w-svw flex justify-center">
        <div className="p-8 wrapper max-w-[700px] flex flex-col lg:p-12">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
