import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1477016257341923331"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="amrmohmeedd"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/amrmuhmedd"}
          options={{ text: "#reactjs is awesome", via: "amrmohmeedd" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
