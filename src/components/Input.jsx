/* eslint-disable react/prop-types */
export default function Input({
  title,
  error = "",
  type = "text",
  maxLength = 10,
  className = "my-5",
}) {
  return (
    <div className={className}>
      <label
        htmlFor={title}
        className="block text-base font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          id={title}
          name={title}
          type={type}
          maxLength={maxLength}
          className="block w-full rounded-md border-0 py-1.5 px-5 sm:px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
        />
      </div>
      <div className="errorMessage">
        <p className="pl-1 text-red-600 text-sm">{error}</p>
      </div>
    </div>
  );
}
