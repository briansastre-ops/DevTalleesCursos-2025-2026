import React from "react";

interface Props {
  title: string;
  descrption?: string;
}

const CustomHeader = ({ title, descrption }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {descrption && <p>{descrption}</p>}
    </div>
  );
};

export default CustomHeader;
