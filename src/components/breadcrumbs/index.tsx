import { Breadcrumbs } from "@mui/joy";
import Crumbs from "./crumbs";
function BreadCrumbs() {
  return (
    <Breadcrumbs size="sm" sx={{ paddingLeft: 0 }}>
      <Crumbs />
    </Breadcrumbs>
  );
}

export default BreadCrumbs;
