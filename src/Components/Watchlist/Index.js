import * as React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Context as AuthContext } from "../../context/AuthContext";
import { CardActions } from "@mui/material";
import Navbar from "./navbar";

const theme = createTheme();

export default function SignUp() {
  const history = useHistory();
  const goToPage = React.useCallback((page) => history.push(`/${page}`), [history]);
  const { signup, state } = React.useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const email = data.get("email");
    const password = data.get("password");
    const phone = data.get("phone");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const confirmPassword = data.get("confirmPassword");

    const isSignedIn = await signup({
      email,
      password,
      confirmPassword,
      phone,
      firstName,
      lastName,
    });

    if (isSignedIn) goToPage("confirm");
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container component="main" maxWidth="sm" style={{ marginTop: 30 }}>
        <CssBaseline />

        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {state.errorMessage ? (
            <Typography style={{ color: "red" }}>{state.errorMessage}</Typography>
          ) : null}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                />
              </Grid>
            </Grid>

            <CardActions>
              <Button size="small" color="primary" type="submit">
                Sign up
              </Button>
            </CardActions>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
