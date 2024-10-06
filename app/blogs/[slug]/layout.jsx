import React from "react";
import Sideber from "./_comp/sideber";

const layout = ({ children }) => {
  return (
    <main className="md:container md:mx-auto">
      <div className="flex flex-row gap-3 max-sm:flex-col">
        <Sideber />
        <div className="max-sm:p-5">{children}</div>
      </div>
    </main>
  );
};

export default layout;
