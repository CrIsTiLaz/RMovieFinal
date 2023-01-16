import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, Link, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import React, { useState } from "react";
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

export default function Header() {
  const [movie, setMovie] = useState("avatar");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  function handleSubmit(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetch("http://localhost:5000/search=", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        // body: JSON.stringify({
        //   movie,
        // }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("login successful");
            //   window.localStorage.setItem("token", data.data);
            //   window.location.href = "./userDetails";
          }
        });
    }
  }

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
          onChange={(e) => {
            setMovie(e.target.value);
          }}
          onKeyPress={handleSubmit}
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
