import React, { useState } from "react";
import style from "../../../CssModule/PlayBtnAnimation.module.css";
import promoImg from "@images/promo-video-img.webp";

export default function Description() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex w-full flex-col justify-around gap-7 p-4 sm:w-[80%] lg:w-[70%]">
      <div>
        <h1 className="text-center text-6xl">Smart Fashion</h1>
        <h1 className="text-center text-6xl font-extrabold">
          With Smart Devices
        </h1>
      </div>

      <div className="flex h-full w-full items-center justify-center">
        <p className="text-center text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
          <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud
          <br />
          exercitation ullamco laboris nisi ut aliquip ex ea comml consequat.
          Duis aute irure
          <br />
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident sunt in culpa
        </p>
      </div>

      <div className="relative flex h-full w-full items-center justify-center ">
        <img
          className="h-[60vh] w-[90%] rounded-lg sm:w-[80%] cursor-pointer object-cover sm:h-[50vh]"
          src={promoImg}
          alt="Promo Video"
          onClick={openModal}
        />

        <a
          onClick={openModal}
          className={`${style["video-play-button"]} `}
          href="#"
        >
          <span></span>
        </a>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-[80%] max-w-3xl">
            <button
              className="absolute right-2 top-2 text-2xl text-white"
              onClick={closeModal}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/7rmQIzbgpoA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
