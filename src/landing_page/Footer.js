import React from "react";

function Footer() {
  return (
    <footer className="border-top mt-5">
      <div className="container ">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/unilogo1.svg" style={{ width: "50%" }}></img>
            <h5 className="mt-3">University Alumni Assosiation</h5>
            <p className="text-muted">
              University Alumni Center
              <br />
              678 Palwa Street
              <br />
              University,CA 94333-5640
              <br /> &copy; 2020 All rights reserved.
            </p>
          </div>
          <div className="col" style={{ marginTop: "150px" }}>
            <p>Company</p>
            <a className="text-decoration-none text-muted" href="">
              Get to Know
            </a>
            <br />
            <a className="text-decoration-none text-muted" href="">
              University Magazine
            </a>
            <br />
            <a className="text-decoration-none text-muted" href="">
              Contact Us
            </a>
            <br />
            <a className="text-decoration-none text-muted" href="">
              Help
            </a>
            <br />
          </div>
          <div className="col" style={{ marginTop: "150px" }}>
            <p>Check Member Card</p>
            <a className="text-decoration-none text-muted" href="">
              Alumni Email
            </a>{" "}
            <br />
            <a className="text-decoration-none text-muted" href="">
              Giving
            </a>{" "}
            <br />
            <a className="text-decoration-none text-muted" href="">
              My Alumni Account
            </a>{" "}
            <br />
          </div>
          <div className="col" style={{ marginTop: "150px" }}>
            <p>Account</p>
            <a className="text-decoration-none text-muted" href="">
              Open an account
            </a>
            <br />
            <br />
          </div>
        </div>

        <div
          className="row mx-auto text-center align-items-center"
          style={{ width: "80%", fontSize: "14px", marginTop: "150px" }}
        >
          <div className="col ">
            <a className="text-decoration-none text-muted" href="">
              University Home
            </a>
          </div>
          <div className="col">
            <a className="text-decoration-none text-muted" href="">
              Maps& Directions
            </a>
          </div>
          <div className="col ">
            <a className="text-decoration-none text-muted" href="">
              Search
            </a>
          </div>
          <div className="col ">
            <a className="text-decoration-none text-muted" href="">
              Emergency Info
            </a>
          </div>
          <div className="col ">
            <a className="text-decoration-none text-muted" href="">
              Term of Use
            </a>
          </div>
          <div className="col">
            <a className="text-decoration-none text-muted" href="">
              Privacy
            </a>
          </div>
          <div className="col">
            <a className="text-decoration-none text-muted" href="">
              Tradmarks
            </a>
          </div>
          <div className="col">
            <a className="text-decoration-none text-muted" href="">
              Assessbliity
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
