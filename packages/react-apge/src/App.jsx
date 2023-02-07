import { useEffect, useState } from "react";
import FilterBlock from "./blocks/FilterBlock";
import GoodsBlock from "./blocks/GoodsBlock";
import { SearchInput } from "./components";

const defFilters = {
  type: null,
  size: null,
  color: null,
};

function App() {
  const [filters, setFilters] = useState(defFilters);

  const setFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    setFilters(defFilters);
  };

  return (
    <div className="wrap">
      <section className="section filters">
        <h2 className="title">Prodcut Search</h2>
        <SearchInput />
        <div className="block block_filters">
          <FilterBlock filters={filters} setFilter={setFilter} field={"type"} />
          <FilterBlock
            filters={filters}
            setFilter={setFilter}
            field={"color"}
          />
          <FilterBlock filters={filters} setFilter={setFilter} field={"size"} />
        </div>
      </section>
      <GoodsBlock resetFilters={resetFilters} filters={filters} />
    </div>
  );
}

export default App;
