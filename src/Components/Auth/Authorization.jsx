import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useContext } from "react";
import { authContext } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Authorization = () => {
  const {
    email,
    user,
    password,
    emailError,
    passwordError,
    hasAccount,
    setEmail,
    setPassword,
    setHasAccount,

    handleLogin,
    handleLogout,
    handleSignUp,
  } = useContext(authContext);

  const navigate = useNavigate();

  const signIn = () => {
    handleLogin();
    navigate("/");
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ backgroundColor: "white" }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          {hasAccount ? (
            <Typography component="h1" variant="h5">
              Вход по почте
            </Typography>
          ) : (
            <Typography component="h1" variant="h5">
              Регистрация
            </Typography>
          )}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Адрес электронной почты"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <span>{passwordError}</span>
            <span>{emailError}</span>
            {hasAccount ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={signIn}>
                Войти
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSignUp}>
                Зарегистрироваться
              </Button>
            )}

            <Grid container>
              <Grid item>
                {hasAccount ? (
                  <Link
                    onClick={() => setHasAccount(!hasAccount)}
                    href="#"
                    variant="body2">
                    {"Нет аккаунта? Зарегистрируйтесь!"}
                  </Link>
                ) : (
                  <Link
                    onClick={() => setHasAccount(!hasAccount)}
                    href="#"
                    variant="body2">
                    {"У Вас уже есть аккаунт? Входите!"}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Authorization;
