import { NavLink, useNavigate } from "react-router-dom";
import useUserContext from "../context/useUserContext";
import useSwal from "../hooks/ShowSwal";

const Login = () => {
  const { loginUser, error } = useUserContext();
  const navigate = useNavigate();

  // Use the showSwal function from the custom hook
  const { showSwal } = useSwal();

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      await loginUser(data);

      if (error) {
        showSwal("error", "Oops...", error);
      } else {
        showSwal("success", "Login Successful", null, "#262f0d", 2000);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      // Log the specific error message
      console.log(err.message);

      // Handle specific error cases
      if (err.response) {
        if (err.response.status === 401) {
          showSwal(
            "error",
            "Login Failed",
            "Either your email or password is incorrect"
          );
        } else if (err.response.status === 403) {
          showSwal(
            "error",
            "Login Failed",
            "You don't have permission to log in"
          );
        }
      } else {
        showSwal(
          "error",
          "Login Failed",
          "An unknown error occurred while logging in"
        );
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-cards dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-cards dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:bg-cards dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-cards bg-button hover:text-button hover:bg-footer focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              {`  Don't have an account yet?`}{" "}
              <NavLink
                to="/register"
                className="font-medium text-primary-600 hover:underline dark:text-button"
              >
                Sign up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
