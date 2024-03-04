import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext.jsx";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setauthUser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputerrors(username, password);
    if (!success) {
      return;
    }
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setauthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

const handleInputerrors = (username, password) => {
  if (!username || !password) {
    toast.error("please fill all the fields");
    return false;
  }
  return true;
};
