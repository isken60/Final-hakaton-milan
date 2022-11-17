import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <Box
          px={{ xs: 5, sm: 5 }}
          py={{ xs: 5, sm: 5 }}
          bgcolor="black"
          color="white">
          <Container maxWidth="lg">
            <Grid
              className="footer-hover"
              container
              spacing={5}
              style={{ textAlign: "center" }}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  Контакты
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    +39-5729082-008
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Италия, г. Милан, ул. Данте 201
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    График работы: c 10:00 - 21:00
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  Информация
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Доставка
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    О нас
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Новости клуба
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  Категории
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Легенды клуба
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Curva Sud
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Жизнь клуба вне поля
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Grid>
              <img
                src="https://icdn.sempremilan.com/wp-content/uploads/2020/04/pumaxmilan.jpg"
                alt="logo"
                style={{
                  width: "200px",
                  display: "flex",
                  margin: "20px auto",
                }}
              />
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 0, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}>
              <TelegramIcon />
              <WhatsAppIcon />
              <InstagramIcon />
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
