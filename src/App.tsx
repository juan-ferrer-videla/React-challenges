import { FC, useEffect, useState } from "react";

type HEXColor = `#${string}`;

import "./App.css";
import { cn } from "./utils";

const Button: FC<{
  guessColor: HEXColor;
  color: HEXColor;
  changeColor: () => void;
}> = ({ guessColor, color, changeColor }) => {
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    setWrong(false);
  }, [guessColor]);

  return (
    <button
      className={cn(
        "rounded px-6 py-2",
        wrong ? "border border-red-500 bg-red-500/30" : "border",
      )}
      onClick={() => {
        if (guessColor !== color) {
          setWrong(true);
        } else {
          changeColor();
        }
      }}
    >
      {color}
    </button>
  );
};

const createHexColor = (): HEXColor => {
  const red = Math.floor(Math.random() * 256).toString(16);
  const green = Math.floor(Math.random() * 256).toString(16);
  const blue = Math.floor(Math.random() * 256).toString(16);

  return `#${red}${green}${blue}`;
};

const hex = createHexColor();
const initialColors = [hex, createHexColor(), createHexColor()].sort(
  () => Math.random() - 0.5,
);

function App() {
  const [hexColor, setHexColor] = useState(hex);
  const changeColor = () => setHexColor(createHexColor());
  const [guessColors, setGuessColors] = useState(initialColors);

  useEffect(() => {
    setGuessColors(
      [hexColor, createHexColor(), createHexColor()].sort(
        () => Math.random() - 0.5,
      ),
    );
  }, [hexColor]);

  return (
    <>
      <h1 className="mb-6 text-center text-3xl font-extrabold sm:text-4xl">
        Guess the HEX color
      </h1>
      <div
        className="mx-auto my-12 aspect-video w-48 rounded"
        style={{ backgroundColor: hexColor }}
      ></div>
      <div className="my-6 flex flex-wrap justify-center gap-4">
        {guessColors.map((color, i) => (
          <Button
            guessColor={hexColor}
            color={color}
            key={i}
            changeColor={changeColor}
          />
        ))}
      </div>
      <button
        className="rounded bg-black px-6 py-2 text-white"
        onClick={() => {
          changeColor();
        }}
      >
        Change color
      </button>
    </>
  );
}

export default App;
