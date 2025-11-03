import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import loginLogo from "../../assets/login.png";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useChangePageTitle";
import { LoginSchema, type LoginFormData } from "@/validations/LoginValidation";

const Login = () => {
  useTitle("Login - Corelia");
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);
    nav("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <img
          src={loginLogo}
          alt="Main Logo"
          className="mx-auto block w-24 md:w-32 lg:w-48 mb-4"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon size={18} />
                ) : (
                  <EyeIcon size={18} />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-between items-center mb-4">
            <a href="#/" className="text-purple-700 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-teal-600 transition"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => nav("/register")}
            className="text-purple-700 hover:underline cursor-pointer"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
