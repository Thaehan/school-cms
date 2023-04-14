import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";

import HomeScreen from "@Screens/Home";
import { useSelector } from "react-redux";
import { IRootState } from "src/Store/configureStore";
import IUserSlice from "@Types/IUserSlice";
import LoginScreen from "@Screens/Login";
import ResponsiveDrawer from "@Components/Drawer";
import TeacherList from "@Screens/TeacherList";
import StudentList from "@Screens/StudentList";
import Category from "@Screens/Category";

function MainRoutes({ user }: { user: IUserSlice }) {
  const allMainRoutes = useRoutes([
    {
      path: "/",
      element: user.token ? <HomeScreen /> : <Navigate to="/login" />
    },
    {
      path: "/categories",
      element: user.token ? <Category /> : <Navigate to="/login" />
    },
    {
      path: "/teachers",
      element: user.token ? <TeacherList /> : <Navigate to="/login" />
    },
    {
      path: "/students",
      element: user.token ? <StudentList /> : <Navigate to="/login" />
    },
    {
      path: "/login",
      element: !user.token ? <LoginScreen /> : <Navigate to="/" />
    }
  ]);

  return allMainRoutes;
}

export default function RootRoute() {
  const currentUser = useSelector((state: IRootState) => state.user);

  return (
    <BrowserRouter>
      <ResponsiveDrawer>
        <MainRoutes user={currentUser} />
      </ResponsiveDrawer>
    </BrowserRouter>
  );
}
