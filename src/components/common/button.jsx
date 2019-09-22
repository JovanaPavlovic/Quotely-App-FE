import React from "react";
import { Link, withRouter } from "react-router-dom";

const ButtonGroup = () => {
  return (
    <div className="btnGroup">
      <Link to={"/postQuote"}>
        <button type="button" className="btn btn-lg btn-outline-info mr-2">
          Post Quote
        </button>
      </Link>
    </div>
  );
};

export default withRouter(ButtonGroup);
