import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import API from "../api";
import Select from "../components/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ gender: "M" });
  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState(false);

  const handleOnChangeValue = (e, propertyName) => {
    if (propertyName === "gender") {
      setForm((prev) => ({ ...prev, [propertyName]: e }));
    } else {
      setForm((prev) => ({ ...prev, [propertyName]: e.target.value }));
    }
  };

  useEffect(() => {
    if (form.pass && form.pass === form["re-pass"]) {
      console.log("ee");
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form]);

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
      <div className="input-group px-5 py-6 2xl:w-1/5 md:w-1/2 sm:w-full border-2 bg-slate-200">
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

        <Select onChange={(e) => handleOnChangeValue(e, "gender")} />

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

        <div className="relative">
          <Input
            title="Confirm password"
            onChange={(e) => handleOnChangeValue(e, "re-pass")}
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
        {/* 
        <Input
          title="Password"
          onChange={(e) => handleOnChangeValue(e, "pass")}
          type="password"
          maxLength={15}
        /> */}
        {/* <Input
          title="Re-Enter Password"
          type="password"
          maxLength={15}
          onChange={(e) => handleOnChangeValue(e, "re-pass")}
        /> */}
        <div className="button-group mt-5 flex justify-between items-center mx-5">
          <Link to="/login">
            <a className="text-gray-900 text-xl cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
              Cancer
            </a>
          </Link>

          {!disabled ? (
            <button
              onClick={sendSignUp}
              className="text-gray-900 text-xl cursor-pointer bg-sky-300 hover:bg-sky-700 hover:text-white rounded-md px-3 py-2 font-medium"
            >
              Sign Up
            </button>
          ) : (
            <button className="text-gray-500 text-xl cursor-not-allowed bg-sky-200  rounded-md px-3 py-2 font-medium">
              Sign Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
