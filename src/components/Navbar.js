import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <div className="w-full bg-slate-500 opacity-60 flex">
      <div className=" w-1/3 flex justify-start">
        <h1>"LOGO"</h1>
      </div>
      <div className=" w-1/3 flex justify-between">
        <button>Carnes</button>
        <button>Cereales</button>
        <button>Lacteos</button>
      </div>
      <div className=" w-1/3 flex justify-end">
        <CartWidget />
      </div>
    </div>
  );
}
