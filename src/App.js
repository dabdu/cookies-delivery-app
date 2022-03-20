import {
  AccountBalanceWalletRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./App.css";
import BannerName from "./Components/BannerName";
import Header from "./Components/Header";
import MenuContainer from "./Components/MenuContainer";
import SubMenuContainer from "./Components/SubMenuContainer";
import bannerImg from "./Images/delivery.png";
import MenuCard from "./Components/MenuCard";
import { MenuItems, Items } from "./Data";
import ItemCard from "./Components/ItemCard";
import DebitCard from "./Components/DebitCard";
function App() {
  const [mainData, setMainData] = useState(Items);
  const [title, setTitle] = useState("All Items");
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");
    menuLi[0].classList.add("active");
    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    const rowContainer = document.querySelectorAll(
      "#rowContainer .rowMenuCard"
    );
    function setRowMenuActive() {
      rowContainer.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    rowContainer.forEach((n) => n.addEventListener("click", setRowMenuActive));
  }, [mainData]);
  const setData = (itemId) => {
    setMainData(Items.filter((m) => m.itemId === itemId));
    const newTitle = MenuItems.find((menu) => {
      return menu.itemId === itemId;
    });
    setTitle(newTitle.name);
    console.log(newTitle.name);
  };

  // console.log(mainData);
  return (
    <div className="App">
      {/* HEader Container */}
      <Header />
      {/* Main Container */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name="Ibrahim Dauda" discount={"3000"} link={"#"} />
            <img src={bannerImg} alt="Delivery" className="deliveryPic" />
          </div>
        </div>
        {/* Dish Container */}
        <div className="dishContainer"></div>
        <div className="menuCard">
          <SubMenuContainer name={"Menu Caterogy"} />
        </div>
        <div id="rowContainer" className="rowContainer">
          {MenuItems.map((menu) => (
            <div key={menu.id} onClick={() => setData(menu.itemId)}>
              <MenuCard menu={menu} />
            </div>
          ))}
        </div>
        <h2>{title}</h2>
        <div className="dishitemContainer">
          {mainData.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        {/* <div className="rightMenu">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
        </div> */}
      </main>

      {/* Bottom Menu Container */}
      <div className="bottomMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<HomeRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<Chat />} />
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<AccountBalanceWalletRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          {/* prettier-ignore */}
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
