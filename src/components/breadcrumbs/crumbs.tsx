import { Link, useRouterState } from "@tanstack/react-router";

function Crumbs() {
  const router = useRouterState();
  const location = router.location.pathname.split("/");
  const pathnames = location.filter((path) => path !== "");

  return (
    <>
      <Link to="/" style={{ textDecoration: "none", marginRight: "4px" }}>
        Home
      </Link>
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={path}>{" / " + path}</span>
        ) : (
          <Link
            key={path}
            to={routeTo}
            style={{ textDecoration: "none", marginRight: "4px" }}
          >
            {" / " + path}
          </Link>
        );
      })}
    </>
  );
}

export default Crumbs;
