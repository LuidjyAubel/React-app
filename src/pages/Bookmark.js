import React from "react";
import { Counter } from "../features/counter/Counter";

const Book = React.memo(() => {
    return (
      <div>
        <Counter></Counter>
      </div>
    );
  });

  export default Book;