import { TextField } from "@mui/material";
import React, { useState } from "react";
import { DefaultBtn } from "../../assets/components.styles";

function ApplicationLetter({ setActiveForm, setActiveModal, setActiveStep }) {
  const [letter, setLetter] = useState("");

  return (
    <div className="application__letter">
      <div className="application__letter-textarea">
        <TextField
          id="outlined-multiline-flexible"
          label="Motivation letter"
          multiline
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          inputProps={{ maxLength: 500 }}
        />
        <p>{letter.length}/500</p>
      </div>
      <div className="application__letter-buttons">
        <DefaultBtn
          onClick={() => {
            setActiveForm(false);
            setActiveStep((prev) => prev - 1);
          }}
          color="transparent"
        >
          Back
        </DefaultBtn>
        <DefaultBtn
          disabled={letter.length > 0 ? false : true}
          onClick={() => setActiveModal("confirm-modal")}
          color="#6875D1"
        >
          Send
        </DefaultBtn>
      </div>
    </div>
  );
}

export default ApplicationLetter;
