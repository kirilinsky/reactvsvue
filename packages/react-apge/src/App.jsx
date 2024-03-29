import { useState } from "react";
import FilterBlock from "./blocks/FilterBlock";
import GoodsBlock from "./blocks/GoodsBlock";
import { SearchInput } from "./components";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import { CartStoreProvider } from "./hooks/useCartStore";

const defFilters = {
  type: null,
  size: null,
  color: null,
  name: "",
};

function App() { 
  const [showModal, setShowModal] = useState(false);
  
  const [filters, setFilters] = useState(defFilters);

  const setFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    setFilters(defFilters);
  };

  return (
    <CartStoreProvider>
      <div className="wrap">
        <section className="section filters">
          <Nav action={() => setShowModal(true)} />
          <h2 className="title">Prodcut Search</h2>
          <SearchInput filters={filters} setFilter={setFilter} />
          <div className="block block_filters">
            {Object.keys(filters).map((filter) => {
              if (filter !== "name")
                return (
                  <FilterBlock
                    filters={filters}
                    key={filter}
                    setFilter={setFilter}
                    field={filter}
                  />
                );
            })}
          </div>
        </section>
        <GoodsBlock resetFilters={resetFilters} filters={filters} />

        <Modal handleClose={() => setShowModal(false)} isOpen={showModal}>
          <Cart />
        </Modal>
      </div>
    </CartStoreProvider>
  );
}

export default App;
