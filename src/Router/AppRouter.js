import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopPage from "../components/ShopPage/ShopPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import App from "../components/App";
import ProductPage from "../components/ProductPage";
import CartPage from "../components/CartPage";

export default function AppRouter() {
  const products = [
    {
      title: <h3>GOOGLE PIXEL 5</h3>,
      id: 1,
      type: "phone",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/81-fNmQqlLL._AC_SX522_.jpg",
      cardText: "2020, September 30",
      sale: "144.7 X 70.4 X 8 mm , Front glass (Gorilla Glass 6), aluminum back, aluminum frame",
      control: "12.2 MP, Dual Camera",
      charachter1: "4080 mAh, Li-Po, Unchangeable”",
      price: 700,
    },
    {
      title: <h3>Samsung Galaxy Note20 Ultra</h3>,
      id: 2,
      type: "phone",
      img:
        "https://www.ixbt.com/img/n1/news/2020/11/2/Samsung-Galaxy-S21-Ultra-1608217141-0-0_large.jpg",
      cardText: "2020, August 05",
      sale: "161.6 X 75.2 X 8.3 mm , Front glass (Gorilla Glass 5), plastic back",
      control: "12 MP, triple camera",
      charachter1: "4300 mAh, Unchangeable, Li-Ion”",
      price: 950,
    },
    {
      title: <h3>APPLE IPHONE 12 PRO MAX </h3>,
      id: 3,
      type: "phone",
      img:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
      cardText: " 2020, October 13",
      sale: "160.8 X 78.1 X 7.4 mm ,  Front glass (Gorilla Glass), back glass (Gorilla Glass), stainless steel frame",
      control: "3687 mAh, Li-Ion, Unchangeable",
      charachter1: "12 MP, Quad camera",
      price: 1220,
    },
    {
      title: <h3>Ipad Air</h3>,
      id: 4,
      type: "tablet",
      img:
        "https://img.mvideo.ru/Pdb/30052635b.jpg",
      cardText: "Screen - 10.2 / 2160x1620 pixel",
      sale: "Processor type -  A12 Bionic ",
      control: "Built-in memory (ROM) - 32 GB",
      charachter1: "Built-in Bluetooth module - 4.2",
      price: 350,
    },
    {
      title: <h3>Apple iPad Pro 11 (2020) 128GB Wi-Fi Space Grey</h3>,
      id: 5,
      type: "tablet",
      img:
        "https://img.mvideo.ru/Pdb/30048872b.jpg",
      cardText: "Screen11 / 2388x1668 pixels",
      sale: "Processor type - A12Z Bionic + M12",
      control: "Built-in memory (ROM) - 128 GB",
      charachter1: "Built-in Bluetooth module - 5.0",
      price: 500,
    },
    {
      title: <h3>Tablet Digma CITI 10 C402T (CS1044EW)</h3>,
      id: 6,
      type: "tablet",
      img:
        "https://img.mvideo.ru/Pdb/30054681b.jpg",
      cardText: "Screen - 10.1 / 1280x800 pixels",
      sale: "Random access memory (RAM) - 4 GB ",
      control: "Number of Cores - 2",
      charachter1: "Processor type -  Celeron N3350 1.1GHz",
      price: 280,
    },
    {
      title: <h3>Smart watch Xiaomi Mi Watch Lite Black (BHR4704RU)</h3>,
      id: 7,
      type: "watch",
      img:
        "https://img.mvideo.ru/Pdb/30055001b.jpg",
      cardText: "Diagonal / Resolution - 1.4 / 320x320 pixels.",
      sale: "Waterproof case - Yes ",
      control: "Built-in Bluetooth module - Yes",
      charachter1: "Compatibility - Android 5.0 and above, iOS 10 and above",
      price: 100,
    },
    {
      title: <h3>Smart watch Huawei Watch GT 2 Pro Black (VID-B19)</h3>,
      id: 8,
      type: "watch",
      img:
        "https://img.mvideo.ru/Pdb/30050949b.jpg",
      cardText: "Diagonal / Resolution - 1.39 / 454x454 pix.",
      sale: "Waterproof case - Yes ",
      control: "Built-in Bluetooth module - 5.1",
      charachter1: "CompatibilityFlash memory (ROM)  - 5GB",
      price: 120,
    },
    {
      title: <h3>Smart watch Emporio Armani Matteo DW7E1 (ART5007)</h3>,
      id: 9,
      type: "watch",
      img:
        "https://img.mvideo.ru/Pdb/30044817b.jpg",
      cardText: "Diagonal / Resolution - 1.19 / 390х390 pix",
      sale: "Max. working hours - 24 hours ",
      control: "Built-in Bluetooth module - 5.1",
      charachter1: "CompatibilityFlash memory (ROM)  - 5GB",
      price: 350,
    },
    {
      title: <h3>Novex TV NWT- 40F171MS </h3>,
      id: 10,
      type: "tv",
      img:
        "https://img.mvideo.ru/Pdb/10024674b.jpg",
      cardText: "Screen - 40 / 1920x1080 pixels",
      sale: "Digital noise reduction - Yes ",
      control: "DVB digital tuner - T2 / C / S2",
      charachter1: "Sound  - Dolby Digital 2.0",
      price: 230,
    },
    {
      title: <h3>Samsung TV UE43TU7170U</h3>,
      id: 11,
      type: "tv",
      img:
        "https://img.mvideo.ru/Pdb/10023531b.jpg",
      cardText: "Screen - Crystal UHD",
      sale: "Smart TV support - Yes ",
      control: "Screen - 43 / 3840x2160 pixels",
      charachter1: "Sound  - Dolby Digital 2.0",
      price: 560,
    },
    {
      title: <h3>LG NanoCell 65NANO956NA TV</h3>,
      id: 12,
      type: "tv",
      img:
        "https://img.mvideo.ru/Pdb/10024138b.jpg",
      cardText: "Screen - 40 / 1920x1080 pixels",
      sale: "Digital noise reduction - Yes ",
      control: "DVB digital tuner - T2 / C / S2",
      charachter1: "Sound  - Dolby Digital 2.0",
      price: 390,
    },
    {
      title: <h3>Sony Alpha 1 Mirrorless Digital Camera (Body Only) </h3>,
      id: 13,
      type: "camera",
      img:
        "https://static.bhphoto.com/images/images500x500/sony_ilce_1_b_alpha_a1_mirrorless_digital_1611656508_1619483.jpg",
      cardText: "50MP Full-Frame Exmor RS BSI CMOS Sensor",
      sale: "Up to 30 fps Shooting, ISO 50-102400",
      control: "8K 30p and 4K 120p Video in 10-Bit",
      charachter1: "4.3K 16-Bit Raw Video Output, S-Cinetone",
      price: 6400,
    },
    {
      title: <h3>Canon EOS R5 Mirrorless Digital Camera (Body Only)</h3>,
      id: 14,
      type: "camera",
      img:
        "https://static.bhphoto.com/images/images500x500/canon_eos_r5_mirrorless_digital_1594282826_1547009.jpg",
      cardText: "45MP Full-Frame CMOS Sensor",
      sale: "DIGIC X Image Processor",
      control: "8K30 Raw and 4K120 10-Bit Internal Video",
      charachter1: "Sensor-Shift 5-Axis Image Stabilization",
      price: 3890,
    },
    {
      title: <h3>Sony Alpha a7S III Mirrorless Digital Camera (Body Only)</h3>,
      id: 15,
      type: "camera",
      img:
        "https://static.bhphoto.com/images/images500x500/sony_ilce7sm3_b_alpha_a7s_iii_mirrorless_1595930779_1577838.jpg",
      cardText: "12MP Full-Frame Exmor R BSI CMOS Sensor",
      sale: "UHD 4K 120p Video, 10-Bit 4:2:2 Internal ",
      control: "16-Bit Raw Output, HLG & S-Cinetone",
      charachter1: "759-Point Fast Hybrid AF",
      price: 3500,
    },
  ];

  const [cartProducts, setCartProducts] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <App products={products} />
        </Route>
        <Route path="/shop">
          <ShopPage initialProducts={products} />
        </Route>
        <Route path="/product/:id">
          <ProductPage
            products={products}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        </Route>
        <Route path="/cart">
          <CartPage
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
