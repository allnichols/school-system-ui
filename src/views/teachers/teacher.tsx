import { useParams } from "@tanstack/react-router";
import { useFetchTeacher } from "./query/useFetchTeacher";
const Teacher = () => {
  const { id } = useParams({ from: "/teachers/$id" });
  const { loading, error, data } = useFetchTeacher(id);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Not found</div>;

  return (
    <div>
      <h1>
        {data.getTeacherById.firstName} {data.getTeacherById.lastName}
      </h1>
      <p>{data.getTeacherById.email}</p>
      <p>{data.getTeacherById.dob}</p>
    </div>
  );
};

export default Teacher;
