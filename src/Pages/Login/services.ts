import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@Api/AuthApi";
import { setUser } from "src/Store/Reducers/userSlice";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleLogin = async () => {
    try {
      const res = await login({ username, password });

      if (res) {
        console.log(res);
        dispatch(setUser(res));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    username,
    password,
    setPassword,
    setUsername,
    handleLogin
  };
}
