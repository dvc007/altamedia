import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginInitiate } from "./../../Redux/actions";

import "./Login.css";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (currentUser) {
      window.location.href = "/";
    }
  }, [currentUser]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <section className="h-100 ">
        <div className="py-5 h-full">
          <div className="w-full">
            <div className="rounded-lg shadow-lg">
              <div className="flex justify-around">
                <div className="w-2/5 px-5 py-8 bg-stone-100">
                  <div className="flex justify-center items-center ">
                    <img
                      src={require("../../Images/logo.png")}
                      style={{ width: 160 }}
                      alt="logo"
                    />
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-5">
                      <label className="block w-80">Nhập email *</label>
                      <input
                        type="email"
                        id="inputEmail"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                        className="form-input w-96 px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                        placeholder="Nhập địa chỉ email"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block w-72">Mật khẩu *</label>
                      <input
                        type="password"
                        id="inputPassword"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                        className="form-input w-96 px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                        placeholder="Nhập mật khẩu"
                      />
                      <a
                        className="text-red-600 text-sm mt-3 block w-80"
                        href="#!"
                      >
                        Quên mật khẩu?
                      </a>
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className="btn bg-amber-600 text-white text-lg font-bold py-2 px-6 rounded-lg"
                        type="submit"
                      >
                        Đăng nhập
                      </button>
                    </div>
                    <div className="flex items-center justify-center pb-4">
                      <p className="mr-2">Không có tài khoản?</p>
                      <button
                        type="button"
                        className="btn bg-transparent text-indigo-500 font-bold"
                      >
                        <Link to="/register">
                          <button type="button">Tạo tài khoản</button>
                        </Link>{" "}
                      </button>
                    </div>
                  </form>
                </div>

                <div className="w-3/5 px-5 py-8">
                  <div className="text-white">
                    <div className="text-center">
                      <img
                        src={require("../../Images/login.png")}
                        style={{ width: 550 }}
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// export default Login;

// const Login = () => {
//   const [state, setState] = useState<{ email: string; password: string }>({
//     email: "",
//     password: "",
//   });
//   const { email, password } = state;
//   const { currentUser } = useSelector(
//     (state: { user: { currentUser: any } }) => state.user
//   );

//   useEffect(() => {
//     if (currentUser) {
//       window.location.href = "/";
//     }
//   }, [currentUser]);

//   const dispatch = useDispatch();

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!email || !password) {
//       return;
//     }
//     dispatch(loginInitiate(email, password));
//     setState({ email: "", password: "" });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };
// return (
//   <div>
//     <section className="h-100 ">
//       <div className="py-5 h-full">
//         <div className="w-full">
//           <div className="rounded-lg shadow-lg">
//             <div className="flex justify-around">
//               <div className="w-2/5 px-5 py-8 bg-stone-100">
//                 <div className="flex justify-center items-center ">
//                   <img
//                     src={require("../../Images/logo.png")}
//                     style={{ width: 160 }}
//                     alt="logo"
//                   />
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                   <div className="mb-4 mt-5">
//                     <label className="block w-80">Nhập email *</label>
//                     <input
//                       type="email"
//                       id="inputEmail"
//                       name="email"
//                       onChange={handleChange}
//                       value={email}
//                       required
//                       className="form-input w-96 px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
//                       placeholder="Nhập địa chỉ email"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block w-72">Mật khẩu *</label>
//                     <input
//                       type="password"
//                       id="inputPassword"
//                       name="password"
//                       onChange={handleChange}
//                       value={password}
//                       required
//                       className="form-input w-96 px-4 py-3 rounded-md border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
//                       placeholder="Nhập mật khẩu"
//                     />
//                     <a
//                       className="text-red-600 text-sm mt-3 block w-80"
//                       href="#!"
//                     >
//                       Quên mật khẩu?
//                     </a>
//                   </div>
//                   <div className="text-center pt-1 mb-5 pb-1">
//                     <button
//                       className="btn bg-amber-600 text-white text-lg font-bold py-2 px-6 rounded-lg"
//                       type="submit"
//                     >
//                       Đăng nhập
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-center pb-4">
//                     <p className="mr-2">Không có tài khoản?</p>
//                     <button
//                       type="button"
//                       className="btn bg-transparent text-indigo-500 font-bold"
//                     >
//                       <Link to="/register">
//                         <button type="button">Tạo tài khoản</button>
//                       </Link>{" "}
//                     </button>
//                   </div>
//                 </form>
//               </div>

//               <div className="w-3/5 px-5 py-8">
//                 <div className="text-white">
//                   <div className="text-center">
//                     <img
//                       src={require("../../Images/login.png")}
//                       style={{ width: 550 }}
//                       alt="logo"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
// );

export default Login;
