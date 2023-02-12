import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pagination.css";
import { GrNext, GrPrevious } from "react-icons/gr";

function Pagination({ page }) {
  const navigate = useNavigate();

  const handlePagination = (value) => {
    if (value == "prev") {
      page <= 1
        ? navigate("/1")
        : navigate(`/${parseInt(page ? page : 1) - 1}`);
    } else {
      navigate(`/${parseInt(page ? page : 1) + 1}`);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePagination("prev")}>
        <GrPrevious />
      </button>
      <p>{page ? page : 1}</p>
      <button onClick={() => handlePagination("next")}>
        <GrNext />
      </button>
    </div>
  );
}

export default Pagination;
