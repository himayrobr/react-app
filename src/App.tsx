import {Card, CardBody } from "./components/Card";
import Button from "./components/Button"
import List from "./components/List";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["sergio", "carlos", "nicol", "miguel"]);

   const [isLoading, setIsLoading]= useState(false);
   const handleClick = () => setIsLoading(!isLoading);


   const list = ["sergio", "andres", "himayrob", "miguel"];

   const handleSelect = (elemento: string) => {
     console.log("imprimiendo", elemento);
   };

   return (
     <Card>
       <CardBody title="hola mundo" text="este es el texto" />
       {list.length > 0 ? (
         <List data={list} onSelect={handleSelect} />
       ) : (
         <p>No hay datos para mostrar.</p> // Mensaje alternativo si la lista está vacía
       )}
       <Button isLoading={isLoading} onClick={handleClick}>
         hola mundo
       </Button>
     </Card>
  );
}

export default App
