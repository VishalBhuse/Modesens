import React from "react";
import styled from "./filter.module.css";

export const Filters = (props) => {
    // console.log(props.filteritem)
  return (
    <div className={styled.filterbox}>
      {props.filteritem.map((item) => (
        // return (
          <div className={styled.filteritem} key={item}>
            <input type="checkbox" />
            <p>{item}</p>
          </div>
        // );
      )
       )}
    </div>
  );
};
