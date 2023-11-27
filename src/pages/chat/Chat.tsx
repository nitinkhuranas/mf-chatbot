import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import { TextField } from "@mui/material";

export default function Chat() {
  const [chatText, setChatText] = useState("");
  const [messages, setMessages] = useState([])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    var text = e.target.value;
    setChatText(text);
  };

  const handleOnKeyPress = (e) => {
    if (e.keyCode === 13) {
      messages.push(chatText);
      setMessages(messages);
      setChatText("");
    }
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Chat"
        onChange={handleOnChange}
        onKeyDown={handleOnKeyPress}
        value={chatText}
      />
      <div>
        {messages.map((message, index) => {
          return (
            <div key={index}>
              {message}
            </div>
          )
        })}
      </div>
    </div>
  )
}