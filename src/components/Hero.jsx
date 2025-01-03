import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Hero = ({ mode }) => {
  const [text] = useTypewriter({
    words: [
      "a Frontend Developer.",
      "a React Developer.",
      "and a Java Enthusiast.",
    ],
    loop: 0,
    typeSpeed: 120,
  });

  return (
    <div
      className={
        mode === "dark"
          ? "bg-gradient-to-b from-purple-950 to-slate-950"
          : "bg-gradient-to-b to-red-500 from-violet-600 from-25%"
      }
    >
      <div className="mx-auto max-w-7xl flex items-center justify-center md:justify-between md:flex-row">
        <div className="p-24">
          <p className="text-2xl sm:text-3xl  md:text-4xl font-bold text-slate-100 text-center md:text-start">
            I'm
          </p>
          <p className="text-5xl sm:6xl md:text-7xl  max-w-xl text-white font-extrabold text-center md:text-start">
            Sushan Bajracharya,
          </p>
          <br />
          <div className="text-xl sm:text-2xl md:text-3xl text-center text-slate-100 md:text-start font-mono">
            <span>{text}</span>
            <span>
              <Cursor />
            </span>
          </div>
          <div className="my-4 text-center md:text-start font-medium">
            <Button
              component={Link}
              to={"/projects"}
              variant="contained"
              sx={{
                padding: "0.5rem 1.5rem",
                textTransform: "capitalize",
                fontSize: "1rem",
                background: "#f59e0b",
                color: mode === "dark" ? "#020617" : "#ffffff",
              }}
            >
              View my work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
