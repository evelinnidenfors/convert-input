"use client";
import { useState } from "react";
import Tranformation from "./transform";

export default function Home() {
  let [inputValue, setInputValue] = useState<string>("");
  let [outputValue, setOutputValue] = useState<string>();

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
      <button onClick={() => setOutputValue(Tranformation(inputValue))}>
        Transform
      </button>
      <form action="">
        <label htmlFor="">Output</label>
        <textarea name="message" value={outputValue}></textarea>
      </form>
    </main>
  );
}
