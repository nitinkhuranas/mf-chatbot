import { ChangeEvent, useState } from "react";
import Textarea from "@mui/material/TextareaAutosize";

export default function Chat() {
  const [chatText, setChatText] = useState("");

  let handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setChatText(lowerCase);
  };

  return (
    <div>
      <Textarea
        minRows={10}
        onChange={handleOnChange}
        value={chatText}
      />
    </div>
  )
}