import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.js";
const Logoutbutton = () => {
  const{loading,logout} =useLogout()
  return (
    <div className="mt-auto">
    {!loading ?(
      <BiLogOut className="w-6 h-6 outline-none text-white cursor-pointer" onClick={logout} />
    ):(
      <span className="loading loading-spinner"></span>
    )
}
    </div>
  );
};

export default Logoutbutton;
