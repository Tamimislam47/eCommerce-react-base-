import React from "react";
import Form from "../../ReuseableComponents/Form";
import Input from "../../ReuseableComponents/Input";
import Button from "../../ReuseableComponents/Button";
import FormController from "../../../Controllers/FormController";


export default function ContactForm() {
  const { handleSubmit } = FormController();
  const submitFormHandler = (e) => {
    e.preventDefault();

    e.target.reset();
  };
  return (
    <div className="relative min-h-[80vh] w-full bg-[#F5F5F5] sm:w-[80%] lg:w-[70%]">
      <div className="absolute left-1/2 top-1/2 flex h-full w-[75%] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center">
        <h1 className="p-5 text-center text-4xl font-bold sm:text-[50px]">
          Send A Quest
        </h1>
        <Form
          onSubmit={submitFormHandler}
          className="grid h-full w-full grid-cols-1 place-items-center gap-3"
        >
          <div className="grid h-full w-full grid-cols-2 gap-5">
            <Input
              type="text"
              className="w-full rounded-2xl border-2 border-[#D7D7D7] pb-4 pl-3 pt-4"
              placeholder="Name"
            ></Input>
            <Input
              type="text"
              className="w-full rounded-2xl border-2 border-[#D7D7D7] pb-4 pl-3 pt-4"
              placeholder="Email"
            ></Input>
          </div>
          <div className="h-full w-full">
            <Input
              type="text"
              className="col-span-1 w-full rounded-2xl border-2 border-[#D7D7D7] pb-4 pl-3 pt-4"
              placeholder="Subject"
            ></Input>
          </div>

          <textarea
            id="message"
            rows="4"
            class="focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 block h-full w-full rounded-lg border border-[#D7D7D7] bg-gray-50 p-5 text-sm dark:border-gray-600"
            placeholder="Write your thoughts here..."
          ></textarea>
          <Button className="w-[200px] rounded-xl bg-blue p-5 text-xl font-bold">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
