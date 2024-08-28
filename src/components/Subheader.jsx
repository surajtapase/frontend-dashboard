// import React from "react";
// import { BsPlus, BsClock, BsThreeDotsVertical, BsArrowRepeat } from "react-icons/bs";

// const Subheader = () => {
//   return (
//     <div>
//         <div className="row">
//             <div className="col-12">
//                 <div className="row text-start">
//                     <div className="col-8 ">
//                         CNAPP Dashboard
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default Subheader;

import React from "react";
import { BsPlus, BsClock, BsThreeDotsVertical, BsArrowRepeat } from "react-icons/bs";

const Subheader = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", borderRadius: "8px", marginBottom: "20px", padding: "20px" }}>
      <div className="row align-items-center">
        <div className="col-md-3 text-start">
          <h4 style={{ margin: "0", fontWeight: "600" }}>CNAPP Dashboard</h4>
        </div>
        <div className="col-md-9 d-flex justify-content-end">
          <button className="btn btn-light mr-2 d-flex align-items-center mr-1">
            <BsPlus className="mr-1" /> Add Widget
          </button>
          <button className="btn btn-light mr-2">
            <BsArrowRepeat />
          </button>
          <button className="btn btn-light mr-2">
            <BsThreeDotsVertical />
          </button>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <BsClock className="mr-1" /> Last 2 days
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">Last 2 days</a>
              <a className="dropdown-item" href="/">Last week</a>
              <a className="dropdown-item" href="/">Last month</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subheader;
