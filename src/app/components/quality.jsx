import React from "react";

const Quality = (props) => {
  const { qualities } = props;

  return (
    <>
      {qualities.map((quality) => (
        <span key={quality._id} className={`badge p-2 m-1 bg-` + quality.color}>
          {quality.name}
        </span>
      ))}
    </>
  );
};

export default Quality;
