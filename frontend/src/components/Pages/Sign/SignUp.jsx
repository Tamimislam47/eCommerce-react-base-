import React from "react";
import { useAuthProvider } from "../../../ContextApi/AuthProvider";
import FormController from "../../../Controllers/FormController";
import Button from "../../ReuseableComponents/Button";
import Form from "../../ReuseableComponents/Form";
import Input from "../../ReuseableComponents/Input";
export default function SignUp() {
  const { handleSubmit } = FormController();
  const { signupWithEmailAndPassword } = useAuthProvider();

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = handleSubmit(e);

    if (formData && formData.email && formData.password) {
      try {
        await signupWithEmailAndPassword(formData.email, formData.password);
        console.log("User signed up successfully!");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          console.log("Error: Email already in use.");
        } else if (error.code === "auth/admin-restricted-operation") {
          console.log("Error: Admin restricted operation.");
        } else {
          console.log("Sign-up failed:", error.message);
        }
      }
    } else {
      console.log("Error: Missing email or password.");
    }
  };
  return (
    <div className="hero min-h-screen text-white dark:bg-slate-600">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <Form submitform={handleSignup}>
            <Input
              upperText="username"
              type="username"
              name="username"
              placeholder="username"
              className="input input-bordered"
            />
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

            <div className="form-control mt-6">
              <Button className="btn bg-[#7480FF] text-black">Singup</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
