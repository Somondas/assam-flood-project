import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Login = () => {
  return (
    <div className={`bg-custom flex flex-col items-center justify-center `}>
      <div className="bg-[rgba(1,1,1,.1)] shadow-black shadow-lg rounded-2xl w-1/2 h-2/3 relative">
        <h1 className="text-4xl font-bold mt-12 text-center">Login</h1>
        <CloseIcon className="absolute top-8 left-6 text-black cursor-pointer" />
        <div className="w-10/12 my-4 m-auto">
          <form className="" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full text-xl p-2 my-4 bg-transparent border-b-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="w-full text-xl p-2 my-4 bg-transparent border-b-2"
              type="text"
              placeholder="Password"
            />

            {/* <div className="text-center">
              <input
                type="checkbox"
                className="bg-transparent text-xl border-black rounded-md p-3"
              />
             
            </div> */}
            <div className="text-center mt-5">
              <button
                type="submit"
                className="bg-blue-500 text-2xl px-10 py-2 text-white p-2 rounded-md "
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-[rgba(1,1,1,.1)] text-sm px-10 py-2 text-gray-300 p-2"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
