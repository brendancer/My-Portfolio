import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar"

const Home = () => {

  return (
    <>
      <div className="container">
        <div>
          <NavBar />

        </div>
      </div>
      <Header />
      <h1>home</h1>
    </>
  )
}

export default Home;