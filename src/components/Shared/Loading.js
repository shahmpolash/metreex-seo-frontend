import React from "react";

const Loading = () => {
  return (
    <>
      <div id="loader-wrapper">
        <div id="loading">
          <div id="loading-center">
            <div id="loading-center-absolute">
              <div className="object" id="object_four" />
              <div className="object" id="object_three" />
              <div className="object" id="object_two" />
              <div className="object" id="object_one" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
