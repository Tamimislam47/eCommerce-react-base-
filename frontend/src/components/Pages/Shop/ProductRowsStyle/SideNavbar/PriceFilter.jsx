import React, { useState } from "react";
import { Slider, RangeSlider } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function PriceFilter() {
  const [value, setValue] = useState(40);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl underline decoration-gray-400 underline-offset-8">
        Price Filter
      </h1>

      <div className="mt-3 w-[80%] ">
        <RangeSlider
          progress
          min={0}
          max={100}
          defaultValue={[10, 50]}
          onChange={(range) => {
            console.log("Range: ", range);
          }}
        />
      </div>
    </div>
  );
}
