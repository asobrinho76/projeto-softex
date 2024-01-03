import React from "react";
import Saudacao from "/src/components/saudacao/Saudacao";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="NavBar">
        <Navbar />
      </div>

      <div className="saudacao">
        <Saudacao />
      </div>
    </>
  );
};

export default Home;
