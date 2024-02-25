"use client";
import { useState } from "react";
import tranformation from "./transform";

export default function Home() {
  let [inputValue, setInputValue] = useState<string>("");
  let [outputValue, setOutputValue] = useState<string>();

  const handleClear = () => {
    setOutputValue("");
    setInputValue("");
  };

  return (
    <main className="">
      <form action="" className="input-form">
        <label htmlFor="">Input</label>
        <textarea
          name="message"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></textarea>
      </form>
      <div className="buttons">
        <button
          className="button transform"
          onClick={() => setOutputValue(tranformation(inputValue))}
        >
          Transform
        </button>
        <button className="button clear" onClick={handleClear}>
          Clear
        </button>
      </div>
      <form action="">
        <label htmlFor="">Output</label>
        <textarea name="message" value={outputValue}></textarea>
      </form>
    </main>
  );
}
