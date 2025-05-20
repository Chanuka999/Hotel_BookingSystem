import React, { useState } from "react";
import { HashLoader } from "react-spinners";
const Loader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div>
      <div className="sweet-loading">
        <HashLoader
          color="#000"
          loading={loading}
          CSSProperties=""
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
