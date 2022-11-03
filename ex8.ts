import "typeface-roboto";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";

export default function App() {
    return (
        <FormGroup style={{ width: 200, margin: 10 }}>
        <MyTextInput />
        <MySelect />
        </FormGroup>
    );
}


import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function MyTextInput() {
  const [value, setValue] = useState("");

  return (
     <TextField
        label="Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        margin="normal"
     />
   );
}



import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MySelect() {
    const [value, setValue] = useState("first");

    return (
        <FormControl>
            InputLabel htmlFor="my-select">My Select</InputLabel>
            <Select
              value={value}
              onChange={(e) =>setValue(e.target.value)}
              inputProps={{ id: "my-select" }}
            >
             <MenuItem value="first">First</MenuItem>
             <MenuItem value="second">Second</MenuItem>
             <MenuItem value="third">Third</MenuItem>
            </select>
        </FormControl>
    );
}



