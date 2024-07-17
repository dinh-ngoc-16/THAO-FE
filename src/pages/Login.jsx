import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import API from "../api";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleOnChangeValue = (e, propertyName) => {
    setForm((prev) => ({ ...prev, [propertyName]: e.target.value }));
  };

  const sendLogin = async () => {
    try {
      const data = await API.post("/users/login", form);
      if (data.status == 200) {
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("idUser", data.data.id);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-screen h-full flex flex-col justify-center items-center">
      <h1 className="mb-6">Login</h1>
      <div className="input-group px-5 py-6 2xl:w-1/5 md:w-1/2 sm:w-full   border-2 bg-slate-200">
        <Input
          title="Username"
          onChange={(e) => handleOnChangeValue(e, "username")}
          maxLength={20}
        />
        <Input
          title="Password"
          onChange={(e) => handleOnChangeValue(e, "pass")}
          type="password"
          maxLength={15}
        />
        <Link to="/signup">
          <a className="ml-1" href="#">
            Create a new account!
          </a>
        </Link>
        <div className="button-group mt-5 flex justify-between items-center mx-5">
          <Link to="/">
            <div className="text-gray-900 text-xl cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
              Cancer
            </div>
          </Link>
          <div
            onClick={sendLogin}
            className="text-gray-900 text-xl cursor-pointer bg-sky-300 hover:bg-sky-700 hover:text-white rounded-md px-3 py-2 font-medium"
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
