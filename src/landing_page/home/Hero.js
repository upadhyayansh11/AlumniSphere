import React from "react";
// import HeroImage from "./public/image/";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/heroimage.jpg" className="mb-3"></img>
        <h1 className="mt-5 ">Reunion Homecoming and All Alumni Day</h1>
        <p className="text-muted">
          Join the University alumni community this October for an unforgettable
          Alumni Reunion Weekend! Whether you’re a recent grad or long-time
          alum, come back to campus to reconnect with friends, dive into
          exciting events, and celebrate the legacy we all share. Rediscover the
          spirit of University, revisit favorite spots, and make new memories
          with fellow alumni. Don’t miss this chance to return, reunite, and
          reignite your bond with our community!
        </p>
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-2">Reunion Time, ’4s and ’9s </h1>
          <h2 className="fs-4">December 24–27, 2024</h2>
          <p className="text-muted">
            Reconnect with undergrad classmates over four unforgettable days
            packed with Mini-Reunions, your class party and tailgate, and
            Classes Without Quizzes—plus connect with Stanford friends who have
            your heart (but not your class year) at the new Farm Fest!
          </p>
          <a
            href=""
            className="mx-5 "
            style={{ textDecoration: "none", color: "black" }}
          >
            <b>Register for Reunion</b>
            <i
              class="fa fa-long-arrow-right "
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-2">Calling All Degrees and Years </h1>
          <h2 className="fs-4">December 31, 2024</h2>
          <p className="text-muted">
            Discover the all-new All Alumni Day, featuring faculty lightning
            talks, campus tours, an all-years tailgate, and Farm Fest: a lively
            outdoor celebration with department and community pop-ups, food and
            drinks, live music, games, and more.
          </p>
          <a
            href=""
            className="mx-5"
            style={{ textDecoration: "none", color: "black" }}
          >
            <b>Purchase a Pass</b>
            <i
              class="fa fa-long-arrow-right"
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
