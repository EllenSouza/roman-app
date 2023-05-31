import { useEffect, useState } from "react";
import { int2romanFast, roman2int, validateRoman } from "../../src/roman";

const initValues = {
  int: 1,
  roman: "I",
};

export default function Form() {
  const [input, setInput] = useState({ ...initValues });
  const [isRoman2int, setIsRoman2int] = useState(false);

  useEffect(() => {
    const storage = window.localStorage.getItem("roman-app");
    if (storage) {
      const romanapp = JSON.parse(storage);
      setInput(romanapp);
    }
  }, []);

  function handleChangeInput(event) {
    let result = { ...initValues };
    if (isRoman2int) {
      const inputResult =
        validateRoman(event.target.value).length == 0
          ? roman2int(event.target.value)
          : 0;
      result.int = inputResult;
      result.roman = event.target.value.toUpperCase();
    } else {
      result.int = event.target.value;
      result.roman = int2romanFast(event.target.value);
    }
    setInput(result);
    window.localStorage.setItem("roman-app", JSON.stringify(result));
  }

  return (
    <>
      <button
        className="btn btn-warning mt-4"
        type="button"
        style={{ width: "4rem" }}
        onClick={() => setIsRoman2int(!isRoman2int)}
      >
        <i className="bi bi-arrow-left-right"></i>
      </button>
      <div className="d-flex flex-row">
        <div className="">
          <label htmlFor="input1">{isRoman2int ? "Roman" : "Integer"}</label>
          <input
            id="input1"
            className="mt-2"
            min={1}
            type={isRoman2int ? "text" : "number"}
            value={isRoman2int ? input.roman : input.int}
            onChange={handleChangeInput}
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
            value={isRoman2int ? input.int : input.roman}
          />
        </div>
      </div>
      {isRoman2int && validateRoman(input.roman) && (
        <div className="mt-3 text-danger">
          Você não inseriu um valor romano válido
        </div>
      )}
    </>
  );
}
