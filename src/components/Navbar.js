import CartWidget from "./CartWidget";
import { categories } from "../categories";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="w-full bg-slate-500 opacity-60 flex">
      <div className=" w-1/3 flex justify-start">
        <h1 className="text-2xl font-extrabold">
          <NavLink to={`/`}>JOSELITOMARKET</NavLink>
        </h1>
      </div>
      <ul className=" w-1/3 flex justify-between">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className=" w-1/3 flex justify-end">
        <CartWidget />
      </div>
    </div>
  );
}
