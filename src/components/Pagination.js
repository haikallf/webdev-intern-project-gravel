import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pagination.css";

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
      <button onClick={() => handlePagination("prev")}>Prev</button>
      <button onClick={() => handlePagination("next")}>Next</button>
    </div>
  );
}

export default Pagination;
