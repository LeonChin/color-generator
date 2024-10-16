import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

function ColorList({ colors }) {
  return (
    <section>
      {colors.map((color, index) => {
        return <SingleColor color={color} key={nanoid()} index={index} />;
      })}
    </section>
  );
}

export default ColorList;
