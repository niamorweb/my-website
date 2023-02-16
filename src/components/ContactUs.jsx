import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_apg3tcu",
        "template_h1n7pue",
        form.current,
        "0ZyUCA_LOrUFSLNgv"
      )
      .then(
        (result) => {
          console.log(result);
          setFormValues({ user_name: "", user_email: "", message: "" });
          var mailSent = document.getElementById("mailSent");
          mailSent.style.opacity = "1";
          setTimeout(() => {
            mailSent.style.opacity = "0";
          }, 3500);
          setLoading(false);
        },
        (error) => {
          alert(error);
          setLoading(false);
        }
      );
  };
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <span
        id="mailSent"
        className="fixed opacity-0 duration-500 bg-mainColor  text-white  top-14 right-6 px-6 py-4 font-medium	z-[100] "
      >
        Message sent !
      </span>
      <div className="contact_me w-full flex flex-col gap-9 mb-20 max-w-[40rem]">
        <h2 className="font-secondary">Contact me here</h2>
        <form
          className="w-full flex flex-col gap-4 md:gap-7"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-4 md:gap-7 md:flex-row">
            <div className="flex flex-col w-full">
              <label className="md:text-lg ">Your name</label>
              <input
                className="border-mainColor border-[1px] rounded-lg p-2 md:p-3"
                type="text"
                name="user_name"
                value={formValues.user_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="md:text-lg ">Your email</label>
              <input
                className="border-mainColor border-[1px] rounded-lg p-2 md:p-3"
                type="email"
                name="user_email"
                value={formValues.user_email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col  w-full">
            <label className="md:text-lg ">Message</label>
            <textarea
              className="border-mainColor border-[1px] rounded-lg p-2 md:p-3"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            className="btn_submit_form w-full cursor-pointer border-mainColor border-2 rounded-lg p-2 font-bold bg-mainColor text-white text-lg hover:brightness-110   duration-200  "
            type="submit"
            value="Send"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
}
