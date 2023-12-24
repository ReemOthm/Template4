import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../Pages/Layout";
import Dashboard from "../Pages";
import Settings from "../Pages/Settings";
import Profile from "../Pages/Profile";
import Projects from "../Pages/Projects";
import Courses from "../Pages/Courses";
import Friends from "../Pages/Friends";
import Files from "../Pages/Files";
import Plans from "../Pages/Plans";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path='/'
                element= {<Layout />}
            >
                <Route index element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile />} />
                <Route path="projects" element={<Projects />} />
                <Route path="courses" element={<Courses />} />
                <Route path="friends" element={<Friends />} />
                <Route path="files" element={<Files />} />
                <Route path="plans" element={<Plans />} />
            </Route>
        </>
    )
)

export default router;