import { useParams } from "react-router";
import { products } from "../products";

export default function ItemDetailContainer() {
  const { itemId } = useParams();

  const item = products.find((product) => product.id === Number(itemId));

  return (
    <div>
      <div>{item.name}</div>;
    </div>
  );
}
// hacer la vista del producto, mostrar imagen precio desc etc.
