import React from "react";
import { useAuthProvider } from "../../../ContextApi/AuthProvider";
import FormController from "../../../Controllers/FormController";
import Button from "../../ReuseableComponents/Button";
import Form from "../../ReuseableComponents/Form";
import Input from "../../ReuseableComponents/Input";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { handleSubmit } = FormController();
  const { signinWithEmailAndPassword } = useAuthProvider();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = handleSubmit(e);

    if (formData && formData.email && formData.password) {
      try {
        await signinWithEmailAndPassword(formData.email, formData.password);
        navigate("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect Cradiential!",
        });
      }
    } else {
      console.log("Error: Missing email or password.");
    }
  };
  return (
    <div className="hero min-h-screen text-white dark:bg-slate-600">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Signin now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <Form onSubmit={handleSignup}>
            <Input
              upperText="email"
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
            <Input
              upperText="password"
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="link-hover link label-text-alt">
                Forgot password?
              </a>
            </label>

            <div className="form-control mt-6">
              <Button className="btn bg-[#7480FF] text-black">Signin</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
