import React from "react";
import Form from "../../../ReuseableComponents/Form";
import Input from "../../../ReuseableComponents/Input";
import Button from "../../../ReuseableComponents/Button";

export default function CommentForm() {
  const submitFormHandler = (e) => {
    e.preventDefault();

    e.target.reset();
  };
  return (
    <div id="/comment-form"  className="flex min-h-[70vh] w-full items-center justify-start">
      <div className="flex h-full w-full flex-col gap-10">
        <h1 className="font-bold underline decoration-gray-300 decoration-2 underline-offset-[20px] sm:text-[50px]">
          Leave a Comment
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
            Comment
          </Button>
        </Form>
      </div>
    </div>
  );
}
