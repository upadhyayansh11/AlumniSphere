import React from "react";
function Updation() {
  return (
    <div
      className="container"
      style={{
        fontFamily: "Bebas Neue, sans-serif",
        fontWeight: "600",
        fontStyle: "normal",
        marginTop: "180px",
      }}
    >
      <h1 style={{ color: "pink" }}>Get Updates and Get involved </h1>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="firstname" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            required
          ></input>
          <div class="valid-feedback">Name looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="lastname" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            required
          ></input>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">
            Username
          </label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            ></input>
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            required
          ></input>
          <div class="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">
            State
          </label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chandigarh</option>
            <option>Chhattisgarh</option>
            <option>Delhi</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jammu and Kashmir</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Ladakh</option>
            <option>Lakshadweep</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Puducherry</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal </option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            ></input>
            <label class="form-check-label" for="invalidCheck">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" className="btn btn-dark add-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Updation;
