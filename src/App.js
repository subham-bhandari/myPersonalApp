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
  //const [inputValueButton, setInputValueButton] = useState("");
  const text = (
    <p>
      {" "}
      <p>{"[Note Updated 7 Feb 2025 7:30 p.m]"}</p>
      Hi puchku! I really really miss you {"(cry emoji) "} I dont know why but
      felt a little sad today. Coz of the farewell, The thought of you going
      away clicked in my mind and its really fucking up my mental {":( "} . The
      thought of loosing you! Fuckkk! I can't say yrr dil bhaari sa hojata h
      sochkr hi.
      <p>
        I really miss you. Our late night convos. Our daily snaps. I miss
        everything. Although I dont want to distract you at this point of time.
        But man! It is really tough for me, tumse durr rehna. bhaisahab dil na
        sikud gya h esa lgra h- tumhari yaad mai.
      </p>
      <p>
        acha mai ek gift bhjwaya hu vidhi k hatho.... I hope you like it! I just
        wanna say ki you mean a lot to me. I don't know how and why, but I am
        getting sepration anxiety even though we are together{" "}
        {" (weird right??) "}. I am really invested in you Prachi giri, So dont
        you dare leave me now. Huh. Thats an order!!!!!!!{" "}
        {"(Pilij Mat jana bhyii wrna mera bura haal hojaega >_<)"}
        <p>
          Bhyii pr aaj kya mast dikhri thi puchku! jaan se Marogi kya? MAi toh
          tumhe hi dekhra tha XD. Janbuz kr aisi seat li thi jis se tum clear
          dikho.
        </p>
        <p>
          Tumhare sath jabse relationship mai aya hu. Bhai nature hi change
          hogya h mera jese XD. Mai phone bohot kam use krta tha pehle and chats
          toh bilkul bhi nhi even dosto k sath bhi nhi. Aur ab dekho... tumhare
          text ka wait rehta h ki kab madam ko time mile aur wo msg krre!
        </p>
        <p>
          Acha let me tell you mai raat mai kese time gujaar rha hu XD. kbhi
          kbhi toh dosto k sath valo khlne lgta hu, Kbhi koi series. Ya anushka
          ko preshan krta hu
          {"(Hmare 2-3 hi topic rehte hain bss next paragraph mai batata hu)"}
        </p>
        <p>
          Main topic rhega ki Prachi mili aaj ya nhi anushka ko. Aur kuch bola?
          Second ye ki wo chidaegi mujhe ki mummy {"(tum) "} ki kissi mili aaj{" "}
          aur fr bolegi ki jealous feel mat kro. Esa dimag ka bharosa
          {"(no apshabdh)"} hota hai na, ki mujhe kyu ni milri. Jldi bahar aao
          fr bohot saari lunga :P. Acha last topic yhi ki uske abhi wale bande
          ne kya kaat h uska. Btaunga ye bhi ki kya hua iske sath.
        </p>
        <p>
          Dekhre ho! kisi aur ldki wgera se durr hi rehta hu, baat nhi krta. Bs
          anushka h jis se kbhi kbhi hoti h
        </p>
        <p>
          acha ek chiz aur! vidhi se baat huii thi prso raat toh kuch baat pta
          chli....bhyii pta nhi tha mujhe itna sab! Tumhe btaunga sb !!!!!!!!
        </p>
        <p>
          Chlo abhi I'm ending this note itne mai hi! Itna kuch h na baat krne
          ko ki kya bolu....Raat choti pad jaegi pr baatein khtm ni hogi. Isliye
          free hojaye fr bataunga bohot saari gossips.
        </p>
        <p>
          Tab tak k liye I love you {"<3"}! Bye Bye!! Kal gift chupa lena hehehe
        </p>
        <p>
          ओ, सुध-बुध खोई है, खोई मैंने हाँ, जान गँवाई, गँवाई मैंने हाँ, तुझको
          बसाया है धड़कन में, साँवरे तोहसे नैना जब से मिले... तोहसे नैना जब से
          मिले, बन गए सिलसिले
        </p>
      </p>
    </p>
  );
  const handClickButton = () => {
    const options = {
      method: "POST",
      url: "https://reach-interactive.p.rapidapi.com/sms/message",
      headers: {
        "x-rapidapi-key": "cab0a35b01mshcec5451a1cb2761p1d27d7jsn818c6075fa93",
        "x-rapidapi-host": "reach-interactive.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        0: "{",
        1: '"',
        2: "t",
        3: "o",
        4: '"',
        5: " ",
        6: ":",
        7: " ",
        8: '"',
        9: "4",
        10: "4",
        11: "7",
        12: "X",
        13: "X",
        14: "X",
        15: "X",
        16: "X",
        17: "X",
        18: "X",
        19: "X",
        20: "X",
        21: '"',
        22: ",",
        23: " ",
        24: '"',
        25: "f",
        26: "r",
        27: "o",
        28: "m",
        29: '"',
        30: " ",
        31: ":",
        32: " ",
        33: '"',
        34: "R",
        35: "e",
        36: "a",
        37: "c",
        38: "h",
        39: '"',
        40: ",",
        41: " ",
        42: '"',
        43: "m",
        44: "e",
        45: "s",
        46: "s",
        47: "a",
        48: "g",
        49: "e",
        50: '"',
        51: " ",
        52: ":",
        53: " ",
        54: '"',
        55: "T",
        56: "e",
        57: "s",
        58: "t",
        59: " ",
        60: "J",
        61: "s",
        62: "o",
        63: "n",
        64: " ",
        65: "S",
        66: "e",
        67: "n",
        68: "d",
        69: '"',
        70: ",",
        71: " ",
        72: '"',
        73: "v",
        74: "a",
        75: "l",
        76: "i",
        77: "d",
        78: '"',
        79: " ",
        80: ":",
        81: " ",
        82: '"',
        83: "7",
        84: "2",
        85: '"',
        86: ",",
        87: '"',
        88: "r",
        89: "e",
        90: "f",
        91: "e",
        92: "r",
        93: "e",
        94: "n",
        95: "c",
        96: "e",
        97: '"',
        98: " ",
        99: ":",
        100: " ",
        101: '"',
        102: "1",
        103: "2",
        104: "3",
        105: "4",
        106: "A",
        107: "B",
        108: "C",
        109: "D",
        110: '"',
        111: ",",
        112: '"',
        113: "c",
        114: "o",
        115: "d",
        116: "i",
        117: "n",
        118: "g",
        119: '"',
        120: " ",
        121: ":",
        122: " ",
        123: '"',
        124: "1",
        125: '"',
        126: "}",
      },
    };

    try {
      const response = axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    //setInputValueButton("");
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
            // onChange={(e) => setInputValueButton(e.target.value)}
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
