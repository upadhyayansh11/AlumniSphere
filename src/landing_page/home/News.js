import React from "react";

function News() {
  return (
    <div
      className="container  mb-5"
      style={{
        color: "pink",
        fontFamily: "Bebas Neue, sans-serif",
        fontWeight: "600",
        fontStyle: "normal",
        marginTop: "180px",
      }}
    >
      <div className="row text-center">
        <h1 className="fs-1 underline">Important Announcement and News</h1>
        <div className="col-6 p-5">
          <h2 className="fs-3 mb-5">News</h2>
          <h5 className="p-2">Alumna Named CEO of Leading Tech Company</h5>
          <p className="text-muted">
            October 20, 2023 – University alumna, Sarah Johnson (Class of ’98),
            has been appointed as the CEO of InnovateTech, a leading global
            technology firm. Sarah, who graduated with a degree in Computer
            Science, has been recognized for her innovative leadership and
            commitment to tech advancement. She shares, “I’m thrilled to lead a
            company that prioritizes groundbreaking solutions and looks forward
            to inspiring the next generation of tech enthusiasts.”
          </p>
          <h5 className="p-2">
            Annual Scholarship Fund Exceeds $1 Million in Alumni Donations
          </h5>
          <p className="text-muted">
            September 15, 2023 – Thanks to the generosity of our alumni, the
            Annual Scholarship Fund has surpassed $1 million in donations,
            marking a new record for our institution. These contributions will
            go towards supporting students in need, enabling them to pursue
            their education without financial barriers. President John Doe
            stated, “The alumni community’s commitment to giving back is
            invaluable, and we’re deeply grateful for this impactful support.”
          </p>
          <h5 className="p-2">
            Alumni Startups Lead in Environmental Sustainability Initiatives
          </h5>
          <p className="text-muted">
            August 5, 2023 – This year, several alumni-led startups were
            recognized at the GreenTech Innovation Awards for their initiatives
            in sustainability. Among the honorees was GreenFuture, founded by
            David Lee (Class of ’12), which aims to reduce single-use plastic
            through biodegradable alternatives. David reflects, “Our goal is to
            make sustainable choices accessible to all, and this recognition
            affirms that we’re making strides in the right direction.”
          </p>
          <a
            href=""
            className="mx-5 "
            style={{ textDecoration: "none", color: "black" }}
          >
            <b>View More</b>
            <i
              class="fa fa-long-arrow-right "
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="col-6 p-5">
          <h2 className="fs-3 mb-5">Events</h2>
          <h5 className="p-2">Annual Alumni Gala Night</h5>
          <p className="text-muted">
            <b>Date:</b> March 15, 2024
          </p>
          <p className="text-muted">
            <b>Location:</b> Grand Ballroom,University
          </p>
          <p className="text-muted" style={{ color: "black" }}>
            Join us for an elegant evening celebrating the achievements and
            contributions of our alumni. Enjoy a night of dining, live
            entertainment, and recognition awards. Dress to impress and
            reconnect with fellow graduates in a night of nostalgia and
            celebration.
          </p>
          <h5 className="p-2">Annual Alumni Gala Night</h5>
          <p className="text-muted">
            <b>Date:</b> February 20, 2024
          </p>
          <p className="text-muted">
            <b>Location:</b> Online (Zoom)
          </p>
          <p className="text-muted" style={{ color: "black" }}>
            Join us for our monthly book club discussion! This month, we’ll be
            reading The Innovator's Dilemma by Clayton Christensen. Connect with
            alumni from all over the world, share insights, and enjoy a lively
            discussion on this business classic.
          </p>
          <h5 className="p-2">Annual Alumni Gala Night</h5>
          <p className="text-muted">
            <b>Date:</b> April 22, 2024 (Earth Day)
          </p>
          <p className="text-muted">
            <b>Location:</b> Riverside Park
          </p>
          <p className="text-muted" style={{ color: "black" }}>
            Give back to the community on Earth Day! Join us for a community
            cleanup event followed by a group lunch. Let’s work together to make
            a positive impact, all while spending time with fellow alumni.
          </p>
          <a
            href=""
            className="mx-5 "
            style={{ textDecoration: "none", color: "black" }}
          >
            <b>View More</b>
            <i
              class="fa fa-long-arrow-right "
              style={{ color: "red" }}
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
