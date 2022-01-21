import "./Counter.css";
import {FC, useState} from "react";

type Props = {
  readonly value: number;
}

export const Counter: FC<Props> = ({value}) => {
  const [clicked, setClicked] = useState(!!value);

  return <>
    Count: {clicked ? 1 : 0}
    <button onClick={() => setClicked(true)}>+</button>
    <button disabled={!clicked} onClick={() => setClicked(false)}>-</button>
  </>;
}
