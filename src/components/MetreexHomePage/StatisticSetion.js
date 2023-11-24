import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const StatisticSetion = () => {
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/counter-list`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);
  return (
    <>
      <div id="statistic-1" className="bg-06 statistic-section division">
        <div className="container white-color">
          <div className="row">
            {counter.map((e, index) => (
              <div className="col-sm-6 col-md-3">
                <div
                  className="statistic-block wow fadeInUp"
                  data-wow-delay={`0.${index + 4}s`}
                >
                  <h5 className="statistic-number">
                    <span className="count-element">{e.counterNumber}</span>
                  </h5>
                  <p className="p-md">{e.counterTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticSetion;
