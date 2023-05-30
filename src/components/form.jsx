import { int2romanFast } from "../../src/roman";
import { useState } from "react";

export default function Form() {
  const [labelInput1, setLabelInput1] = useState("Integer");
  const [labelInput2, setLabelInput2] = useState("Roman");
  const [typeInput1, setTypeInput1] = useState("number");
  const [typeInput2, setTypeInput2] = useState("text");
  const [isRoman2int, setIsRoman2int] = useState(true);
  const [valueInput1, setValueInput1] = useState(0);
  const [valueInput2, setValueInput2] = useState(0);

  //change the conversion
  function handleClick() {
    if (isRoman2int) {
      setLabelInput1("Roman");
      setLabelInput2("Integer");
      setIsRoman2int(false);
      setTypeInput1("text");
      setTypeInput2("number");
    } else {
      setLabelInput1("Integer");
      setLabelInput2("Roman");
      setIsRoman2int(true);
      setTypeInput2("text");
      setTypeInput1("number");
    }
    
    setValueInput1(valueInput2);
    setValueInput2(valueInput1);
    console.log(isRoman2int);
  }
  function handleChangeNumber(event) {
    setValueInput1(event.target.value);
    setValueInput2(int2romanFast(event.target.value));
  }

  return (
    <>
      <h5 className="mt-4">roman conversor</h5>

      <button className="btn btn-secondary" type="button">
        <i className="bi bi-arrow-left-right" onClick={handleClick}></i>
      </button>
      <br />
      <div className="row">
        <div className="">
          <label htmlFor="input1">{labelInput1}</label>
          <input
            className="mt-2"
            id="input1"
            type={typeInput1}
            placeholder={labelInput1}
            value={valueInput1}
            onChange={handleChangeNumber}
          />
        </div>
        =
        <div>
          <label htmlFor="input2">{labelInput2}</label>
          <input
            id="input2"
            type={typeInput2}
            placeholder={labelInput2}
            disabled={true}
            value={valueInput2}
          />
        </div>
      </div>
    </>
  );
}
