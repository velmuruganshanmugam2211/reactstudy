import { useMemo, useState, } from "react"

function UseMemohook() {
  const [number, setNumber] = useState(0)

  const computefactorial = (num: number) => {
    console.log("computefactorial is called ")
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
      console.log("computing factorial")
    }
    return result;

  }

  const memorizedfactorial = useMemo(() => computefactorial(number), [number])


  const handleInputChange = (event) => {
    const inputvalue = parseInt(event.target.value)
    setNumber(inputvalue)
  }

  return (
    <>
      <div>useMemohook</div>
      <input type="number" value={number} onChange={handleInputChange} />
      <p>Factorial of {number} is {memorizedfactorial} </p>
    </>
  )
}

export default UseMemohook