import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav
      className="
  navbar
  fixed
  top-3
  left-1/2
  -translate-x-1/2
  w-[95%]
  max-w-7xl
  flex
  items-center
  justify-between
  px-8
  py-4
  bg-white/70
  backdrop-blur-md
  shadow-md
  z-50
"
    >
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  );
};

export default Navbar;
