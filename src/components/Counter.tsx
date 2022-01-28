import "./Counter.css";
import { FC, useState } from "react";

type Props = {
  readonly initialValue?: number;
};

export const Counter: FC<Props> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue <= 0 ? 0 : initialValue);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount((c) => ++c)}>+</button>
      <button disabled={!count} onClick={() => setCount((c) => --c)}>
        -
      </button>
    </>
  );
};
