import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

const TeachersTable = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/api/teachers");
      if (!response.ok) {
        throw new Error("Failed to load teachers");
      }
      return await response.json();
    },
  });

  return (
    <Sheet
      variant="soft"
      sx={{ pt: 1, borderRadius: "md", border: "1px solid lightgrey" }}
    >
      <Table
        stripe="odd"
        hoverRow
        sx={{
          captionSide: "top",
          "& tbody": { bgcolor: "background.surface" },
          "--TableCell-headBackground": "var(--joy-palette-background-level1)",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((teacher: any) => (
            <tr key={teacher.id}>
              <td>{`${teacher.firstName} ${teacher.lastName}`}</td>
              <td>{teacher.email}</td>
              <td>
                <Link to={`/teachers/${teacher.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default TeachersTable;
