import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img  alt="[Insert Logo Here]" 
                src="https://thumbs.dreamstime.com/b/animal-dog-cat-paw-icon-vector-illustration-isolated-white-background-animal-dog-cat-paw-icon-vector-illustration-263944492.jpg"
                className="logo"></img>
        </NavLink>

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/about">
            About
        </NavLink>
      </nav>
    </div>
  );
}