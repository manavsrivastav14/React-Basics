import { useState } from "react";
import TextInput from "./TextInput";
import "../App.css";
export default function Validation() {
  const [maxCharacters, setMaxCharacters] = useState();
  const [minCharacters, setMinCharacters] = useState();
  const [specialCharacterLength, setSpecialCharacterLength] = useState();
  const [uppercaseLength, setUppercaseLength] = useState();
  const [lowercaseLength, setLowercaseLength] = useState();
  const [digitLength, setDigitLength] = useState();

  return (
    <div className="input-box-container">
      <input
        type="number"
        placeholder="Enter number for max characters allowed"
        onChange={(event) => setMaxCharacters(event.target.value)}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Enter number for min characters allowed"
        onChange={(event) => setMinCharacters(event.target.value)}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Enter number for uppercase characters allowed"
        onChange={(event) => setUppercaseLength(event.target.value)}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Enter number for lowercase characters allowed"
        onChange={(event) => setLowercaseLength(event.target.value)}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Enter number for digit characters allowed"
        onChange={(event) => setDigitLength(event.target.value)}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Enter number for special characters allowed"
        onChange={(event) => setSpecialCharacterLength(event.target.value)}
        className="input-field"
      />
      <TextInput
        maxCharacters={maxCharacters}
        minCharacters={minCharacters}
        uppercaseLength={uppercaseLength}
        lowercaseLength={lowercaseLength}
        digitLength={digitLength}
        specialCharacterLength={specialCharacterLength}
      />
    </div>
  );
}
