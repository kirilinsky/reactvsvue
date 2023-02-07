import { useState } from "react";
import FilterBlock from "./blocks/FilterBlock";
import GoodsBlock from "./blocks/GoodsBlock";
import { SearchInput } from "./components";

function App() {
  const [filters, setFilters] = useState({
    type: "jeans",
    size: "s",
    color: null
  });

  return (
    <div className="wrap">
      <section className="section filters">
        <h2 className="title">Prodcut Search</h2> 
        <SearchInput /> 
        <div className="block block_filters">
          <FilterBlock field={"types"} />
          <FilterBlock field={"colors"} />
          <FilterBlock field={"sizes"} />
        </div>
      </section>
      <GoodsBlock filters={filters} />
    </div>
  );
}

export default App;
