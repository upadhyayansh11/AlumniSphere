import React from "react";

function Signup() {
  return (
    <div
      class="row mt-3"
      style={{
        fontFamily: "Bebas Neue, sans-serif",
        fontWeight: "600",
        fontStyle: "normal",
        marginTop: "180px",
      }}
    >
      <h1 class="col-6 offset-3" style={{ color: "pink" }}>
        SignUp on Alumni Assosiation
      </h1>
      <div class="col-6 offset-3">
        <form
          action="/signup"
          method="POST"
          class="needs-validation"
          novalidate
        >
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              name="username"
              id="username"
              type="text"
              class="form-control"
              required
            ></input>
            <div class="valid-feedback">Looks good</div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="text"
                class="form-control"
                required
              ></input>
            </div>
            <div class="mb-3">
              <label for="passsword" class="form-label">
                Password
              </label>
              <input
                name="password"
                id="password"
                type="password"
                class="form-control"
                required
              ></input>
            </div>
            <button type="submit" className="btn btn-dark add-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
