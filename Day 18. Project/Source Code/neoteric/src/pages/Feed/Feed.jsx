import React from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import transition from "../../transition";

import FeedItem from "../../components/FeedItem/FeedItem";

// content
import feeds from "../../data/feeds.json";

// helper function
const renderFeeds = (start, end) => {
  return feeds.feeds
    .slice(start, end)
    .map((feed, index) => (
      <FeedItem
        key={index}
        feedImg={feed.img}
        feedDate={feed.date}
        feedName={feed.name}
        feedCopy={feed.copy}
      />
    ));
};

const Feed = () => {
  return (
    <div className="feed-wrapper">
      <div className="divider"></div>
      <div className="container">
        <div className="feed-section">
          <div className="work-section-header">
            <div className="section-header-title">
              <h1 className="section-title">Feed</h1>
            </div>
            <div className="section-header-copy">
              <p>
                <Link to="/" id="a-underline">
                  Back
                </Link>
              </p>
              <p>({feeds.feeds.length})</p>
            </div>
          </div>

          <div className="feeds">
            <div className="row">{renderFeeds(0, 2)}</div>
            <div className="row">{renderFeeds(2, 4)}</div>
          </div>
          <div className="feeds">
            <div className="row">{renderFeeds(4, 6)}</div>
            <div className="row">{renderFeeds(6, 8)}</div>
          </div>
          <div className="feeds">
            <div className="row">{renderFeeds(8, 10)}</div>
            <div className="row">{renderFeeds(10, 12)}</div>
          </div>
          <div className="feeds">
            <div className="row">{renderFeeds(12, 14)}</div>
            <div className="row">{renderFeeds(14, 16)}</div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <Footer />
    </div>
  );
};

export default transition(Feed);
