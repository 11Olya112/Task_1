import "./home.css";
import Item from "../components/Item";
import ShoppingCart from '@material-ui/icons/Menu';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

let cart;
//функція, яка повертає загальну кількість товарів у магазині. 
const getTotalQuantity = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.quantity;
  });
  return total;
};

function Home() {
  cart = useSelector((state) => state.cart);//отримання стану кошика з нашого магазину Redux.
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Item
            id={4}
            title="Apple iPhone 11 128 GB Purple"
            price={500}
            image="https://tvoygadget.com.ua/wp-content/uploads/2020/04/IMAGE-2021-08-27-155951.jpg"
          />

          <Item
            id={2}
            title="Apple iPhone 13"
            price={600}
            image="https://applecover.com.ua/wp-content/uploads/2021/09/Apple-iPhone-13-128Gb-Pink.jpg"
          />

          <Item
            id={3}
            title="Samsung LC49RG90SSUXEN 49 Curve Led Gaming Monitor"
            price={199}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

          <Item
            id={5}
            title="Apple iPad Pro 11 2018 Wi-Fi 512GB Space Gray (MTXT2)"
            price={598}
            image="https://hotline.ua/img/tx/263/2630337005.jpg"
          />

          <Item
            id={1}
            title="iPhone 8 Plus 64gb"
            price={400}
            image="https://bigmag.ua/image/cache/catalog/new/Merchant/iPhone%208%20SG-650x540.jpg"
          />

          <Item
            id={6}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual QHD 5120 x 1440"
            price={1094}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
      <div className="shopping-cart" onClick={() => navigate("/cart")}>
        <ShoppingCart id="cartIcon" />
        <p>{getTotalQuantity() || 0}</p>
      </div>
    </div>
  );
}

export default Home;
