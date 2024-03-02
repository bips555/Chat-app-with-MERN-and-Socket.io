import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox.jsx";
import { useState } from "react";

const Signup = () => {
  const [Inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

const handleCheckBoxChange=(gender)=>
{
  setInputs({})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Inputs);
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Signup
            <span className="text-blue-500 px-3">ChatApp</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-full input input-bordered h-10"
                value={Inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...Inputs, fullName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full input input-bordered h-10"
                value={Inputs.username}
                onChange={(e) =>
                  setInputs({ ...Inputs, username: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
                value={Inputs.password}
                onChange={(e) =>
                  setInputs({ ...Inputs, password: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password Again"
                className="w-full input input-bordered h-10"
                value={Inputs.confirmpassword}
                onChange={(e) =>
                  setInputs({ ...Inputs, confirmpassword: e.target.value })
                }
              />
            </div>
            <GenderCheckBox />
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-blue-600 inline-block"
            
            >
              Already have an account?
            </Link>
            <button className="btn  btn-block btn-sm mt-2">Signup</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

// starter code
// import GenderCheckBox from "./GenderCheckBox.jsx";

// const Signup = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Signup
//             <span className="text-blue-500 px-3">ChatApp</span>
//           </h1>
//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Full Name</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your Full Name"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Username"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <GenderCheckBox />
//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-600 inline-block"
//             >
//               Already have an account?
//             </a>
//             <div className="btn btn-block btn-sm mt-2">Signup</div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
