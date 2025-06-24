// // import React from "react";
// // import { Chip } from "@mui/material";

// // const Chips = ({ label, onClick, selected }) => {
// //   return (
// //     <Chip
// //       label={label}
// //       onClick={() => onClick(label)}
// //       sx={{
// //         m: 1,
// //         px: 2,
// //         py: 0.5,
// //         fontSize: "14px",
// //         cursor: "pointer",
// //         backgroundColor: selected ? "#00D1FF" : "#004e5f",
// //         color: selected ? "black" : "#00D1FF",
// //         "&:hover": {
// //           backgroundColor: "#00D1FF",
// //           color: "black",
// //         },
// //       }}
// //     />
// //   );
// // };

// // export default Chips;

// import React from "react";
// import { Chip } from "@mui/material";
// import RestartAltIcon from "@mui/icons-material/RestartAlt"; // ✅ Icon

// const Chips = ({ label, onClick, selected, reset }) => {
//   return (
//     <Chip
//       label={label}
//       onClick={() => onClick(label)}
//       icon={reset ? <RestartAltIcon sx={{ color: "white" }} /> : null}
//       sx={{
//         m: 1,
//         px: 2,
//         py: 0.5,
//         backgroundColor: selected ? "#00D1FF" : "#004e5f",
//         color: selected ? "black" : "#00D1FF",
//         fontSize: "14px",
//         cursor: "pointer",
//         "&:hover": {
//           backgroundColor: "#00D1FF",
//           color: "black",
//         },
//       }}
//     />
//   );
// };

// export default Chips;


import React from "react";
import { Chip } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Chips = ({ label, onClick, selected, reset }) => {
  return (
    <Chip
      label={label}
      onClick={() => onClick(label)}
      icon={reset ? <RestartAltIcon sx={{ color: "white" }} /> : null}
      sx={{
        m: 1,
        px: 2,
        py: 0.5,
        backgroundColor: reset
          ? "#FF5252" // red for reset
          : selected
          ? "#00D1FF"
          : "#004e5f",
        color: reset
          ? "white"
          : selected
          ? "black"
          : "#00D1FF",
        fontSize: "14px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: reset
            ? "#FF6B6B"
            : "#00D1FF",
          color: reset ? "#fff" : "black",
        },
      }}
    />
  );
};

export default Chips;
