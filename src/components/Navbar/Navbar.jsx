import { useState } from "react";
import Link from "../Link/Link";
import { IoMenuSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";




const Navbar = () => {
      
     const [open, setopen] = useState(false)

    const routes = [
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/contact", name: "Contact", id: 3 },
        { path: "/products", name: "Products", id: 4 }
      ];
      

    return (
        <nav className="p-6 bg-green-400 lg:justify-center items-center flex">
          <div className="lg:hidden text-2xl" onClick={()=> setopen(!open)}>
            {
                open === true ? <AiOutlineClose/> :  <IoMenuSharp/>
            }
         </div>

         <ul className={`lg:flex duration-1000 absolute bg-green-400 px-6 shadow-2xl lg:static ${open ? 'top-12': '-top-60'}`}>
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
         </ul>
        </nav>
    );
};

export default Navbar;