import React from 'react';

function BookProgressMeter() {
  return (
    <div className="circleContainer">
      <div className="clearfix">
        <div className="c100 p64 small">
          <div className="slice">
            <div className="bar"> </div>
            <div className="fill"> </div>
          </div>
        </div>
      </div>
      <div className="percentageInfo">
        <span className="percentage">64%</span>
        <p className="status">Completed</p>
      </div>
    </div>
  );
}

export default BookProgressMeter;
