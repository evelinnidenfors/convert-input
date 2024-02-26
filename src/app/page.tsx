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

  function copyText(copy: any) {
    navigator.clipboard.writeText(copy);
    event?.preventDefault();
  }

  return (
    <main className="">
      <div>
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
        <form action="" className="output-form">
          <div>
            <label htmlFor="">Output</label>
            <button
              className="button copy"
              onClick={() => copyText(outputValue)}
            >
              <img src="/copy.png" alt="" />
            </button>
          </div>
          <textarea
            className="output-text"
            name="message"
            value={outputValue}
          ></textarea>
        </form>
      </div>
      {/* <div>
        <button className="button copy" onClick={() => copyText(outputValue)}>
          Copy <img src="/copy.png" alt="" />
        </button>
      </div> */}
    </main>
  );
}
