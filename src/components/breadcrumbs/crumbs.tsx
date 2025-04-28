import { useLocation, Link } from "react-router"; // Correct import for react-router-dom

function Crumbs() {
  const location = useLocation(); // Get the current location object
  const pathnames = location.pathname.split("/").filter((path) => path !== ""); // Split and filter the path

  return (
    <>
      <Link to="/" style={{ textDecoration: "none", marginRight: "4px" }}>
        Home
      </Link>
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`; // Build the route dynamically
        const isLast = index === pathnames.length - 1; // Check if it's the last breadcrumb
        return isLast ? (
          <span key={path} style={{ marginLeft: "4px" }}>
            / {path}
          </span>
        ) : (
          <Link
            key={path}
            to={routeTo}
            style={{
              textDecoration: "none",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          >
            / {path}
          </Link>
        );
      })}
    </>
  );
}

export default Crumbs;
