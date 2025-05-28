import React, { useState } from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  const [loading] = useState(true);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="marginTop:'150px'">
      <div className="sweet-loading text-center">
        <HashLoader
          color="#000"
          loading={loading}
          cssOverride={override} // ✅ correct prop for styling
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
