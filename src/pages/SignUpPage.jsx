import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import API from "../api";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleOnChangeValue = (e, propertyName) => {
    setForm((prev) => ({ ...prev, [propertyName]: e.target.value }));
  };

  const sendSignUp = async () => {
    try {
      const data = await API.post("/users/signup", form);
      if (data.status == 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-screen h-full flex flex-col justify-center items-center">
      <h1 className="mb-6">Sign Up</h1>
      <div className="input-group px-5 py-6 2xl:w-1/5 md:w-1/2 sm:w-full   border-2 bg-slate-200">
        <Input
          title="Username"
          onChange={(e) => handleOnChangeValue(e, "username")}
          type="text"
          maxLength={20}
        />
        <Input
          title="Email"
          onChange={(e) => handleOnChangeValue(e, "mail")}
          type="email"
          maxLength={20}
        />
        <Input
          title="Phone"
          onChange={(e) => handleOnChangeValue(e, "phone")}
          type="tel"
          maxLength={12}
        />
        <Input
          title="Password"
          onChange={(e) => handleOnChangeValue(e, "pass")}
          type="password"
          maxLength={15}
        />
        {/* <Input title="Re-Enter Password" type="password" maxLength={15} /> */}
        <div className="button-group mt-5 flex justify-between items-center mx-5">
          <Link to="/login">
            <a className="text-gray-900 text-xl cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
              Cancer
            </a>
          </Link>
          <div
            onClick={sendSignUp}
            className="text-gray-900 text-xl cursor-pointer bg-sky-300 hover:bg-sky-700 hover:text-white rounded-md px-3 py-2 font-medium"
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
