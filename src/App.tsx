import RootRoutes from "@Routes/RootRoutes";
import "@Assets/scss/footer.scss";
import "@Assets/Scss/global.scss";
import "@Assets/scss/header.scss";
import { Provider } from "react-redux";
import { store } from "./Store/configureStore";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  localStorage.setItem(
    "user",
    JSON.stringify({
      user: {
        id: "",
        username: "",
        role: "",
        password: ""
      },
      token: "",
      teacherData: {},
      studentData: {}
    })
  );
  return (
    <Provider store={store}>
      <RootRoutes />
    </Provider>
  );
}

export default App;
