import React from "react";
import Tag from "../Tag";
 
const GoodComponent = ({ data: { name, price, type, color, size, image } }) => {
  return (
    <div className="good_item">
      <div className="good_item_pic">
        <img src={image} alt={name} />
      </div>
      <div className="good_item_body">
        <h3 className="good_item_title">{name}</h3>
        <p className="good_item_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          corrupti, debitis omnis error sunt nesciunt sequi odio iusto nostrum.
        </p>
        <b className="good_item_price">{price}.$</b>
        <div className="good_item_tags">
          <Tag title={type} />
          <Tag title={color} />
          <Tag title={size} />
        </div>
      </div>
    </div>
  );
};

export default GoodComponent;
