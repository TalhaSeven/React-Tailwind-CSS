import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[94.5vh] bg-gradient-to-r from-blue-500 to-purple-700 text-white">
        <h1 className="text-4xl font-bold mb-4 animate-bounce">
          Hoş Geldiniz!
        </h1>
        <p className="text-lg mb-8 animate-fade-in">
          Tailwind CSS. Burada yapılacak harika işleri var.
        </p>
      </div>
    </>
  );
};

export default Home;
