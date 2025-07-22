import React from "react";

const Award = ({ awardClient, awardCategory, awardYear, awardName }) => {
  return (
    <div className="award">
      <div className="container">
        <div>
          <div>
            <div className="award-client">
              <p>{awardClient}</p>
            </div>
            <div className="award-category">
              <p>{awardCategory}</p>
            </div>
          </div>
          <div className="award-year">
            <p>{awardYear}</p>
          </div>
        </div>
        <div className="award-name">
          <p>{awardName}</p>
        </div>
      </div>
    </div>
  );
};

export default Award;
