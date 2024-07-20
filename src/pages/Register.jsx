import React from "react";

const Register = () => {
  return (
    <div className={`bg-custom flex flex-col items-center justify-center `}>
      <div className="bg-[rgba(1,1,1,.1)] shadow-black shadow-lg rounded-2xl w-1/2 h-3/4">
        <h1 className="text-4xl font-bold mt-12 text-center">Register</h1>

        <div className="w-10/12 my-4 m-auto">
          <form className="" onSubmit={(e) => e.preventDefault()}>
            <input
              className="w-full text-xl p-2 my-4 bg-transparent border-b-2"
              type="text"
              placeholder="Name"
            />
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

            <div className="text-center">
              <input
                type="checkbox"
                className="bg-transparent text-xl border-black rounded-md p-3"
              />
              <label htmlFor="" className="pl-1 text-slate-300">
                Remember Me
              </label>
            </div>
            <div className="text-center mt-5">
              <button
                type="submit"
                className="bg-blue-500 text-2xl px-10 py-2 text-white p-2 rounded-md "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
