import React, { useEffect, useState } from "react";
import GoodComponent from "../components/Good/GoodComponent";
import Tag from "../components/Tag";
import { filterByKey } from "../helpers/filterByKey";
import useFetch from "../hooks/useFetch";

const GoodsBlock = ({ filters, resetFilters }) => {
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
    setFiltredData(tempData);
  };

  useEffect(() => {
    data && filterData();
  }, [data, filters]);

  if (error) return <Tag error title={"error with loading goods"} />;
  if (loading) return <span>loading</span>;
  return (
    <section className="section list">
      {data && !filterdData.length ? (
        <Tag error title={"No such data, try to change some filter"} />
      ) : (
        filterdData.map((good) => <GoodComponent key={good.id} data={good} />)
      )}
    </section>
  );
};

export default GoodsBlock;
