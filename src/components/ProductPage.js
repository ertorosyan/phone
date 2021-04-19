import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productpage.scss";

export default function ProductPage({
  products,
  cartProducts,
  setCartProducts,
}) {
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);
  const id = useParams().id;

  useEffect(() => {
    setProduct(products.find((elem) => elem.id == id));
  }, []);

  const addToCart = (id, count) => {
    const elemFound = cartProducts.find((elem) => elem.id === product.id);
    if (!elemFound) {
      const newCartProduct = {
        ...product,
        count: count,
        wholePrice: count * product.price,
      };

      setCartProducts((prev) => {
        return [...prev, newCartProduct];
      });
    } else {
      const newCartProduct = {
        ...product,
        count: count + elemFound.count,
        wholePrice: (count + elemFound.count) * product.price,
      };
     
      const newProducts = cartProducts.filter((pr) => pr.id !== id);
      setCartProducts(() => {
        return [...newProducts, newCartProduct];
      });
    }
  };

  console.log(cartProducts);

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="col-12 col-md-6">
        <div className="col-12">
          <img src={product.img} className="img-fluid" />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div>
          <h2>{product.title}</h2>

          <h2>{product.price}$</h2>
          <h4 className="text-danger ">Cash {product.price - 50}$</h4>
        </div>
        <div>
          <div className=" mb-3 mt-3 col-12">
            <li>{product.cardText}</li>
            <li>{product.sale}</li>
            <li>{product.control}</li>
            <li>{product.charachter1}</li>
          </div>
          <div className="col-12 mb-3 mt-3">
            <div className="row">
              <div className="input-group col-6 ">
                <div className="plus_minus_buttons ">
                  <div className="shop_count_button" onClick={decrementCount}>
                    -
                  </div>
                  <div className="shop_count">{count}</div>
                  <div className="shop_count_button" onClick={incrementCount}>
                    +
                  </div>

                  <div
                    className="ui vertical animated button standart ml-2"
                    tabIndex="0"
                    onClick={() => addToCart(product.id, count)}
                  >
                    <div className="hidden content">Shop</div>
                    <div className="visible content">
                      <i className="shop icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
