import React from "react";

const FeedItem = ({ feedImg, feedDate, feedName, feedCopy }) => {
  return (
    <div className="feed">
      <div className="feed-img">
        <img src={feedImg} alt="" />
      </div>
      <div className="feed-date">
        <p>{feedDate}</p>
      </div>
      <div className="feed-name">
        <p>{feedName}</p>
        <span className="feed-copy">{feedCopy}</span>
      </div>
    </div>
  );
};

export default FeedItem;
