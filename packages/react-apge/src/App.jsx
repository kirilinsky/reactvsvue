import { SearchInput } from "./components";
import { Grid } from "./ui/grid";
import { GridCell } from "./ui/gridCell";
import { Section } from "./ui/section";

function App() {
  return (
    <div className="wrap">
      <Section className="filters">
        <h2>Prodcut Search</h2>
        <Grid>
          <GridCell>
            <SearchInput />
          </GridCell>
          <GridCell lg>
             
          </GridCell>
          <GridCell>
            2
          </GridCell>
          <GridCell>
            3
          </GridCell>
        </Grid>
      </Section>
      <Section></Section>
    </div>
  );
}

export default App;
