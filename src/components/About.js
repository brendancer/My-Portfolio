import React from 'react';
import ProfilePic from "../assets/profile-pic-3.jpeg"
import "../Main.scss"

const About = (props) => {


  return (
    <>
      <div className="container card col-md-12">
        <div class="card-body align-bottom">
          <img
            className="card-img-top float-left mr-3"
            src={ProfilePic}
            alt="headshot"
            style={{ width: "150px" }}
          />

          <p class="card-text">
            I was an elementary school teacher in Los Angeles, California. I came
            to Utah in 1998 looking for something new.
          </p>
          <p>
            After a stint of corporate training at US express, I puchased a
            drivethrough coffee shop and spent the next 4 years operating it. My
            daughter came along (at age 45!) and I sold the coffee shop to became
            a stay-at-home mom.
          </p>
          <p class="card-text">
            One of my passions is a community dance form called contra dance. I'm
            always on the Wasatch Contras board and ususally president. When our
            webmaster decided to retire, I took the plunge and raised my hand.
          </p>
          <p class="card-text">
            I watched some tutorials and learned basic Wordpress. I constructed a
            site for Wasatch Contras, a process I found very frustrating...and
            interesting! I was irritated by the constraints that I had under the
            Wordpress platform, so I decided to get a little deeper into coding
            and computers in general. I signed up for an online class from edX
            Harvard (CS50) and dived in.
          </p>
          <p class="card-text">
            After successfully completing the course, I signed up for another and
            also a grahic design class through Shaw academy. I decided to get
            serious and enrolled in a full-stack development bootcamp through the
            University of Utah. I can't wait to apply my new skills in my
            second-act career!
          </p>
        </div>
      </div>
    </>
  )
};

export default About;