import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <a
            href="#"
            className=" bg-dark text-light list-group-item list-group-item-action text-uppercase font-weight-bold  text-center col-lg-3 col-sm-12"
          >
            Contact us
          </a>
          <a
            href="#"
            className=" bg-dark text-light list-group-item list-group-item-action text-uppercase font-weight-bold text-center col-lg-3 col-sm-12"
          >
            Live chat
          </a>
          <a
            href="#"
            className=" bg-dark text-light list-group-item list-group-item-action text-uppercase font-weight-bold text-center col-lg-3 col-sm-12"
          >
            Shipping
          </a>
          <a
            href="#"
            className=" bg-dark text-light list-group-item list-group-item-action text-uppercase font-weight-bold text-center col-lg-3 col-sm-12"
          >
            Term & conditions
          </a>
        </div>
        <div className="row d-none d-lg-flex">
          <div className="col pr-0 border">
            <div className="list-group">
              <h5 className="text-uppercase">Samsung</h5>
              <a href="#" className="list-group-item-action">
                Samsung Galaxy Z Flip
              </a>
              <a href="#" className="list-group-item-action">
                Samsung Galaxy S10 Plus
              </a>
              <a href="#" className="list-group-item-action ">
                amsung Galaxy S9 Plus
              </a>
            </div>
          </div>
          <div className="col pr-0 border">
            <div className="list-group">
              <h5 className="text-uppercase">Apple</h5>
              <a href="#" className="list-group-item-action">
                iPhone SE
              </a>
              <a href="#" className="list-group-item-action ">
                iPhone 11 Pro
              </a>
              <a href="#" className="list-group-item-action">
                iPhone 11 Pro Max
              </a>
            </div>
          </div>
          <div className="col pr-0 border">
            <div className="list-group">
              <h5 className="text-uppercase">Lenovo</h5>
              <a href="#" className="list-group-item-action">
                Lenovo Vibe X2 Pro
              </a>
              <a href="#" className="list-group-item-action">
                Lenovo A806
              </a>
              <a href="#" className="list-group-item-action">
                Lenovo K3 Music Lemon
              </a>
            </div>
          </div>
          <div className="col pr-0 border">
            <div className="list-group">
              <h5 className="text-uppercase">Lg</h5>
              <a href="#" className="list-group-item-action ">
                LG G7 fit
              </a>
              <a href="#" className="list-group-item-action">
                LG K9
              </a>
              <a href="#" className="list-group-item-action">
                LG G7 ThinQ
              </a>
            </div>
          </div>
          <div className="col pr-0 border">
            <div className="list-group">
              <h5 className="text-uppercase">Redmi</h5>
              <a href="#" className="list-group-item-action ">
                Xiaomi Mi
              </a>
              <a href="#" className="list-group-item-action">
                Xiaomi Mi Note
              </a>
              <a href="#" className="list-group-item-action">
                Xiaomi Mi Max
              </a>
            </div>
          </div>
        </div>
        <nav className=" row bg-dark text-white navbar navbar-dark  ">
          <div className=" col-lg-6 d-none d-lg-block align-items-baseline">
          
            <img
              src="https://image.flaticon.com/icons/svg/889/889102.svg"
              className="px-1"
              width="25px"
            />
            <img
              src="https://image.flaticon.com/icons/svg/1384/1384063.svg"
              className="px-1"
              width="25px"
            />
            <img
              src="https://image.flaticon.com/icons/svg/2965/2965363.svg"
              className="px-1"
              width="25px"
            />
            <img
              src="https://image.flaticon.com/icons/svg/732/732200.svg"
              className="px-1"
              width="25px"
            />
          </div>
          <div className="col-12 col-lg-6 ">
            <p>Torosyan Erik</p>
          </div>
        </nav>
      </div>
    </div>
  );
}
