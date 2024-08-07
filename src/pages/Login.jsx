import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import API from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Loading from "../components/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [show, setShow] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const handleOnChangeValue = (e, propertyName) => {
    setForm((prev) => ({ ...prev, [propertyName]: e.target.value }));
  };

  const sendLogin = async () => {
    setIsloading(true);
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
    setIsloading(false);
  };

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div className=" w-screen h-full flex flex-col justify-center items-center">
        <h1 className="mb-6">Login</h1>
        <div className="input-group px-5 py-6 2xl:w-1/5 md:w-1/2 sm:w-full border-2 bg-slate-200">
          <Input
            title="Username"
            onChange={(e) => handleOnChangeValue(e, "username")}
            maxLength={15}
          />
          <div className="relative">
            <Input
              title="Password"
              onChange={(e) => handleOnChangeValue(e, "pass")}
              type={show ? "text" : "password"}
              maxLength={8}
            />
            <div
              className="absolute top-10 right-2 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <FontAwesomeIcon icon={faEye} color="black" />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} color="black" />
              )}
            </div>
          </div>

          <div className="flex items-center ml-1 mb-2">
            <input type="checkbox" className="rounded-md size-3 bg-white" />
            <span className="ml-1 text-slate-500">Remember me</span>
          </div>

          <div className="border-2 border-slate-400"></div>
          <div className="flex flex-col">
            <Link to="/signup">
              <span className="ml-1 mb-2 mt-2 text-sm">Sign up account</span>
            </Link>

            <Link to="/" className="inline">
              <span className="ml-1 mb-2 text-sm">Forgot password</span>
            </Link>
          </div>

          <div className="button-group mt-5 flex justify-between items-center mx-5">
            <Link to="/">
              <span className="text-gray-900 text-xl cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
                Cancer
              </span>
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
    </>
  );
};

export default Login;
