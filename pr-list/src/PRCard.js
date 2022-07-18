import React from "react";

const PRCard = ({name, date, issue}) => {

  return(
    <article className="PRCard">
      <h2>{name}</h2>
      <h5>{date}</h5>
      <h4>{issue}</h4>
    </article>
  )

}

export default PRCard