import React from "react";

const Thought = ({ title, bodyCopy1, bodyCopy2, bodyCopy3, index }) => {
  return (
    <div className="think">
      <div className="think-col">
        <div className="think-col-copy">
          <h2 className="think-h2">{title}</h2>
        </div>
        <div className="think-col-copy">
          <p>{bodyCopy1}</p>
          <br />
          <p>{bodyCopy2}</p>
          <br />
          <p>{bodyCopy3}</p>
        </div>
      </div>
      <div className="think-col">
        <h1 className="index-h1">{index}</h1>
      </div>
    </div>
  );
};

export default Thought;
