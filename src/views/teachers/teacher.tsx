import { useParams } from "@tanstack/react-router";

const Teacher = () => {
  const params = useParams({ from: "/teachers/$id" });
  console.log(params);
  return <div>Teacher</div>;
};

export default Teacher;
