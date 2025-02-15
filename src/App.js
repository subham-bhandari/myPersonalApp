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

  const text2 = (
    <p>
      {" "}
      <p>{"[Note Updated 15 Feb 2025]"}</p>
      <p>
        Hi cutu! kese ho aap... I really hope ache honge aur apni tabiyat ka
        dhyaan rakh rhe honge!! Yrr so sorry for not updating notes here!
        Actually mere company k project mai scene hogya.... kisi mahaan insaan
        ne project ka code apne personal account mai daal dia....jo ki ek bohot
        bada violation hota h company norms ka!! Ye baat na mene detail mai
        vidhi ko btai h taaki wo aapko bata de jld se jld
      </p>
      <p>
        Actually scene ye h ki mai aapke liye ye website apne company k laptop
        se operate krra tha ab toh i Know ki I m in the clear, but still kuch
        time k liye meri bhi G fatt gyi thi ki bhai khi ye mail jo aayi h mere
        liye hi toh nhi...but it's all good and well....
      </p>
      <p>
        Acha dusri chiz wo prachi barthwal wali....actually hua yu ki mai hath
        dhone andar aya tha aur baith kr paani peera tha abhigyan ki bottle
        se....uska bhi tbhi ana hua aur saamne baith gyi....eventually wo ye
        bolri thi ki bete tune party ni bday ki....and mai baat taal rha
        tha....to be honest esi koi khas baat hoti nhi h hmari face to face bss
        normal school k baare mai talks...Most importantly I HAVE DIRECTLY
        DENIED GYM N ALL SATH MAI KRNE K LIYE!!! Na ham milte hain kbhi
        bahar.....jitni conversation hoti h school mai hi hoti h....toh babu aap
        ko ye kbhi nhi lagna chiye ki aapko chorke mai kisi dusri ldki k baare
        mai soch bhi skta hu.... I mean just look at you.....Meri aankho se
        dekho kbhi khudko....bhai pata chal jaega ki dusri ldkio mai interest
        hai hi nhi mujhe....IT's Only you know :P {"(I love you <3)"}
        <p>
          teesri baat ....bhai mai bata nhi skta mujhe na tumhare bina bohot
          gndi wali anxiety hori h aajkl.....And I really wanna talk to you
          ....about a lot of things.....mere din kese jaare sbkuch.....but meri
          fav mahila toh busy h boards mai {":("} You know what apni ye
          uneasiness wali feeling control krne k liye toh mai vidhi aur anushka
          se baatein krta hu aajkl. I really love it jab wo aapkebaare mai btati
          hain ki din bhar kese gya tumhare sath kya kia ....prachi is all I
          hear about. Puchna vidhi se XD. I think she might think i'm a pyaar
          mai pagal insaan jo din bhar prachi... prachi krta rehta h...
          {"(I'm that pagal insaan though hehehe....I'm crazy for you)"}
        </p>
        <p>
          Babu lastly aap itna overthink mat kroo....kyuki honestly yrr mai bhi
          same chiz se guzar rha hu...bohot gndi overthinking ho rhi h and idhr
          udhr se tumhare baare mai kuch sunta fr dimaag khrab alag hota h. So
          trust me bhyiii I really miss you a lot and I have been behaving
          myself. KOi female interaction rkha hi nhi h. Jo bhi h wo aapke saamne
          h. But aapka note pdha na overthinking wala jo aaj bheja it made me
          really sad. KYuki mai bhi same overthinking se gujar rha hu
          abhi....I'm Really possesive for you...And I dont wanna loose you{" "}
          {"(Cry emoji)"}.
          <p>
            Apne boards pr achi mehnat krro kyuki mai bohot patiently aapka wait
            krra hu bahar .... Bohot yaada aati h yrr tumhari....Maa kasam bolu
            toh this distance between is really eating me up. Toh aap madam kuch
            aisa mat krna jo meri overthinking ability ko aur bdha de. Hehee i
            Know you won't I trust you. Aur ho ske toh find an excuse to talk to
            me in the evening.
          </p>
          <p>
            Happy Valentine's day babe.....Your gift is waiting for you outside{" "}
            {"(ME) hehehe"}
            <p>
              aur ye apni messenger ko bolna ki pehle hi note pkda dia
              krre...pagal si ....pkdwai kisi din hame
            </p>
          </p>
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
        {showText ? text2 : inputValue === "27dec" ? text : null}
      </header>
    </div>
  );
}

export default App;
