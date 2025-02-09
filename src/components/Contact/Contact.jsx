import React from "react";
import { Box, Container, Grid, Typography, TextField, Button, Card, CardContent, IconButton } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub, Twitter, Facebook } from "@mui/icons-material";

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

        {/* Contact Section */}
        <Grid container spacing={6} alignItems="center">
          {/* Contact Form */}
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

          {/* Contact Info & Social Links */}
          <Grid item xs={12} md={6}>
            <Card sx={{ backgroundColor: "rgba(0, 209, 255, 0.1)", p: 4, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                  Contact Information
                </Typography>

                {/* Email */}
                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                  <Email sx={{ color: "#00D1FF", mr: 1 }} />
                  <Typography
                    variant="body1"
                    sx={{ color: "#fff" }}
                    component="a"
                    href="mailto:kasi21.12.2000@gmail.com"
                    style={{ textDecoration: "none" }}
                  >
                    kasi21.12.2000@gmail.com
                  </Typography>
                </Box>

                {/* Phone */}
                <Box display="flex" alignItems="center" sx={{ mb: 4 }}>
                  <Phone sx={{ color: "#00D1FF", mr: 1 }} />
                  <Typography
                    variant="body1"
                    sx={{ color: "#fff" }}
                    component="a"
                    href="tel:+917586012413"
                    style={{ textDecoration: "none" }}
                  >
                    +91 7586012413
                  </Typography>
                </Box>

                {/* Social Links */}
                <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                  Connect With Social Media
                </Typography>

                <Box display="flex" gap={2}>
                  <IconButton sx={{ color: "#00D1FF" }} href="www.linkedin.com/in/kasinath-mandal-a5a6621ba" target="_blank">
                    <LinkedIn />
                  </IconButton>
                  <IconButton sx={{ color: "#00D1FF" }} href="https://github.com/kasinath2000" target="_blank">
                    <GitHub />
                  </IconButton>
                  <IconButton sx={{ color: "#00D1FF" }} href="https://www.facebook.com/kasinath.mandal.58/" target="_blank">
                    <Facebook />
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
