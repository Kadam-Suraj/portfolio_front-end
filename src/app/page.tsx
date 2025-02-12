import React from "react";
import Hero from "./Container/Hero/Hero";
import Projects from "./Container/Projects/Projects";

export default function Home({ }) {

  return (
    <>
      <div className="flex flex-col gap-32">
        <Hero /> 
        <Projects />
      </div>
    </>
  );
}
