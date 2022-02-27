// react
import React from "react";
// styles
import "./style.css";

const InformationCard = ({ data }) => {
  const info = [
    { title: "Wind Speed", data: data?.wind?.speed },
    { title: "Humidity", data: data?.main?.humidity },
    { title: "Pressure", data: data?.main?.pressure },
  ];

  return (
    <table className="information-card">
      <thead>
        <tr>
          {info.map((item, index) => {
            return (
              <th key={index} className="information-description">
                {item.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          {info.map((item, index) => {
            return (
              <td key={index} className="information-temperature">
                {item.data}
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

export default InformationCard;
