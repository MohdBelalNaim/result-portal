import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AddResult from "./Screens/Add-result";
import Home from "./Screens/Home";
import StudentHome from "./Screens/Student-homepage";
import StudentLogin from "./Screens/Student-login";
import StudentRegistration from "./Screens/Student-registration";
import StudentResultPage from "./Screens/Student-result-page";
import TeacherHomepage from "./Screens/Teacher-homepage";
import TeacherLogin from "./Screens/Teacher-login";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student-login" element={<StudentLogin/>}/>
        <Route path="/teacher-login" element={<TeacherLogin/>}/>
        <Route path="/student-registration" element={<StudentRegistration/>}/>
        <Route path="/student-home" element={<StudentHome/>}/>
        <Route path="/view-result" element={<StudentResultPage/>}/>
        <Route path="/teacher-home" element={<TeacherHomepage/>}/>
        <Route path="/add-result" element={<AddResult/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
