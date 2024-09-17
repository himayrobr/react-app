import { MouseEvent, useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState<number | null>(null); // Cambiado a null inicialmente

  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    if (onSelect) {
      onSelect(elemento); // Solo llamamos onSelect si está definido
    }
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)} // Pasamos índice y elemento
          key={elemento}
          className={`list-group-item ${i === index ? "active" : ""}`} // Clase activa si está seleccionado
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
