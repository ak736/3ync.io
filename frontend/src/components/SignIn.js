// import React, { useState } from "react";
// import SignUp from "./SignUp";

// const SignIn = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [showSignUpState, setShowSignUpState] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted with data:", formData);
//     setFormData({
//       email: "",
//       password: "",
//     });
//   };
//   const showSignUp = () => {
//     setShowSignUpState(true);
//   };
//   return (
//     <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-gray-700 text-sm font-bold mb-2"
//           >
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
//         >
//           Sign In
//         </button>
//         <button
//           type="submit"
//           className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600"
//           onClick={showSignUp}
//         >
//           Sign Up
//         </button>
//         {!showSignUpState ? "nothing" : <SignUp />}
//       </form>
//     </div>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import SignUp from "./SignUp";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showSignUpState, setShowSignUpState] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  const togglePage = () => {
    setShowSignUpState((prev) => !prev);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">
        {showSignUpState ? "Sign Up" : "Sign In"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className={`w-full ${
            showSignUpState ? "bg-red-500" : "bg-blue-500"
          } text-white p-3 rounded-md hover:${
            showSignUpState ? "bg-red-600" : "bg-blue-600"
          }`}
        >
          {showSignUpState ? "Sign Up" : "Sign In"}
        </button>

        <button
          type="button"
          className="w-full bg-gray-300 text-gray-700 p-3 rounded-md mt-2"
          onClick={togglePage}
        >
          {showSignUpState ? "Switch to Sign In" : "Switch to Sign Up"}
        </button>

        {showSignUpState && <SignUp />}
      </form>
    </div>
  );
};

export default SignIn;
