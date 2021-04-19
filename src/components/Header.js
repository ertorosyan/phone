import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="col-3 d-none d-lg-block">
          <p className="my-auto ">Phone.+7987-784-58-65</p>
        </div>
        <div className="col-3 d-none d-lg-block">
          <p className="my-auto">Welcome to our store</p>
        </div>
        <div className="col-6 col-lg-2">
          <select className="custom-select">
            <option value="3">EN</option>
            <option value="1">AM</option>
            <option value="2">RU</option>
          </select>
        </div>
        <div className="col-6 col-lg-2">
          <select className="custom-select">
            <option value="2">$</option>
            <option value="1">֏</option>
            <option value="3">€</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-danger col-2 d-none d-lg-block"
        >
          Wishlist <span className="badge badge-dark">7</span>
        </button>
      </nav>

      <nav className="navbar  navbar-dark bg-dark">
        <div className="col-4 col-lg-3">
          <Link to="/">
            <img
              src="https://www.freepnglogos.com/uploads/mobile-circle-logo-png-30.png"
              width="80px"
            />
          </Link>
        </div>

        <div className="col-5  d-none d-lg-block">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-4 col-lg-2">
          <div className="dropdown">
            <button
              className="btn btn-danger dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              My Account
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#LoginModal"
              >
                Login
              </a>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#RegModal"
              >
                Register
              </a>
            </div>
          </div>
        </div>
        <div className="col-2 d-lg-4">
          <Link to="/cart">
            <button
              className="btn btn-danger"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                width="30px"
                className="img-fluid"
                src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
                alt="asdf"
              />
            </button>
          </Link>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-2">
          <Link to="/shop?type=phone">
            <button
              className="btn"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Phones
            </button>
          </Link>
        </div>

        <div className="col-2">
          <Link to="/shop/?type=tablet">
            <button
              className="btn"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Tablets
            </button>
          </Link>
        </div>

        <div className="col-2">
          <Link to="/shop/?type=watch">
            <button
              className="btn"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Watches
            </button>
          </Link>
        </div>

        <div className="col-2">
          <Link to="/shop/?type=tv">
            <button
              className="btn"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              TVs
            </button>
          </Link>
        </div>

        <div className="col-2">
          <Link to="/shop/?type=camera">
            <button
              className="btn"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cameras
            </button>
          </Link>
        </div>
      </nav>
      <div
        className="modal fade"
        id="RegModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">First Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Last Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Mobile Number & Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Custom
                    </label>
                  </div>
                </div>
                <br />
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="LoginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
