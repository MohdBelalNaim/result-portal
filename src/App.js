import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Screens/Home";
import StudentLogin from "./Screens/Student-login";
import TeacherLogin from "./Screens/Teacher-login";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student-login" element={<StudentLogin/>}/>
        <Route path="/teacher-login" element={<TeacherLogin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
