import React from "react";
import ProductCard from "./ProductCard";

export default function App({ products }) {
  return (
    <div>
      <div
        className="alert alert-dark alert-dismissible fade show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418"
            className="img-fluid"
            width="40px"
            alt="#"
          />
          <strong className="mr-auto">Stock 899$</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="toast-body">Hello, Have a gift</div>

        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div
        id="carouselExampleCaptions"
        className="carousel slide d-none d-lg-block"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video
              playsInline="playsinline"
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source
                src="https://images.samsung.com/is/content/samsung/assets/ru/galaxy-s21/pfs/HOME_T_O_KV_Main_Animated_KV_1440X640.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="carousel-item">
            <video
              playsInline="playsinline"
              autoPlay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source
                src="https://images.samsung.com/is/content/samsung/assets/ru/p6_gro1/p6_initial_home/200616_Unrivaled_QLED_8K_PC_1440x640.mp4"
                type="video/mp4"
              />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <h1>QLED 8K</h1>
            </div>
          </div>


        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* //////////////////////////////////////////// */}

      <div className="container bg-secondary ">
        <h1 className="text-center"> Discounts </h1>
        <div className="row m-auto  ">
          {products.length != 0
            ? products.map((product, index) => {
                if (index < 3) {
                  return <ProductCard product={product} key={product.id} />;
                }
              })
            : null}
        </div>
      </div>
    </div>
  );
}
