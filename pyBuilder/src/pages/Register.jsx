// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const register = async () => {
//     await axios.post("http://localhost:5000/api/auth/register", {
//       name,
//       email,
//       password,
//     });
//     navigate("/");
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-50">
//       <div className="w-80 p-6 bg-white shadow rounded">
//         <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

//         <input
//           className="border p-2 w-full mb-2 rounded"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           className="border p-2 w-full mb-2 rounded"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           className="border p-2 w-full mb-4 rounded"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={register}
//           className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded"
//         >
//           Register
//         </button>

//         {/* 🔗 LOGIN LINK */}
//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <Link
//             to="/"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const register = async () => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/register", {
//         name,
//         email,
//         password,
//       });

//       // ✅ GUARANTEED REDIRECT
//       navigate("/");
//     } catch (err) {
//       alert("User already exists");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center pt-24">
//       <div className="w-full max-w-sm bg-white border rounded-lg p-6">
//         <h1 className="text-2xl font-semibold mb-6">
//           Create account
//         </h1>

//         <label className="text-sm text-gray-600">Name</label>
//         <input
//           className="w-full border px-3 py-2 rounded mb-4"
//           onChange={(e) => setName(e.target.value)}
//         />

//         <label className="text-sm text-gray-600">Email</label>
//         <input
//           className="w-full border px-3 py-2 rounded mb-4"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label className="text-sm text-gray-600">Password</label>
//         <input
//           type="password"
//           className="w-full border px-3 py-2 rounded mb-6"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           onClick={register}
//           className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
//         >
//           Sign up
//         </button>

//         <p className="text-sm mt-4 text-gray-600">
//           Already have an account?{" "}
//           <Link to="/" className="underline">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    await axios.post("http://localhost:5000/api/auth/register", {
      name,
      email,
      password,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-24">
      <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-6 text-gray-900">
          Create account
        </h1>

        <label className="block text-sm font-medium text-gray-900 mb-1">
          Name
        </label>
        <input
          className="w-full border border-gray-400 px-3 py-2 rounded mb-4 text-gray-900"
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block text-sm font-medium text-gray-900 mb-1">
          Email
        </label>
        <input
          className="w-full border border-gray-400 px-3 py-2 rounded mb-4 text-gray-900"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-sm font-medium text-gray-900 mb-1">
          Password
        </label>
        <input
          type="password"
          className="w-full border border-gray-400 px-3 py-2 rounded mb-6 text-gray-900"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-900"
        >
          Sign up
        </button>

        <p className="text-sm mt-4 text-gray-800">
          Already have an account?{" "}
          <Link to="/" className="underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
