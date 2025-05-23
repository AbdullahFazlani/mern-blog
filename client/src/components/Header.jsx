import {
  Button,
  Navbar,
  TextInput,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavbarLink,
  Dropdown,
  Avatar,
  DropdownHeader,
  DropdownItem,
  DropdownDivider,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { deleteUserSuccess } from "../redux/user/userSlice";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  console.log(currentUser);
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

      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                className="cursor-pointer"
                img={currentUser?.data?.profilePicture}
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">
                @{currentUser?.data?.username}
              </span>
              <span className="block text-sm font-medium truncate">
                {currentUser?.data?.email}
              </span>
            </DropdownHeader>
            <Link to={"/dashboard?tab=profile"}>
              <DropdownItem>Profile</DropdownItem>
            </Link>
            <DropdownDivider />
            <DropdownItem onClick={() => dispatch(deleteUserSuccess())}>
              Sign out
            </DropdownItem>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
      </div>
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
