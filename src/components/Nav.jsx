import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="#" className="hover:nav-item transformer">
          <img src={headerLogo} alt="Logo" width={150} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-5 max-lg:hidden uppercase">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-inter font-bold leading-normal text-md p-[0.85rem] text-slate-gray hover:text-coral-red transformer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
