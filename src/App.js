import React, { useState } from "react";
import "./App.css";
import PT from "./utils/PT.jpg";

function App() {
  const handlerEnterFuntion = (e) => {
    console.log("aaa", e);
  };
  const [inputValue, setInputValue] = useState("");
  const text = (
    <p>
      Hi Cutie!!!! Hope you Remember me {">_<"} Yess I'm taking Good care of me
      and I really miss you a lot. I hope you are studying really well and not
      lazying around! Keep those notes coming I really love it. And please tell
      your messenger to be discrete XD. I will be typing up my notes here you
      can check up my messages here. And also I will keep building this site
      evryday little by little jab bh itime milega. aap apna dhyaan rkhna, I
      really really miss you. And dont worry i'm not going gym kisi k bhi sath{" "}
      {"(Weep Weep)"} And also jldi se aao mere paass
    </p>
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={PT} className="App-backImage" alt="logo" />
        <p>{inputValue === "19sept" ? "Scroll Down Now" : "Login"}</p>
        <input
          type="password"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handlerEnterFuntion(inputValue);
          }}
        />
        {inputValue === "19sept" ? text : null}
      </header>
    </div>
  );
}

export default App;
