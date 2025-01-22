import React, { useState } from "react";
import "./App.css";
import PT from "./utils/PT.jpg";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";

function App() {
  const handlerEnterFuntion = (e) => {
    console.log("aaa", e);
  };
  const [inputValue, setInputValue] = useState("");
  const [inputValueButton, setInputValueButton] = useState("");
  const text = (
    <p>
      <p>{"[Note updated on 1:00p.m 22 Jan]"}</p>
      Hi beautiful! Sorry mujhe website pr kaam krne ka time ni mil paa rha h,
      kyuki aajkl busy hojara hu project mai apne {":( "} But i will work on it
      soon. Aur btao cutie how is your prep for farewell going on. All set?{" "}
      <p>
        I really want to see this Husn Pari {":P "} Hehe! Snaps bhjna uss din
        tyaar hoke {"(happy happy happy)"}{" "}
      </p>
      <p>
        And also ye pyaari si billi h jo aapke paas.... isko bhja kro na mere
        paas....mujhe khlna h uske sath {"(grinning face)"}
      </p>
      <p>
        And han shyd mai na nhi hu iss january end mai idhr....but I'll miss
        you. isiliye apne darshan dete rhena tb tak :P And pdhai pr bhi thora
        dhyaan dena.... uske baad mai tum pr dhyaan dunga khikhikhi
      </p>
      <p>
        Aur han tum puch rhi thi na konse god ko pray krra tumhare liye. Uska
        answer h....mene puchku devi k liye nariyal foda tha, tbhi toh itni
        pyaari bandi, hehehe ....lucky to have you though! I do pray ki ham
        aise hi khush aur sath rhe aur jldi dobara date moment ho{" "}
        {"[ahh! what a wonderful day it was :) ]"}
      </p>
      <p>
        I love youuuuuuuuuuuuuuuuu puchkuuuuu! You are always there in my
        thoughts and heart. Byeeeeee
      </p>
      Today's Song for you!
      <p>
        Oh, main toh Lutt-putt gaya, lutt-putt gaya, main toh gaya Oh, main
        toh... Pehle sota tha raaton mein, ab jaag-jaag kar Khwaab tere dekhoon,
        aisa kyun? Main tanha-tanha rehta tha, ab begaanon se bhi poochhun "How
        do you do, hm?" Aisa kyun?
      </p>
    </p>
  );
  const handClickButton = () => {
    const payload = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: inputValueButton,
    };
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", payload)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));

    setInputValueButton("");
  };
  const showText = inputValue === "19sept";
  return (
    <div className="App">
      <header className="App-header">
        <img src={PT} className="App-backImage" alt="logo" />
        <p>{showText ? "Scroll Down Now" : "Login"}</p>
        <input
          type="password"
          placeholder="Type password"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handlerEnterFuntion(inputValue);
          }}
        />
        <div className="app-button">
          <TextField
            sx={{ margin: "1%" }}
            id="outlined-textarea"
            label=" Type Here Puchku!"
            placeholder="Message to send"
            onChange={(e) => setInputValueButton(e.target.value)}
            multiline
          />
          <Button
            sx={{ height: "5vh", margin: "5%" }}
            variant="contained"
            onClick={handClickButton}
          >
            Send
          </Button>
        </div>
        {showText ? text : null}
      </header>
    </div>
  );
}

export default App;
