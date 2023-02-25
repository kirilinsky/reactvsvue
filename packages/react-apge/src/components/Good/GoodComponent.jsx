import React, { useEffect, useState } from "react";
import Tag from "../Tag";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useColor } from "color-thief-react";
import { useCartDispatch } from "../../hooks/useCartStore";

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 1 } },
  hidden: { opacity: 0 },
};

const GoodComponent = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { name, price, type, color, size, image } = data;

  const { data: bg } = useColor(image, "hex", {
    crossOrigin: true,
    quality: 10,
  });

  const dispatch = useCartDispatch();

  const buyItem = () => {
    dispatch({ type: "ADD", payload: data });
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      ref={ref}
      initial="hidden"
      variants={squareVariants}
      className="square"
    >
      <div style={{ background: bg }} className="good_item">
        <div className="good_item_pic">
          <img src={image} alt={name} />
        </div>
        <div className="good_item_body">
          <h3 className="good_item_title">{name}</h3>
          <p className="good_item_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            corrupti, debitis omnis error sunt nesciunt sequi odio iusto
            nostrum.
          </p>
          <b className="good_item_price">{price}.$</b>
          <div className="good_item_tags">
            <Tag title={type} />
            <Tag title={color} />
            <Tag title={size} />
          </div>
          <button className="good_item_action" onClick={buyItem}>
            Buy
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GoodComponent;
