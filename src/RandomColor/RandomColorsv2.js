import React, { useState } from "react";

function RandomColors() {
  const [color, setColor] = useState("#ffffff");

  const randomColorFn = () => {
    var hashLetter = "0123456789ABCDEF";
    var hashLetterReturn = "";
    for (var i = 0; i < 6; i++) {
      hashLetterReturn += hashLetter[Math.floor(Math.random() * 16)];
    }
    setColor("#" + hashLetterReturn);
  };

  return (
    <div className="container m-auto">
      <h1 className="text-5xl">Random Color</h1>

      <div
        className="container bg-gray-200 min-h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center items-center min-h-screen">
          <button
            className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all cursor-pointer duration-300 mx-5"
            onClick={randomColorFn}
          >
            Random color
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all cursor-pointer duration-300 mx-5"
            onClick={randomColorFn}
          >
            Random color
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all cursor-pointer duration-300 mx-5"
            onClick={randomColorFn}
          >
            Random color
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomColors;
