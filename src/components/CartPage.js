import React, { useEffect, useState } from "react";
import CartProductCard from "./CartProductCard";
import { Link } from "react-router-dom";

export default function CartPage({ cartProducts, setCartProducts }) {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let gin = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      gin += cartProducts[i].wholePrice;
    }
    setTotalPrice(gin);
  }, [cartProducts]);
  return (
    <div className="container" id="orders">
      <h1 className="display-4 ">Orders</h1>

      {cartProducts.length > 0
        ? cartProducts.map((product) => {
            return (
              <CartProductCard
                product={product}
                key={product.id}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            );
          })
        : null}

      <h1 className="text-danger mt-5 "> {totalPrice}$</h1>

      <div className=" mt-2 mb-2 ">
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Register
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Check Out
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
                    <label for="recipient-name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Surname:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Mail:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Phone:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Country:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      City:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Adress:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />


                   <div className="container-fluid">
                      <div className="row d-flex">



                        <div className="custom-control custom-checkbox col-4">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="1"/>
                        <label className="custom-control-label" for="1"  ></label>
                        <img className="img-fluid" src="https://i.pinimg.com/originals/55/a3/c2/55a3c2e6e01843e209cf2c2b279363b9.png"/>
                      </div>

                      <div className="custom-control custom-checkbox col-4">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="2"/>
                        <label className="custom-control-label" for="2"  ></label>
                        <img className="img-fluid" src="http://www.armbanks.am/wp-content/uploads/2017/10/%D0%90%D0%A0%D0%9A%D0%90_%D0%BA%D0%B0%D1%80%D1%82%D0%B0.jpg"/>
                      </div>

                      <div className="custom-control custom-checkbox col-4">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="3"/>
                        <label className="custom-control-label" for="3"  ></label>
                        <img className="img-fluid"  src="https://psm7.com/wp-content/uploads/2013/03/Discover.jpg"/>
                      </div>

                      <div className="custom-control custom-checkbox col-4">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="4"/>
                        <label className="custom-control-label" for="4"  ></label>
                        <img className="img-fluid" src="https://shopper.life/images/faq/paypal_logo.png"/>
                      </div>

                      <div className="custom-control custom-checkbox col-4">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="5"/>
                        <label className="custom-control-label" for="5"  ></label>
                        <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/320px-MasterCard_Logo.svg.png"/>
                      </div>

                      <div className="custom-control custom-checkbox col-4">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="6"/>
                        <label className="custom-control-label" for="6"  ></label>
                        <img className="img-fluid" src="https://img2.freepng.ru/20180324/apw/kisspng-visa-electron-credit-card-debit-card-payment-mastercard-5ab6ff0de763e2.6395189915219422859478.jpg"/>
                      </div>


                      <label for="recipient-name" className="col-form-label">
                      Card Number:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Card Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      M/M:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Y/Y:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    <label for="recipient-name" className="col-form-label">
                      Cvv:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                    </div>
                   </div>


                    
                     





                    </div>
                </form>
              </div>


              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>





























        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Check Out
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
                <p>You have spent {totalPrice}$</p>
              </div>
              <div className="modal-footer d-flex justify-content-center align-items-center">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
