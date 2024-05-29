import { NavbarBottom } from "./NavbarBottom";
import { NavbarMiddle } from "./NavbarMiddle";
import { NavbarTop } from "./NavbarTop";

export const Navbar = () => {
  return (
    <header>
      <NavbarTop />
      <NavbarMiddle />
      <NavbarBottom />
    </header>
  );
};
