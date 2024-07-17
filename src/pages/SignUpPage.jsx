import { Link } from "react-router-dom";
import Input from "../components/Input";

const SignUpPage = () => {
  return (
    <div className=" w-screen h-full flex flex-col justify-center items-center">
      <h1 className="mb-6">Sign Up</h1>
      <div className="input-group px-5 py-6 2xl:w-1/5 md:w-1/2 sm:w-full   border-2 bg-slate-200">
        <Input title="Username" type="text" maxLength={20} />
        <Input title="Email" type="email" maxLength={30} />
        <Input title="Phone" type="email" maxLength={12} />
        <Input title="Password" type="password" maxLength={15} />
        <Input title="Re-Enter Password" type="password" maxLength={15} />
        <div className="button-group mt-5 flex justify-between items-center mx-5">
          <Link to="/">
            <a className="text-gray-900 text-xl cursor-pointer hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 font-medium">
              Cancer
            </a>
          </Link>
          <a className="text-gray-900 text-xl cursor-pointer bg-sky-300 hover:bg-sky-700 hover:text-white rounded-md px-3 py-2 font-medium">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
