import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  // Uppercase Conversion Function.
  const onClickUppercase = () => {
    let uppercase = text.toUpperCase();
    setText(uppercase);
    props.showAlert("Converted into uppercase", "success");
  };

  // Lowercase conversion Function.
  const onClickLowercase = () => {
    let lowercase = text.toLowerCase();
    setText(lowercase);
    props.showAlert("Converted into lowercase", "success");
  };

  // Captilize Conversion Function.
  const onClickCapitalize = () => {
    let text2 = text.toLowerCase();
    let arrayString = text2.split(" ");
    let outputString = "";
    for (let word of arrayString) {
      if (word !== "") {
        let newWord = word[0].toUpperCase() + word.slice(1);
        outputString += newWord + " ";
      }
    }
    setText(outputString);
    props.showAlert("Coverted into capatalize ", "success");
  };

  // remove Extra Spaces from text
  const onClickRemoveSpaces = () => {
    let arrayString = text.split(" ");

    let outputString = "";
    for (let word of arrayString) {
      if (word !== "") {
        outputString += word + " ";
      }
    }
    setText(outputString);
    props.showAlert("Removed extra spaces", "success");
  };

  // to copy the text from clipboard
  const onClickHandleCopy = () => {
    // let text = document.getElementById("myText");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("text copied", "success");
  };

  const noOfLetters = () => {
    let count = 0;
    for (let letter of text) {
      if (letter !== " ") {
        count++;
      }
    }
    return count;
  };

  const noOfWords = () => {
    let stringArray = text.split(" ");
    if (stringArray[0] === "") {
      return 0;
    } else {
      let count = 0;
      for (let word of stringArray) {
        if (word !== "") {
          count++;
        }
      }
      return count;
    }
  };

  return (
    <div
      className="container"
      style={props.mode === "light" ? { color: "black" } : { color: "white" }}
    >
      <h3 className="mb-2 mt-2">Please Enter The Text</h3>
      <textarea
        style={
          props.mode === "light"
            ? {
                color: "black",
                backgroundColor: "white",
                borderColor: "black",
              }
            : {
                color: "white",
                backgroundColor: "grey",
                borderColor: "white",
              }
        }
        id="myText"
        className="text-area"
        value={text}
        rows={10}
        cols={100}
        onChange={onChangeText}
        placeholder="Enter Text Here"
      />
      <div>
        <button
          disabled={text.length === 0}
          className="btn btn-danger"
          onClick={onClickUppercase}
        >
          Convert Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-2"
          onClick={onClickLowercase}
        >
          Convert Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-2"
          onClick={onClickCapitalize}
        >
          Convert Capitalize
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2"
          onClick={onClickRemoveSpaces}
        >
          Remove Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-dark mx-2"
          onClick={onClickHandleCopy}
        >
          Copy The Text
        </button>
      </div>
      <p className="mt-2">Number of Letters = {noOfLetters()}</p>
      <p>Number of Words = {noOfWords()}</p>
      <h5 className="mb-1">Preview</h5>
      <p
        className={
          props.mode === "light" ? { color: "black" } : { color: "white" }
        }
      >
        {text.length === 0 ? "Your Preview Here" : text}
      </p>
    </div>
  );
};

export default TextForm;
