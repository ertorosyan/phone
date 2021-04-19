import React from "react";

export default function CartProductCard({ product,cartProducts, setCartProducts }) {
    const removeProduct = (id) => {
        const newProducts = cartProducts.filter(item => item.id !== id )
        setCartProducts(newProducts)
    }
  return (
    <div className="row">
      <div className="col-12 mt-2 border border-dark">
        <div className=" d-flex">
          <div className="col-5 col-lg-3 ">
            <img src={product.img} className="img-fluid w-100" />
          </div>

          <div className="col-6 d-flex justify-content-center align-items-center ">
            <h2 className="text-danger"> Count: {product.count}</h2>
            <div
                    className="ui vertical animated button standart ml-2"
                    tabIndex="0"
                    onClick={() => removeProduct(product.id)}
                  >
                    <div className="hidden content">Remove</div>
                    <div className="visible content">
                      <i className="trash alternate icon"></i>
                    </div>
                  </div>
           
          </div>

          <div className="col-7 col-lg-3 d-flex justify-content-center align-items-center">
            <h1 className="text-danger "> {product.wholePrice}$</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
