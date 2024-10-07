import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, IconButton, Box } from '@mui/material';
import { Send as SendIcon, Mail as MailIcon, Phone as PhoneIcon, LocationOn as LocationOnIcon } from '@mui/icons-material';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5e5f8b16-5beb-448c-af7a-197d7882e65f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Send Message
            </Typography>
            <Typography variant="body1" paragraph>
              Gaaffii yaada qabdaan kan gaddii kan irraatti bilisaan dhuheefachuu dandessuu
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <IconButton color="primary" aria-label="email">
                  <MailIcon />
                </IconButton>
                <Typography variant="body2" component="span">
                  aastufocus@gmail.com
                </Typography>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <IconButton color="primary" aria-label="phone">
                  <PhoneIcon />
                </IconButton>
                <Typography variant="body2" component="span">
                  +251X **** ****
                </Typography>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <IconButton color="primary" aria-label="location">
                  <LocationOnIcon />
                </IconButton>
                <Typography variant="body2" component="span">
                  Qaliti, Finfinee, Ethiopia
                </Typography>
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Maqaa keessan"
                    name="name"
                    placeholder="Maqaa Keesan galchaa"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Lakkoofsa Bilbilaa Keessan"
                    name="phone"
                    type="tel"
                    placeholder="Lakkoofsa bilbila keesan galchaa"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Ergaa ykn yaada Qabdaan"
                    name="message"
                    multiline
                    rows={4}
                    placeholder="Yaada Qabdaan"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                  >
                    Ammaa Ergi
                  </Button>
                </Grid>
              </Grid>
            </form>
            {result && (
              <Typography variant="body1" color="textSecondary" align="center" sx={{ mt: 2 }}>
                {result}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
