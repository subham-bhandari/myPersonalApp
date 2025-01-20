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
      Hi Puchku, updating this note! Dekhre ho madam aap? ki aap k liye kya kya
      kr rha hu mai! Website bna daali..... Hehehehe.... I dont know if you know
      it but it is a hectic task.....harr component ko code krna fir usse deploy
      krna globally. {":)"} Ye sb chorro..... farewell mai jyada pyaari ban kr
      aaoge toh photo bhjna mat bhulna mujhe {">_<"} Pr pr pr ....fr toh ldke
      bhi tadenge tumhe {"-_-"} Kher chorro.....ye btao iss website mai hmari
      photo lgadu {"(laughing emoji)"} Just kidding! aap ye btao hostel ki ldkio
      ko shak kyu hora h itna?? I mean harman tak theek tha pr mehra kyu??? aur
      arya ko kyu shak hua?{" "}
      <p>
        wese pata mene ye periodic table kyu lgai...taaki laptop pr dekhle agar
        koi toh shak na ho {"(heheehe clever naaa)"} Agla ab mai bio ki kuch
        slides lgaunga kal... abhi ninnu aari{" "}
        {"(Last updated this note on 2 A.M 21 Jan 2025)"}
      </p>
      <p>
        ye button jo dikh rha h usko use krna answer type krne k liye.... note
        pdh leti ho jab toh tb bhi you can type yes taaki mai note change krdu
        {
          "(Abhi still its in development toh send button kaam ni krega abhi :( Sorry! subah figure out krta hu ki data kese send krna h since 2 ghnet se yhi krra hu aur solution mil ni rha [cry emoji]))"
        }{" "}
        I have an idea though...I can upload snap in this site but login bnana
        pdega uske liye... tell me if this idea seems feasible to you. Ek gaana
        h aapke liye jab bahar aaoge toh gaa kr bhi suna dunga
      </p>
      <p>
        थोड़ी जगह देदे मुझे, तेरे पास कही रह जाऊँ मैं खामोशियाँ तेरी सुनु और दूर
        कही ना जाऊँ मैं अपनी ख़ुशी  देके मैं तुझे, तेरे दर्द से जुड़ जाऊँ मैं
      </p>
      मिला जो तू यहाँ मुझे, दिलाऊँ मैं यक़ीन तुझे रहूँ होके तेरा सदा, बस इतना
      चाहता हूँ मैं थोड़ी जगह देदे मुझे, तेरे पास कही रह जाऊँ मैं खामोशियाँ तेरी
      सुनु और दूर कही ना जाऊँ मैं
    </p>
  );
  const handClickButton = () => {
    const payload = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "aaaaaa",
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
