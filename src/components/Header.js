import React from "react";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar"


const header = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Banner />
          </div>

          <div className="col-md-9">
            <NavBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default header;