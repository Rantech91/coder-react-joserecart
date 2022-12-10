import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="bg-blue-300 p-4 rounded-xl basis-1/4 m-1">
      <div>
        <NavLink to={`/item/${props.id}`}>
          <img src={props.img} className="rounded-xl" alt="/" />
        </NavLink>
      </div>

      <div>
        <div className="text-2xl font-bold">
          <NavLink to={`/item/${props.id}`}>{props.name}</NavLink>
        </div>
        <div className="text-xl font-bold">{props.price}</div>
        <div>{props.description}</div>
      </div>

      <div className="flex flex-row justify-center mt-5 p-3 bg-blue-600 rounded-xl">
        <img src="../img/icon-cart-white.svg" alt="asd" />
        <button className="justify-center text-white ml-2"> Add to cart</button>
      </div>
    </div>
  );
}
