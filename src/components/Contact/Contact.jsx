// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" className="bg-[#00242C] py-16">
//       <div className="max-w-7xl mx-auto px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-12">
//           Contact Me
//         </h2>

//         {/* Contact Form */}
//         <form className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-lg mx-auto">
//           <div className="mb-6">
//             <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
//               placeholder="Your Name"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
//               placeholder="Your Email"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
//               Message
//             </label>
//             <textarea
//               id="message"
//               className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent h-32"
//               placeholder="Your Message"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="bg-accent hover:bg-white text-black font-semibold py-3 px-6 rounded-xl w-full transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;




// import React from "react";
// import { Box, Container, Grid, Typography, TextField, Button, Card, CardContent, IconButton } from "@mui/material";
// import { Email, Phone, LinkedIn, GitHub, Twitter } from "@mui/icons-material"; // MUI Icons

// const Contact = () => {
//   return (
//     <Box id="contact" sx={{ backgroundColor: "#00242C", py: 8 }}>
//       <Container maxWidth="lg">
//         {/* Main Heading */}
//         <Typography
//           variant="h3"
//           sx={{ color: "#00D1FF", fontWeight: "bold", textAlign: "center", mb: 2 }}
//         >
//           Contact Me
//         </Typography>

//         {/* Sub Heading */}
//         <Typography
//           variant="body1"
//           sx={{ color: "gray", textAlign: "center", mb: 6 }}
//         >
//           Feel free to reach out for collaborations or just a friendly hello! 
//         </Typography>

//         {/* Contact Section with Form & Social Links */}
//         <Grid container spacing={6} alignItems="center">
//           {/* Left Side: Contact Form */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ backgroundColor: "rgba(0, 209, 255, 0.1)", p: 4, borderRadius: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
//                   Get in Touch
//                 </Typography>

//                 <TextField
//                   fullWidth
//                   label="Your Name"
//                   variant="outlined"
//                   sx={{ mb: 3, backgroundColor: "#fff", borderRadius: 1 }}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Your Email"
//                   type="email"
//                   variant="outlined"
//                   sx={{ mb: 3, backgroundColor: "#fff", borderRadius: 1 }}
//                 />
//                 <TextField
//                   fullWidth
//                   label="Your Message"
//                   multiline
//                   rows={4}
//                   variant="outlined"
//                   sx={{ mb: 3, backgroundColor: "#fff", borderRadius: 1 }}
//                 />

//                 <Button
//                   variant="contained"
//                   sx={{ backgroundColor: "#00D1FF", color: "black", fontWeight: "bold", py: 1.5 }}
//                   fullWidth
//                 >
//                   Send Message
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Right Side: Contact Info & Social Links */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ backgroundColor: "rgba(0, 209, 255, 0.1)", p: 4, borderRadius: 3 }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
//                   Contact Information
//                 </Typography>

//                 {/* Email */}
//                 <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
//                   <Email sx={{ color: "#00D1FF", mr: 1 }} />
//                   <Typography variant="body1" sx={{ color: "#fff" }}>
//                     example@email.com
//                   </Typography>
//                 </Box>

//                 {/* Phone */}
//                 <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
//                   <Phone sx={{ color: "#00D1FF", mr: 1 }} />
//                   <Typography variant="body1" sx={{ color: "#fff" }}>
//                     +123 456 7890
//                   </Typography>
//                 </Box>

//                 {/* Social Links */}
//                 <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
//                   Connect With Me
//                 </Typography>

//                 <Box display="flex" gap={2}>
//                   <IconButton sx={{ color: "#00D1FF" }} href="https://linkedin.com">
//                     <LinkedIn />
//                   </IconButton>
//                   <IconButton sx={{ color: "#00D1FF" }} href="https://github.com">
//                     <GitHub />
//                   </IconButton>
//                   <IconButton sx={{ color: "#00D1FF" }} href="https://twitter.com">
//                     <Twitter />
//                   </IconButton>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Contact;



/*********final***************** */
import React from "react";
import { Box, Container, Grid, Typography, TextField, Button, Card, CardContent, IconButton } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub, Twitter } from "@mui/icons-material"; // MUI Icons

const Contact = () => {
  return (
    <Box id="contact" sx={{ backgroundColor: "#00242C", py: 8 }}>
      <Container maxWidth="lg">
        {/* Main Heading */}
        <Typography
          variant="h3"
          sx={{ color: "#00D1FF", fontWeight: "bold", textAlign: "center", mb: 2 }}
        >
          Contact Me
        </Typography>

        {/* Sub Heading */}
        <Typography
          variant="body1"
          sx={{ color: "gray", textAlign: "center", mb: 6 }}
        >
          Feel free to reach out for collaborations or just a friendly hello! 
        </Typography>

        {/* Contact Section with Form & Social Links */}
        <Grid container spacing={6} alignItems="center">
          {/* Left Side: Contact Form */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "rgba(0, 209, 255, 0.1)", p: 4, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                  Get in Touch
                </Typography>

                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  sx={{
                    mb: 3,
                    backgroundColor: "rgba(0, 209, 255, 0.1)",
                    border: "1px solid #00D1FF",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { border: "none" },
                      "&:hover fieldset": { border: "none" },
                      "&.Mui-focused fieldset": { border: "none" },
                    },
                    input: { color: "#fff" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  sx={{
                    mb: 3,
                    backgroundColor: "rgba(0, 209, 255, 0.1)",
                    border: "1px solid #00D1FF",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { border: "none" },
                      "&:hover fieldset": { border: "none" },
                      "&.Mui-focused fieldset": { border: "none" },
                    },
                    input: { color: "#fff" },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    mb: 3,
                    backgroundColor: "rgba(0, 209, 255, 0.1)",
                    border: "1px solid #00D1FF",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { border: "none" },
                      "&:hover fieldset": { border: "none" },
                      "&.Mui-focused fieldset": { border: "none" },
                    },
                    input: { color: "#fff" },
                  }}
                />

                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#00D1FF", color: "black", fontWeight: "bold", py: 1.5 }}
                  fullWidth
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side: Contact Info & Social Links */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "rgba(0, 209, 255, 0.1)", p: 4, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                  Contact Information
                </Typography>

                {/* Email */}
                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                  <Email sx={{ color: "#00D1FF", mr: 1 }} />
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    example@email.com
                  </Typography>
                </Box>

                {/* Phone */}
                <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
                  <Phone sx={{ color: "#00D1FF", mr: 1 }} />
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    +123 456 7890
                  </Typography>
                </Box>

                {/* Social Links */}
                <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                  Connect With Me
                </Typography>

                <Box display="flex" gap={2}>
                  <IconButton sx={{ color: "#00D1FF" }} href="https://linkedin.com">
                    <LinkedIn />
                  </IconButton>
                  <IconButton sx={{ color: "#00D1FF" }} href="https://github.com">
                    <GitHub />
                  </IconButton>
                  <IconButton sx={{ color: "#00D1FF" }} href="https://twitter.com">
                    <Twitter />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
