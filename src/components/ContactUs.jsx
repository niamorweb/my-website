import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_apg3tcu",
        "template_h1n7pue",
        form.current,
        "0ZyUCA_LOrUFSLNgv"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          console.log("message error");
        }
      );
  };

  return (
    <div className="contact_me w-full flex flex-col gap-9 mb-20 max-w-[40rem]">
      <h2 className="font-secondary">Contact me here</h2>
      <form
        className="w-full flex flex-col gap-4 md:gap-7"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-4 md:gap-7 md:flex-row">
          <div className="flex flex-col w-full">
            <label className="md:text-lg ">Name</label>
            <input
              className="border-mainColor border-[1px] rounded-lg p-2 md:p-3"
              type="text"
              name="user_name"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="md:text-lg ">Email</label>
            <input
              className="border-mainColor border-[1px] rounded-lg p-2 md:p-3"
              type="email"
              name="user_email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col  w-full">
          <label className="md:text-lg ">Message</label>
          <textarea
            className="border-mainColor border-[1px] rounded-lg p-2 md:p-3"
            name="message"
            required
          />
        </div>
        <input
          className="w-full cursor-pointer border-mainColor border-2 rounded-lg p-2 font-bold bg-mainColor text-white text-lg hover:brightness-110   duration-200  "
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
