import React from "react";
import { useAuthProvider } from "../../../ContextApi/AuthProvider";
import FormController from "../../../Controllers/FormController";
import Button from "../../ReuseableComponents/Button";
import Form from "../../ReuseableComponents/Form";
import Input from "../../ReuseableComponents/Input";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { handleSubmit } = FormController();
  const { signinWithEmailAndPassword, errorMessage, user } = useAuthProvider();
  const navigate = useNavigate();

  console.log(user);

  const handleSignin = async (e) => {
    e.preventDefault();

    const formData = handleSubmit(e);

    if (formData && formData.email && formData.password) {
      try {
        await signinWithEmailAndPassword(formData.email, formData.password);
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "You have successfully signed in.",
        });
        navigate("/");
      } catch (error) {
        // Display the error message mapped from error.code
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage(error),
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email or password is missing.",
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
        {/* Intro Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="mb-4 text-5xl font-bold">Sign in now!</h1>
          <p className="text-lg">
            Gain access to exclusive features and manage your tasks efficiently.
            Join us today for a seamless experience.
          </p>
        </div>

        {/* Form Section */}
        <div className="card w-full max-w-md bg-base-100 p-6 shadow-2xl">
          <h2 className="mb-4 text-center text-2xl font-semibold">
            Welcome Back
          </h2>
          <Form onSubmit={handleSignin}>
            <div className="form-group mb-4">
              <Input
                upperText="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-group mb-4">
              <Input
                upperText="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4 flex items-center justify-between text-sm">
              <a href="#" className="link-hover link">
                Forgot password?
              </a>
              <Link to="/signup" className="link text-primary">
                Sign up
              </Link>
            </div>
            <div className="form-control">
              <Button className="btn w-full bg-[#7480FF] text-black">
                Sign in
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
