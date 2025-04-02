import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Link from "@mui/joy/Link";
import { useNavigate } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

const CoursesTable = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/api/courses");
      if (!response.ok) {
        throw new Error("Failed to load courses");
      }
      return await response.json();
    },
  });

  const navigate = useNavigate();

  return (
    <Sheet
      variant="soft"
      sx={{ pt: 1, borderRadius: "md", border: "1px solid lightgrey" }}
    >
      <Table
        hoverRow
        sx={{
          captionSide: "top",
          "& tbody": { bgcolor: "background.surface" },
          "--TableCell-headBackground": "var(--joy-palette-background-level1)",
        }}
      >
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Teacher</th>
            <th>Grade Level</th>
            <th>Students</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((course: any) => (
            <tr key={course.id}>
              <td>{course.courseName}</td>
              <td>
                {course.teacher.firstName + " " + course.teacher.lastName}
              </td>
              <td>{course.gradeLevel}</td>
              <td>{course.students.length}</td>
              <td>
                <Link
                  onClick={() => navigate({ to: `/courses/${course.id}` })}
                  underline="hover"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
};

export default CoursesTable;
