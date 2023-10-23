import { useState, useEffect } from "react";
import "../App.css";
export default function TextInput(props) {
  const {
    maxCharacters = 8,
    minCharacters = 3,
    uppercaseLength = 1,
    lowercaseLength = 1,
    digitLength = 1,
    specialCharacterLength = 1,
  } = props;
  const [password, setPassword] = useState("");
  const [maxLengthValidation, setMaxLengthValidation] = useState(true);
  const [minLengthValidation, setMinLengthValidation] = useState(false);
  const [specialCharacterValidation, setSpecialCharacterValidation] =
    useState(false);
  const [digitValidation, setDigitValidation] = useState(false);
  const [lowercaseValidation, setLowercaseValidation] = useState(false);
  const [uppercaseValidation, setUppercaseValidation] = useState(false);

  function checkPassword(input) {
    let uppercaseCount = 0,
      lowercaseCount = 0,
      digitCount = 0,
      specialCharacterCount = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] >= "A" && input[i] <= "Z") {
        uppercaseCount++;
      } else if (input[i] >= "a" && input[i] <= "z") {
        lowercaseCount++;
      } else if (input[i] >= "0" && input[i] <= "9") {
        digitCount++;
      } else {
        specialCharacterCount++;
      }
    }
    if (input !== "") {
      console.log(
        uppercaseCount,
        lowercaseCount,
        digitCount,
        specialCharacterCount,
        input
      );
      input.length > maxCharacters
        ? setMaxLengthValidation(false)
        : setMaxLengthValidation(true);

      input.length >= minCharacters
        ? setMinLengthValidation(true)
        : setMinLengthValidation(false);

      uppercaseCount >= uppercaseLength
        ? setUppercaseValidation(true)
        : setUppercaseValidation(false);

      lowercaseCount >= lowercaseLength
        ? setLowercaseValidation(true)
        : setLowercaseValidation(false);

      specialCharacterCount >= specialCharacterLength
        ? setSpecialCharacterValidation(true)
        : setSpecialCharacterValidation(false);

      digitCount >= digitLength
        ? setDigitValidation(true)
        : setDigitValidation(false);
    } else {
      setMinLengthValidation(false);
      setMaxLengthValidation(true);
      setSpecialCharacterValidation(false);
      setDigitValidation(false);
      setLowercaseValidation(false);
      setUppercaseValidation(false);
    }
  }

  useEffect(() => {
    checkPassword(password);
  }, [
    password,
    maxCharacters,
    minCharacters,
    digitLength,
    specialCharacterLength,
    uppercaseLength,
    lowercaseLength,
  ]);

  function handleChange(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <input
        type="password"
        // onClick={(event) => handleChange(event)}
        onChange={(event) => handleChange(event)}
        value={password}
        placeholder="Enter password"
        className="input-field"
      />
      <h2>{password ? password : "Empty"}</h2>
      {password.length > 0 && (
        <div className="validation-box">
          <h3
            style={maxLengthValidation ? { color: "green" } : { color: "red" }}
          >
            Maximum {maxCharacters} characters
          </h3>
          <h3
            style={minLengthValidation ? { color: "green" } : { color: "red" }}
          >
            Minimum {minCharacters} characters
          </h3>
          <h3 style={digitValidation ? { color: "green" } : { color: "red" }}>
            Minimum {digitLength} digit
          </h3>
          <h3
            style={
              specialCharacterValidation ? { color: "green" } : { color: "red" }
            }
          >
            Minimum {specialCharacterLength} special character
          </h3>
          <h3
            style={uppercaseValidation ? { color: "green" } : { color: "red" }}
          >
            Minimum {uppercaseLength} Uppercase character
          </h3>
          <h3
            style={lowercaseValidation ? { color: "green" } : { color: "red" }}
          >
            Minimum {lowercaseLength} Lowercase character
          </h3>
        </div>
      )}
    </>
  );
}
