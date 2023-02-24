import React, { useEffect, useState } from "react";
import GoodComponent from "../components/Good/GoodComponent";
import Tag from "../components/Tag";
import { filterByKey } from "../helpers/filterByKey";
import useFetch from "../hooks/useFetch";

/* assets */
import resetIcon from "../assets/reset.png";
import loadingIcon from "../assets/loading.png";

const GoodsBlock = ({ filters, resetFilters }) => {
  const [filterdData, setFiltredData] = useState([]);
  const { data, loading, error } = useFetch(`http://localhost:5001/items`);

  const filterData = () => {
    let tempData = [...data];
    let keys = Object.keys(filters);
    keys.forEach((key) => {
      if (filters[key]) {
        if (key === "name") {
          tempData = tempData.filter(({ name }) => {
            return name.toLowerCase().includes(filters[key].toLowerCase());
          });
        } else {
          tempData = filterByKey(tempData, key, filters[key]);
        }
      }
    });
    setFiltredData(tempData);
  };

  useEffect(() => {
    data && filterData();
  }, [data, filters]);

  if (error) return <Tag error title={"error with loading goods"} />;
  if (loading)
    return (
      <div className="error-box">
        <img className="load" src={loadingIcon} alt="loading" />
      </div>
    );
  return (
    <section className="section list">
      {data && !filterdData.length ? (
        <div className="error-box">
          <h3>No results</h3>
          <button onClick={resetFilters}>
            reset filters
            <img src={resetIcon} alt="reset" />
          </button>
        </div>
      ) : (
        filterdData.map((good) => <GoodComponent key={good.id} data={good} />)
      )}
    </section>
  );
};

export default GoodsBlock;
