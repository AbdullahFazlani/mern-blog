import {
  Button,
  Navbar,
  TextInput,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <NavbarBrand>
        <Link
          to="/"
          className="self-center text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Sahand's
          </span>
          Blog
        </Link>
      </NavbarBrand>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <Link to="/sign-in">
      <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">

          Sign In
        </Button>
      </Link>

      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink active={path === "/"} as={Link} to="/">
          Home
        </NavbarLink>
        <NavbarLink active={path === "/about"} as={Link} to="/about">
          About
        </NavbarLink>
        <NavbarLink active={path === "/projects"} as={Link} to="/projects">
          Projects
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
