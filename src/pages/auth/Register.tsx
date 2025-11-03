import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import loginLogo from "../../assets/login.png";
import { useNavigate } from "react-router-dom";

import useTitle from "../../hooks/useChangePageTitle";
import {
  RegisterSchema,
  type RegisterFormData,
} from "@/validations/RegisterValidation";

const Register = () => {
  useTitle("Register - Corelia");
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register Data:", data);
    // هنا يمكن إرسال البيانات للخادم
    nav("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <img
          src={loginLogo}
          alt="Main Logo"
          className="mx-auto block w-24 md:w-32 lg:w-48 mb-4"
        />

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create New Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Enter your password"
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
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-700 mt-4">
          Already have an account?{" "}
          <button
            onClick={() => nav("/login")}
            className="text-primary hover:underline cursor-pointer"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
