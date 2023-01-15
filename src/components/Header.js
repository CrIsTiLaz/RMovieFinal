import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, Link, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import React from "react";
import Person from "@mui/icons-material/Person";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

// import { ReactComponent as Logo } from '../img/logo.svg'
// import { MenuHeader } from 'react-icons/fa';

const SearchIconWhite = () => {
  return <SearchIcon sx={{ color: "#b01a4d" }}></SearchIcon>;
};

const LiveTvIconBig = () => {
  return <LiveTvIcon sx={{ fontSize: "55px", color: "black" }}></LiveTvIcon>;
};
const LoginIcon = () => {
  return (
    <Button key={"sm"} size={"sm"} startDecorator={<Person />}>
      Login{" "}
    </Button>
  );
};
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  console.log(query); //"app=article&act=news_content&aid=160990"
  var vars = query.split("&");
  console.log(vars); //[ 'app=article', 'act=news_content', 'aid=160990' ]
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    console.log(pair); //[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ]
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

export default function Header() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        background: "linear-gradient(135deg, #374049 50%, #495159 50%);",
        padding: "10px 30px 10px 50px",
        font: "Source Sans Pro,sans-serif",
        boxShadow: "5px 5px black",
      }}
    >
      <Grid item>
        <Link href="/" style={{ textDecoration: "none" }}>
          {/* <Image width={108} height={60} alt=" " src={RMovie} /> */}
          <LiveTvIconBig></LiveTvIconBig>
          <Typography
            sx={{ fontSize: "15px", color: "#b01a4d", font: "Monaco" }}
          >
            RMovie
          </Typography>
        </Link>
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <Link href="/login">
          <LoginIcon></LoginIcon>
        </Link>
      </Grid>
      <Grid item>
        <Input
          key={"sm"}
          size={"sm"}
          //   onChange={(e) => e}
          startDecorator={<SearchIconWhite></SearchIconWhite>}
          placeholder="Search movie..."
        />
      </Grid>
      <Link href={"/contact"}>
        <button className="background-color: rgb(176, 26, 77); text-white py-3 px-6 rounded text-sm mt-4">
          CONTACT US
        </button>
      </Link>
    </Grid>
  );
}
