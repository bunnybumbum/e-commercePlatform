//
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userData } from "../../context/UserContext";

function SignupCombo() {
  const { PostUserDatas } = useContext(userData);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();

  const handlerEvent = (e) => {
    e.preventDefault();
    const cart = {};
    if (password === cpassword) {
      PostUserDatas(name, email, password, cart);
      alert("New account created.. Please login");
      navigate("/login");
    } else {
      alert("password not matching");
    }
  };

  return (
    <div>
      <div className="login-signup w-full min-h-screen pt-16 pb-20">
        <form action="" onSubmit={handlerEvent}>
          <div className="login-cont w-[90%] max-w-[580px] h-auto bg-white m-auto px-6 py-10 md:px-10 md:py-14">
            <h1 className="pb-5 font-bold text-2xl md:text-4xl">Sign Up</h1>
            <hr className="border-t-4 border-b-2 border-l border-[#7D0A0A]" />
            <br />
            <div className="loginsignup-fields flex flex-col gap-6">
              <input
                className="bg-gray-200 h-14 md:h-16 w-full ps-5 border-gray-500 outline-none text-[#5c5c5c] text-base md:text-lg"
                type="text"
                id="signup-name"
                required
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-gray-200 h-14 md:h-16 w-full ps-5 border-gray-500 outline-none text-[#5c5c5c] text-base md:text-lg"
                type="email"
                id="signup-email"
                required
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="bg-gray-200 h-14 md:h-16 w-full ps-5 border-gray-500 outline-none text-[#5c5c5c] text-base md:text-lg"
                type="password"
                id="signup-password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="bg-gray-200 h-14 md:h-16 w-full ps-5 border-gray-500 outline-none text-[#5c5c5c] text-base md:text-lg"
                type="password"
                id="signup-cpassword"
                required
                placeholder="Confirm Password"
                onChange={(e) => setCpassword(e.target.value)}
              />
            </div>
            <button className="w-full h-14 md:h-16 text-white bg-[#BF3131] hover:bg-[#7D0A0A] focus:ring-4 focus:ring-blue-300 mt-6 text-xl md:text-2xl font-medium">
              Continue
            </button>
            <p className="loginsignup-login mt-5 text-[#5c5c5c] text-base md:text-lg font-medium">
              Already have an account?
              <NavLink to="/login">
                <button className="text-[#ff4141] font-semibold">
                  Login here
                </button>
              </NavLink>
            </p>
            <div className="loginsignup-agree flex items-center mt-6 gap-5 text-[#5c5c5c] text-base md:text-lg font-medium">
              <input type="checkbox" required />
              <p>
                By proceeding, you acknowledge acceptance of our
                <span className="text-[#ff4141] font-semibold">
                  terms of use
                </span>
                &
                <span className="text-[#ff4141] font-semibold">
                  privacy policy
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupCombo;
