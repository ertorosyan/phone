import React from "react";
import { Link } from "react-router-dom";

export default function ShopCard({ product }) {
  return (
    <div className="row d-flex" style={{padding: '1rem'}}>
      <div className="col-md-3 col-3 ">
        <img
          src={product.img}
          className="img-fluid "
        />
      </div>
      <div className="col-md-6 col-6 ">
        <br />
        <ul>
          <li className="text-danger">{product.title}</li>
          <li>{product.cardText}</li>
          <li>{product.sale}</li>
          <li>{product.control}</li>
          <li>{product.charachter1}</li>
          <li>{product.price}$</li>
        </ul>
      </div>
      <div className="col-xl-3 col-3 d-flex justify-content-center align-items-center">
        <Link to={`/product/${product.id}`} className="btn btn-danger">
          Buy now
        </Link>
      </div>
    </div>
  );
}
