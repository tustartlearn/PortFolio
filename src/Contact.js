import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, Snackbar, Alert } from "@mui/material";

function Contact() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1aecaabb-fa11-4745-ab29-48f333f2c850");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Send form data to the API
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    // If successful, show snackbar and clear the form
    if (res.success) {
      setOpenSnackbar(true);
      setFormValues({ name: '', email: '', message: '' }); // Reset form fields
    }
  };

  // Close the success snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, backgroundColor: '#F5F7F8', padding: 4, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Contact Us
      </Typography>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 4,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'transparent',
          }}
        >
          {/* Name Input */}
          <TextField
            label="Your Name"
            variant="outlined"
            name="name"
            required
            fullWidth
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
            sx={{
              input: { color: '#333' }, // Set input text color
              label: { color: '#333' }, // Set label color
            }}
          />
          
          {/* Email Input */}
          <TextField
            label="Your Email"
            variant="outlined"
            type="email"
            name="email"
            required
            fullWidth
            value={formValues.email}
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            sx={{
              input: { color: '#333' }, // Set input text color
              label: { color: '#333' }, // Set label color
            }}
          />
          
          {/* Message Input */}
          <TextField
            label="Your Message"
            variant="outlined"
            name="message"
            required
            multiline
            rows={4}
            fullWidth
            value={formValues.message}
            onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
            sx={{
              input: { color: '#333' }, // Set input text color
              label: { color: '#333' }, // Set label color
            }}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              padding: "12px 24px",
              fontSize: "1rem",
              alignSelf: "flex-start",
            }}
          >
            Submit
          </Button>
        </Box>
      </form>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Close after 3 seconds
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;
