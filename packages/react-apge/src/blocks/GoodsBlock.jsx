import React, { useEffect, useState } from "react";
import GoodComponent from "../components/Good/GoodComponent";
import { filterByKey } from "../helpers/filterByKey";
import useFetch from "../hooks/useFetch";

const GoodsBlock = ({ filters }) => {
  const [filterdData, setFiltredData] = useState([]);
  const { data, loading, error } = useFetch(`http://localhost:5001/items`);

  const filterData = () => {
    let tempData = [...data];
    let keys = Object.keys(filters);
    keys.forEach((key) => {
      if (filters[key]) {
        tempData = filterByKey(tempData, key, filters[key]);
      }
    });
    console.log(tempData, 3);

    setFiltredData(tempData);
  };

  useEffect(() => {
    data && filterData();
  }, [data]);

  if (error)
    return <span className=" tag error">error with loading items</span>;
  if (loading) return <span>loading</span>;
  return (
    <section className="section list">
      {data &&
        filterdData.map((good) => <GoodComponent key={good.id} data={good} />)}
    </section>
  );
};

export default GoodsBlock;
