import React from "react";
import { CDN_URL } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utilis/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an Action
    dispatch(addItem(item))
  }
  console.log(items);
  return (
    <React.Fragment>
      <div>
        {items.map((item) => (
          <div className="category-list-item" key={item.card.info.id}>
            <div>
              <span>
                <span class="bestseller-badge">Bestseller</span>{" "}
                {item.card.info.name} - <b>₹{item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrice /100}</b></span>
            </div>
            <div class="rating">
              <span>★</span>
              <span>4.4 (123)</span>
              <img src={CDN_URL +item.card.info.imageId} className="category-item-img" />
              <button className="add-btn" onClick={() => handleAddItem(item)}>Add</button>
            </div>
            <p>{item.card.info.description}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ItemList;
