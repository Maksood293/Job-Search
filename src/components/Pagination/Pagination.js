import React from "react";
import { Button } from "../Button/Button";
import "./Pagination.scss";
import Prev from "../../assets/Prev.svg";
import Next from "../../assets/Nex.svg";

export const Pagination = ({ pageNumber, setPageNumber }) => {
  return (
    <div className="pagination">
      <img
        src={Prev}
        alt="prev"
        onClick={
          pageNumber > 1 ? () => setPageNumber((prev) => prev - 1) : null
        }
      />
      <Button variant="light">{pageNumber}</Button>
      <img
        src={Next}
        alt="next"
        onClick={() => setPageNumber((prev) => prev + 1)}
      />
    </div>
  );
};
