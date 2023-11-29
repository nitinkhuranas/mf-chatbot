import { ChangeEvent, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import DynamicChatMessages from "@/components/dynamicChatMessages";

export default function Chat() {
  const [chatText, setChatText] = useState("");
  const [messages, setMessages] = useState([])
  const [tempI, setTempI] = useState(0);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    var text = e.target.value;
    setChatText(text);
  };

  const tempFetchFundsList = async () => {
    const fetchResponse = await fetch('top-funds.json');
    const parsedResponse = await fetchResponse.json();
    return parsedResponse.data.top_fund_list;
  }

  const handleOnKeyPress = async (e) => {
    if (e.keyCode === 13) {
      if (tempI === 0) {
        messages.push({
          type: "string",
          data: chatText
        });
        messages.push({
          type: "string",
          data: "Hello"
        });
      }
      else if (tempI === 1) {
        var list = await tempFetchFundsList();
        messages.push({
          type: "string",
          data: chatText
        });
        messages.push({
          type: "string",
          data: "Sure Here is the result:"
        });
        messages.push({
          type: "component",
          component: "fundsList",
          data: list.slice(0, 5)
        });
      }
      else {
        var list = await tempFetchFundsList();
        messages.push({
          type: "string",
          data: chatText
        });
        messages.push({
          type: "string",
          data: "Sure Here is the result"
        });
        messages.push({
          type: "component",
          component: "fundCard",
          data: list[2].scheme.details
        });
      }
      setTempI((prevValue) => {
        return prevValue + 1;
      });
      if (tempI === 2) {
        setTempI(0)
      }
      setMessages([...messages]);
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
      <DynamicChatMessages messages={messages} />
    </div>
  )
}