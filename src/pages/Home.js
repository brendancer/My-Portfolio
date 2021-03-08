import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar"

const Home = () => {

  return (
    <>
      <div className="container">
        <div className="row col-md-12 offset-6 mr-0">
          <NavBar />

        </div>
      </div>
      <Header />
    </>
  )
}

export default Home;