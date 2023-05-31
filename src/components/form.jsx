import { useState } from "react";
import { int2romanFast, roman2int, validateRoman } from "../../src/roman";

const initValues = {
  int: 0,
  roman: "",
};

export default function Form() {
  const [input, setInput] = useState({ ...initValues });
  const [inputResult, setInputResult] = useState("");
  const [isRoman2int, setIsRoman2int] = useState(false);

  //change the conversion
  function handleClick() {
    console.log(isRoman2int, input);
    setIsRoman2int(!isRoman2int);
    setInput(initValues);
    setInputResult("");
  }

  function handleChangeNumber(event) {
    try {
      if (isRoman2int) {
        setInput((prev) => ({ ...prev, roman: event.target.value }));
        if (validateRoman(event.target.value).length == 0)
          setInputResult(roman2int(event.target.value));
        else {
          setInputResult(0);
          alert(`Invalid Roman: ${event.target.value.toUpperCase()}`);
        }
      } else {
        setInput((prev) => ({ ...prev, int: event.target.value }));
        setInputResult(int2romanFast(event.target.value));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button
        className="btn btn-secondary"
        type="button"
        style={{ width: "4rem" }}
      >
        <i className="bi bi-arrow-left-right" onClick={handleClick}></i>
      </button>
      <br />
      <div className="d-flex flex-row">
        <div className="">
          <label htmlFor="input1">{isRoman2int ? "Roman" : "Integer"}</label>
          <input
            id="input1"
            className="mt-2"
            type={isRoman2int ? "text" : "number"}
            value={isRoman2int ? input.roman : input.int}
            onChange={handleChangeNumber}
            style={{ width: "8rem" }}
          />
        </div>
        <div className="d-flex align-items-end"> = </div>
        <div>
          <label htmlFor="input2">{!isRoman2int ? "Roman" : "Integer"}</label>
          <input
            id="input2"
            className="mt-2"
            disabled={true}
            value={inputResult}
          />
        </div>
      </div>
    </>
  );
}
