import React from "react";
import { useAuthProvider } from "../../../ContextApi/AuthProvider";
import FormController from "../../../Controllers/FormController";
import Button from "../../ReuseableComponents/Button";
import Form from "../../ReuseableComponents/Form";
import Swal from "sweetalert2";

import Input from "../../ReuseableComponents/Input";

export default function SignUp() {
  const { handleSubmit } = FormController();
  const { signupWithEmailAndPassword, errorMessage } = useAuthProvider();

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = handleSubmit(e);

    if (formData && formData.email && formData.password) {
      try {
        await signupWithEmailAndPassword(formData.email, formData.password);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your account has been created successfully.",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage(error), // Display the error message
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Missing email or password.",
      });
    }
  };


  return (
    <div className="hero min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
        {/* Intro Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="mb-4 text-5xl font-bold">Sign up now!</h1>
          <p className="text-lg">
            Join us today to explore our exclusive features and manage your
            tasks effortlessly. Take the first step towards a productive
            journey.
          </p>
        </div>

        {/* Form Section */}
        <div className="card w-full max-w-md bg-base-100 p-6 shadow-2xl">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Create an Account
          </h2>
          <Form submitform={handleSignup}>
            {/* Username Input */}
            <div className="form-group mb-4">
              <Input
                upperText="Username"
                type="text"
                name="username"
                placeholder="Enter your username"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email Input */}
            <div className="form-group mb-4">
              <Input
                upperText="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            {/* Password Input */}
            <div className="form-group mb-4">
              <Input
                upperText="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <Button className="btn w-full bg-[#7480FF] text-black">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
