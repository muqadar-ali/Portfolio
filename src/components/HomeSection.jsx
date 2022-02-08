import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Social from "./Social";
import Hidden from "@material-ui/core/Hidden";
import Zoom from "@material-ui/core/Zoom";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  section: {
    height: "90vh",
    position: "relative",
  },
  content: {
    height: "100%",
    zIndex: 100,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
  },
  heroImage: {
    height: "100%",
    width: "50%",
    zIndex: 1,
  },
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
  return (
    <Paper className={styles.section} id="about">
      <StaticImage
        className={styles.heroImage}
        src="../images/profile.jpg"
        alt=""
        style={{ position: "absolute" }}
      />
      <div className={styles.overlay}></div>
      <Container className={styles.container} maxWidth="md">
        <Grid
          className={styles.content}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="h1" variant="h3">
                Hello, MY NAME IS MUQADAR ALI JAMALI.
              </Typography>
              <Typography variant="h5">
                I build websites, web applications and responsive user
                interfaces. I create educational video content on Youtube.
              </Typography>
              <Box my={2}>
                <Button
                  href="mailto:address@email.com"
                  variant="outlined"
                  color="secondary"
                >
                  Get in Touch!
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Hidden xsDown>
            <Grid item>
              <Social direction="column" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
}
