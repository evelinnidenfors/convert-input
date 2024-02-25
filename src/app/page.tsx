"use client";

export default function Home() {
  return (
    <main className="">
      <form action="" className="input-form">
        <label htmlFor="">Input</label>
        <textarea name="message"></textarea>
      </form>
      <button onClick={() => console.log("clicked")}>Transform</button>
      <form action="">
        <label htmlFor="">Output</label>
        <textarea name="message"></textarea>
      </form>
    </main>
  );
}
