import React from "react";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <div className="card col-12 col-md " style={{ width: "15rem", padding: "1rem" }}>
      <img
        className="card-img-top img-fluid "
        src={product.img}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item">{product.cardText}</li>
        <li className="list-group-item">{product.sale}</li>
        <li className="list-group-item">{product.control}</li>
        <li className="list-group-item">{product.charachter1}</li>
        <li className="list-group-item h4">{product.price}$</li>
      </ul>
      <div className="card-body">
        <Link to={`/product/${product.id}`} className="btn btn-danger">
          Buy now
        </Link>
      </div>
    </div>
  );
}
