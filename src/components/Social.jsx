import React from "react";
import GithubIcon from "@material-ui/icons/Github";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";

const socialItems = [
  { icon: GithubIcon, url: "https://github.com/muqadar-ali", name: "github" },
  { icon: FacebookIcon, url: "https://web.facebook.com/muqadarali.jamali.7", name: "facebook" },
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/muqadar-ali-jamali/", name: "linkedin" },
];

export default function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url}>
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
