import React, { useState } from "react";
import Login from "./myComponent/Login";
import Form1 from "./myComponent/Form1";
import Form2 from "./myComponent/Form2";

const LoginPage = () => {
  const [activeForm, setActiveForm] = useState("login"); // State to manage which form to display
  // <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white bg-gradient-to-r from-black to-blue-800">

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-black via-bg-gray-900 to-blue-900 text-white">
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 p-6 lg:p-12 space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Form Section */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 lg:w-1/2 w-full">
          {/* Buttons to switch forms */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveForm("login")}
              className={`${
                activeForm === "login" ? "bg-blue-800" : "bg-blue-500"
              } hover:bg-blue-500 text-sm font-medium py-2 px-4 rounded`}
            >
              Login Page
            </button>
            <button
              onClick={() => setActiveForm("form1")}
              className={`${
                activeForm === "form1" ? "bg-blue-800 " : "bg-blue-500 "
              } hover:bg-blue-500 text-sm font-medium py-2 px-4 rounded`}
            >
              Form 1
            </button>
            <button
              onClick={() => setActiveForm("form2")}
              className={`${
                activeForm === "form2" ? "bg-blue-800" : "bg-blue-500"
              } hover:bg-blue-500 text-sm font-medium py-2 px-4 rounded`}
            >
              Form 2
            </button>
          </div>

          {/* Conditional Rendering of Forms */}
          {activeForm === "login" && (
            <>
              <Login />
            </>
          )}

          {activeForm === "form1" && (
            <>
              <Form1 />
            </>
          )}

          {activeForm === "form2" && (
            <>
              <Form2 />
            </>
          )}
        </div>

        {/* 3D Glass Cubes Section */}
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <div className="w-full h-64 lg:h-96 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-gradient-to-r from-blue-500 to-pink-500 opacity-70 h-64 w-64 transform rotate-45 shadow-xl rounded-lg"></div>
              <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 h-64 w-64 transform rotate-45 shadow-lg rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from "react";
// import Component1 from "./myComponent/Component1";

// const App = () => {
//   const [toggle, setToggle] = useState(true);
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
//       <div className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 p-6 lg:p-12 space-y-8 lg:space-y-0 lg:space-x-12">
//         {/* Login Form Section */}
//         <div className="bg-gray-800 shadow-lg rounded-lg p-8 lg:w-1/2 w-full">
//           {/* Responsive Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-6">
//             <button
//               className="bg-blue-600 hover:bg-blue-500 text-sm font-medium py-2 px-4 rounded"
//               onClick={() => setToggle(!toggle)}
//             >
//               Button 1
//             </button>
//             <button className="bg-blue-600 hover:bg-blue-500 text-sm font-medium py-2 px-4 rounded">
//               Button 2
//             </button>
//             <button className="bg-blue-600 hover:bg-blue-500 text-sm font-medium py-2 px-4 rounded">
//               Button 3
//             </button>
//           </div>

//          {toggle&& <Component1 />}
//         </div>

//         {/* 3D Glass Cubes Section */}
//         <div className="lg:w-1/2 w-full flex items-center justify-center">
//           <div className="w-full h-64 lg:h-96 relative">
//             <div className="absolute inset-0 flex items-center justify-center">
//               {/* Simulating 3D cubes */}
//               <div className="bg-gradient-to-r from-blue-500 to-pink-500 opacity-70 h-64 w-64 transform rotate-45 shadow-xl rounded-lg"></div>
//               <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 h-64 w-64 transform rotate-45 shadow-lg rounded-lg"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
