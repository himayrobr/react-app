import  {Card, CardBody } from "./components/card"
import List from "./components/List";

function App() {
  const list = ["sergio", "andres", "himayrob", "miguel"];
  return (
    <Card>
      <CardBody title="hola mundo" text="este es el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;

