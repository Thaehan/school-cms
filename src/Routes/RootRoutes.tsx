import { useRoutes, BrowserRouter, redirect, Navigate } from "react-router-dom";

import HomeScreen from "@Screens/Home";
import HelpScreen from "@Screens/Help";
import { useSelector } from "react-redux";
import { IRootState } from "src/Store/configureStore";
import IUserSlice from "@Types/IUserSlice";
import LoginScreen from "@Screens/Login";

function MainRoutes({ user }: { user: IUserSlice }) {
  if (!user) {
    console.log(user);
  }
  const allMainRoutes = useRoutes([
    {
      path: "/",
      element: user.token ? <HomeScreen /> : <Navigate to="/login" />
    },
    {
      path: "/help",
      element: user.token ? <HelpScreen /> : <Navigate to="/login" />
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
      <MainRoutes user={currentUser} />
    </BrowserRouter>
  );
}
