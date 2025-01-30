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
      {" "}
      <p>{"[Note Updated 30 Jan 2025 2:00 p.m]"}</p>
      Hi Sweetie! I really hope you are doing good healthwise and in studies
      too! I'm really sorry ki mai hu nhi ab school mai kuch din cuz bahar jana
      pda mujhe. But tum apna ache se dhyaan rkhna. Aur btao kessa chlra h sb?
      Bdhiya. Mere bina toh kya hi {"(hehehe just kidding)"}
      <p>
        Cutie puchku, tumhari bohot yaad aari thi{" :( "} Please jldi se mere
        paas aao. Waiting for the day till we meet again{" >_< "}
      </p>
      <p>
        pta h mujhe lgta h mene sports room ki key guma di h XD but mai bol nhi
        skta kisi ko kyuki meri puri glti nhi h!!!! In my defence mene bche ko
        di thi jab mai shooting krra tha usne ptani kaha rkhi and idk ab kidhr h
        key {" :) "}. I hope jldi se miljaye aur mujhe call na aaye fr iss
        regarding XD.
      </p>
      <p>
        Aap btao, how are your practicals going on ? I hope ache hi jaare honge
        :p{" "}
      </p>
      <p>
        Here's a song for my cutie patootie puchku,{" "}
        {
          "[The Most beautiful girl everrrrrrrrrr! <3   (Bohot saari puchiiiii )]"
        }{" "}
        <p>
          <br />
          Waaqif toh huey tere dil ki baat se Chhupaya jise tune qaaynaat se
          <br />
          Waaqif toh huey tere uss khayal se Chhupaya jise tune apne aap se
          <br />
          Kahin na kahin teri aankhein, teri baatein padh rahe hain hum Kahin na
          <br />
          kahin tere dil mein, dhadkano mein dhal rahe hain hum Tu Har Lamha..
          <br />
          tha mujhse juda.. Chaahe door tha main.. yaa paas rahaa
          <br />
          Byeeeeeeee! I love youuuu a lottttttttt!{" <3"}
        </p>
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
