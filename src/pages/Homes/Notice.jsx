import React from "react";

const Notice = () => {
  return (
    <div className="bg-[#051a65] text-white px-4 py-6 md:px-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
          Notice to all Users
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-justify">
          It has come to our notice that there are users impersonating Social
          Beat and our team members on Whatsapp and Telegram. Social Beat does
          not reach out on telegram and whatsapp for hiring, posting reviews or
          any other purpose. We also do not request payment from anyone for any
          tasks. We would recommend all users to be aware of these scams and
          stay vigilant. Please report any crimes to Cyber Crime or to the
          platform (Whatsapp/Telegram) directly.
          <br />
          <br />
          For more details please visit{" "}
          <a
            href="https://cybercrime.gov.in/"
            className="text-[#ffcc00] underline break-words"
          >
            https://cybercrime.gov.in/
          </a>
        </p>
      </div>
    </div>
  );
};

export default Notice;
