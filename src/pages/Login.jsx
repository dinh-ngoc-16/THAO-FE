import { Link } from "react-router-dom";
import Input from "../components/Input";

const Login = () => {
  return (
    <div className=" w-screen h-full flex flex-col justify-center items-center">
      <h1 className="mb-6">Login</h1>
      <div className="input-group px-5 py-6 sm:w-full lg:w-1/5  border-2 bg-slate-200">
        <Input title="Username" maxLength={20} />
        <Input title="Password" type="password" maxLength={15} />
        <a className="ml-1" href="#">
          Create a new account!
        </a>
        <div className="button-group mt-5 flex justify-between items-center mx-5">
          <Link to="/">
            <a className="text-gray-900 text-xl cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
              Cancer
            </a>
          </Link>
          <a className="text-gray-900 text-xl cursor-pointer bg-sky-300 hover:bg-sky-700 hover:text-white rounded-md px-3 py-2 font-medium">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
