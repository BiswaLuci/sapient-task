import React from "react";

const Filters = ({ selectedYears, setYear, ...props }) => {
  const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  const lunch = ["true", "false"];
  const land = ["true", "false"];

  return (
    <div className="years">
      <h5>launch year</h5>
      <div className="year-list">
        {years.map((year, index) => {
          return (
            <button
              className={
                "year" + (selectedYears.includes(year) ? " selected-year" : "")
              }
              key={index}
              onClick={(e) => {
               
                props.yearSelected(e, year);
              }}
            >
              {year}
            </button>
          );
        })}
      </div>
      <h5>sucessful launch</h5>
      <div className="year-list">
        {lunch.map((lunch, index) => {
          return (
            <button
              className={
                "year" + (selectedYears.includes(lunch) ? " selected-year" : "")
              }
              key={index}
              onClick={(e) => {
                
                props.lunchSelected(e, lunch);
              }}
            >
              {lunch}
            </button>
          );
        })}
      </div>
      <h5>sucessful land</h5>
      <div className="year-list">
        {land.map((land, index) => {
          return (
            <button
              className={
                "year" + (selectedYears.includes(land) ? " selected-year" : "")
              }
              key={index}
              onClick={(e) => {
                
                props.landSelected(e, land);
              }}
            >
              {land}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
