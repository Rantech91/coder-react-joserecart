import Card from "./Card";
import { products } from "../products";
import { categories } from "../categories";
import { useParams } from "react-router";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  let p = [];
  let c = null;
  if (categoryId) {
    c = categories.find((category) => category.id === Number(categoryId));
    p = products.filter((product) => product.categoryId === Number(categoryId));
  } else {
    p = products;
  }

  const cards = p.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        img={item.imgSrc}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <div className="max-w-[90rem] mx-auto grid grid-cols-4">
      {c && <div>Categoria: {c.name}</div>}
      {cards}
    </div>
  );
}

// que se vea bien
