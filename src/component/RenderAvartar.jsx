import React from "react";
import { data } from "../../data";

const RenderAvartar = ({ size }) => {
  let count = 1;
  return (
    <>
      <div className="flex mt-3 relative">
        {data &&
          data.map((item, index) => {
            let position = "left-0";
            if (index > 0) {
              position = `left-${index}`;
            }
            if (index + 1 > size && count == 1) {
              count = 0;
              return (
                <span
                  key={item.name}
                  className={`w-[25px] h-[25px] ${position} absolute  text-slate-50 flex items-center justify-center rounded-full bg-orange-400`}
                >
                  +{data.length - size}
                </span>
              );
            } else if (count == 1) {
              return (
                <img
                  key={item.name}
                  className={`w-[25px] h-[25px] ${position} absolute   rounded-full`}
                  src={item.image}
                  alt=""
                />
              );
            }
          })}
      </div>
    </>
  );
};

export default RenderAvartar;
