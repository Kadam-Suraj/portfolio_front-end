import React from "react";
import Hero from "./Container/Hero/Hero";
import Projects from "./Container/Projects/Projects";
import Header from "./Container/Header/Header";

export default function Home({ }) {

  return (
    <>
      <div>
        <Hero />
        <Projects />
      </div>
    </>
  );
}
