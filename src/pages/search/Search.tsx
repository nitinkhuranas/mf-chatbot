import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";

export default function Search() {
  const [searchText, setSearchText] = useState("");

  let handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setSearchText(lowerCase);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
        onChange={handleOnChange}
        value={searchText}
      />
    </div>
  )
}