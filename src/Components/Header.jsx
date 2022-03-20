import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import ProfileImg from "../Images/profile.jpg";
import logoImg from "../Images/logo.png";
function Header() {
  return (
    <header>
      <img src={logoImg} alt="Logo" className="logo" />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img src={ProfileImg} alt="Img" className="profileImg" />
        </div>
        <h2 className="userName">Ibrahim Dauda</h2>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
