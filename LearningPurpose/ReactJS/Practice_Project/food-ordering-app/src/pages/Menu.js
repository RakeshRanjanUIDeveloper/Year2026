import React, { useContext, useState } from "react";
import { FoodContext } from "../components/FoodContext";
import { useNavigate } from "react-router";

const Menu = () => {
  const { allMenu, handleCartClick, cartMenu } = useContext(FoodContext);
  const [query, searchQuery] = useState("");
  const [showVegOnly, setShowvegOnly] = useState(false);
  const [showSpicyOnly, setShowSpicyOnly] = useState(false);
  const [sortOrder, setShowOrder] = useState(null);
  const navigate = useNavigate();
  const inCart = (id) => cartMenu.some((menu) => menu.id === id);

  const filteredMenu = allMenu
    .filter((menu) => menu.name.toLowerCase().includes(query.toLowerCase()))
    .filter((menu) => (showVegOnly ? menu.is_vegetarian === true : true))
    .filter((menu) => (showSpicyOnly ? menu.is_spicy === true : true))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  const handleveg = () => setShowvegOnly((prev) => !prev);
  const handleSpicy = () => setShowSpicyOnly((prev) => !prev);

  const handleSortLowToHigh = () => setShowOrder("asc");
  const handleSortHighToLow = () => setShowOrder("desc");

  return (
    <React.Fragment>
      <div className="filter-container">
        <input
          type="search"
          placeholder="Search your foods..."
          value={query}
          onChange={(e) => searchQuery(e.target.value)}
        />
        <div className="filters">
          <div className="filter-item">
            <input type="checkbox" onChange={handleveg} />
            <label htmlFor="veg">Veg</label>
          </div>
          <div className="filter-item">
            <input type="checkbox" onChange={handleSpicy} />
            <label htmlFor="spicy">Spicy</label>
          </div>
          <div className="filter-item">
            <input
              type="radio"
              name="sort"
              onChange={handleSortLowToHigh}
              checked={sortOrder === 'asc'}
            />
            <label htmlFor="lowToHigh">Sort (Price) Low to High</label>
          </div>
          <div className="filter-item">
            <input
              type="radio"
              name="sort"
              onChange={handleSortHighToLow}
              checked={sortOrder === 'desc'}
            />
            <label htmlFor="highToLow">Sort (Price) High to Low</label>
          </div>
        </div>
      </div>
      <div className="menu-cards">
        {filteredMenu.map((menu) => (
          <div className="menu-card" key={menu.id}>
            <img src={menu.image} alt={menu.name} />
            <p>
              <b>Name -</b> {menu.name}
            </p>
            <p>
              <b>Description -</b> {menu.description}
            </p>
            <p>
              <b>Price -</b> Rs.{menu.price}
            </p>
            <p>
              <b>Delivery Time -</b> {menu.delivery_time} mins
            </p>
            <button onClick={() => {
              if(inCart(menu.id)){
                navigate('/cart')
              }else{
                handleCartClick(menu)
              }
            }}>{inCart(menu.id) ? "Go to Cart" : "Add to Cart"}</button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Menu;
