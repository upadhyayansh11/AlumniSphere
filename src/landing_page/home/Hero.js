import React from "react";
function Hero() {
  return (
    <div
      className="container p-5 mb-1"
      style={{
        backgroundImage: `url('media/images/news.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        padding: "20px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="row text-center"
        style={{
          color: "pink",
          fontFamily: "Bebas Neue, sans-serif",
          fontWeight: "600",
          fontStyle: "normal",
          marginTop: "180px",
        }}
      >
        <h1 className="mt-5 fs-1 ">Reunion Homecoming and All Alumni Day</h1>
        <p className="text-muted" style={{ color: "white" }}>
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
          <p style={{ color: "white" }}>
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
              class="fa fa-long-arrow-right m-1 "
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-2">Calling All Degrees and Years </h1>
          <h2 className="fs-4">December 31, 2024</h2>
          <p style={{ color: "white" }}>
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
