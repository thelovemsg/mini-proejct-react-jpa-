import { Link, NavLink, useNavigate } from "react-router-dom";
const Nav = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };

  let navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/router1"}>Router1</Link>
        </li>
        <li>
          <Link to={"/router2"}>Router2</Link>
        </li>
        <li>
          <NavLink
            to={"/navlink"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            NavLink
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/navlink2"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            NavLink2
          </NavLink>
        </li>
        <li>
          <button onClick={moveToHome}>moveToHome!</button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </li>
      </ul>
    </>
  );
};

export default Nav;
