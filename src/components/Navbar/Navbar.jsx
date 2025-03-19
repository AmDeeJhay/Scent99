import { Link, NavLink } from "react-router";
import {SprayCan, Check, Search, Info, ShoppingCart, Heart, User} from "lucide-react";

const Navbar = () => {
  return (
    <div className="font-poppins">
    
      <div className="navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full"> 
        
        <div className="lg:container flex justify-between items-center w-full px-40">
          <p className="flex items-center gap-2 text-sm font-poppins font-medium text-white capitalize"><Check />Free on all orders over $50</p>
          <div className="navbar-top-right flex items-center ml-auto gap-6">
            <select defaultValue="Server location" className="bg-none h-[30px] w-[45px] text-sm font-poppins font-medium capitalize text-white">
              <option>eng</option>
              <option>bangle</option>
            </select>

            <button><Link className="text-sm text-white font-poppins font-medium capitalize">Faq</Link></button>
            <button><Link className="flex items-center text-sm text-white font-poppins font-medium capitalize gap-1"><Info />Need help</Link></button>
          </div>
        </div>
      </div>
     


     {/* navbar middle */}
      <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] h-[65px] w-full">
        <div className="lg:container grid grid-cols-3  items-center">
          
          <div className="logo_wrapper">  
            <Link to="/" className="text-[#272343] text-2xl font-medium font-poppins capitalize flex justify-center items-center gap-2"><SprayCan size="2rem" color="#029fae" />
              Scent99
            </Link>
          </div> 
          
          <div className="search_box border-0 border-white">
            <form action="#" className="max-w-75 h-[37px] relative">
              <input type="text" placeholder="Search here..." className="w-full h-full text-sm font-poppins font-medium  bg-white rounded-full pl-4" />

            
              <button className="absolute to-50% right-4 top-4.5 -translate-y-1/2"><Search size='22px' color="#272343" /></button>
            </form>  
          </div>

          {/* navbar middle right */}
          <div className="navbar_middle_right items-center h-[37px] flex gap-4">
            <button className="btn capitalize rounded-full"><ShoppingCart size="1rem" />
              cart <div className="badge badge-sm rounded-full bg-[#029fae]">2</div>
            </button>

            <button className="btn capitalize rounded-full">
              <Heart size="1rem" />
            </button>

            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1 rounded-full"><User size="1rem" /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
                <li><a><Link>Account</Link></a></li>
                <li><a><Link>Dashboard</Link></a></li>
                <li><a><Link>Logout</Link></a></li>
              </ul>
            </div>
          </div>
        </div> 
      </div>

      {/* navbar bottom */}
      <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
          <div className="lg:container flex items-center justify-between w-full px-40">

            <div className="navbar_bottom_left flex items-center gap-6">
              <div className="dropdown dropdown-start ">
                <div tabIndex={0} role="button" className="btn m-1 h-[35px] capitalize font-poppins font-medium flex items-center rounded-full gap-5">All Categories</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-35 p-2 shadow-sm">
                  <li><a><Link>Category 1</Link></a></li>
                  <li><a><Link>Category 2</Link></a></li>
                  <li><a><Link>Category 3</Link></a></li>
                  <li><a><Link>Category 4</Link></a></li>

                </ul>  
              </div>


              <nav className="flex items-center gap-6">
                <NavLink to='/' className="text-sm text-[#029fae] font-poppins font-medium capitalize">Home</NavLink>
                <NavLink to='/shop' className="text-sm text-[#029fae] font-poppins font-medium capitalize">Shop</NavLink>
                <NavLink to='/about' className="text-sm text-[#029fae] font-poppins font-medium capitalize">About</NavLink>
                <NavLink to='/contact' className="text-sm text-[#029fae] font-poppins font-medium capitalize">Contact</NavLink>
                <NavLink to='/products' className="text-sm text-[#029fae] font-poppins font-medium capitalize">Products</NavLink>
              </nav>
            </div>
            

            <div className="navbar_bottom_right">
              <p className="text-sm text-[#636270] font-poppins font-medium capitalize ">Contact: <span> (+234) 703-345-7523</span></p>
            </div>
          </div>
      </div>
    </div> 
  );
};
  
export default Navbar;
  