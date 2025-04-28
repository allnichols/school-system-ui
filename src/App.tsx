import { Routes, Route } from "react-router";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="teachers" element={<div>Teachers</div>} />
        <Route path="courses" element={<div>Courses</div>} />
        <Route path="students" element={<div>Students</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
