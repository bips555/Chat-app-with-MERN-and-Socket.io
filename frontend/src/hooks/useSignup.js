import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext.jsx";


const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setauthUser}=useAuthContext();

  const signup = async ({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputerrors({
      fullname,
      username,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log(data);


      if(data.error)
      {
        throw new Error(data.error);
      }

      localStorage.setItem('chat-user',JSON.stringify(data))
      setauthUser(data);
      console.log(data);

     
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};


export default useSignup;

const handleInputerrors = ({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}) => {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("please fill all the fields");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Passwords donot match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};
