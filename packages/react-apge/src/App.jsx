import { useState } from "react";
import FilterBlock from "./blocks/FilterBlock";
import { SearchInput } from "./components"; 


function App() {
  const [filters, setFilters] = useState({
    type: null,
    color: null,
    size: null,
  });

  return (
    <div className="wrap">
      <section className="section filters">
        <h2 className="title">Prodcut Search</h2> 

            <SearchInput />
         
       
          <div className="block block_filters">
            <FilterBlock field={'types'}/>
            <FilterBlock field={'colors'}/>
            <FilterBlock field={'sizes'}/>
           </div>
       
      
      </section>
      <section className="section list">list</section>
    </div>
  );
}

export default App;
