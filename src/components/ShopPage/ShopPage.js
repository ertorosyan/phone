import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import qs from "query-string";
import ShopCard from "./ShopCard";

export default function ShopPage({ initialProducts }) {
  const [products, setProducts] = useState([]);
  const query = useLocation();
  const newquery = useMemo(() => qs.parse(query.search.replace(/\s+/g, "")), [
    query,
  ]);
  const filterProducts = (initialProducts) => {
    const newproducts = initialProducts.filter(
      (product) => product.type === newquery.type
    );
    setProducts(newproducts);
  };
  useEffect(() => {
    filterProducts(initialProducts);
  }, [newquery]);
  return (
    <div className="container">
      <div className="row">
        <div
          className="card col-md-3 d-none d-md-block"
          style={{ width: "18rem" }}
        >
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>Price</h3>
            </li>
            <li className="list-group-item">
              <div className="form-group">
                <label htmlFor="formControlRange">
                  Price'
                  <br />
                  -50,000֏ - +500,000֏
                </label>
                <input
                  type="range"
                  className="form-control-range"
                  id="formControlRange"
                />
              </div>
            </li>
            <li className="list-group-item">
              <h3>Brands</h3>
            </li>
            <li className="list-group-item">
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6">
                    <a href="">
                      <img
                        src="https://mobilecentre.am/img/brands/34e57dacf55e24d38d7d6.png"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-xl-6">
                    <a href="">
                      <img
                        src="https://w7.pngwing.com/pngs/986/821/png-transparent-nokia-logo-nokia-lumia-900-logo-nokia-ozo-smartphone-lenovo-logo-blue-electronics-company.png"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-xl-6">
                    <a href="">
                      <img
                        src="https://mobilecentre.am/img/brands/b136b1d0734a1f3d10dd1.png"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-xl-6">
                    <a href="">
                      <img
                        src="https://mobilecentre.am/img/brands/cef1fcb344a1664835442.png"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-xl-6">
                    <a href="">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/LG_Logo_Slogan_3d.svg/1024px-LG_Logo_Slogan_3d.svg.png"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <h3>Special offer</h3>
            </li>
            <li className="list-group-item">
              <div className="col-12  ">
                <button type="button" className="btn btn-danger  ">
                  Gif
                </button>
                <button type="button" className="btn btn-danger">
                  Discounts
                </button>
              </div>
              <div className="col-12 mt-1">
                <button type="button" className="btn btn-danger">
                  Discounts
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className=" col-md-9">
          {products.length != 0
            ? products.map((product) => {
                return <ShopCard product={product} key={product.id} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
