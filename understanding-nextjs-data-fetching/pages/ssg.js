import React from "react";
import axios from "axios";

import TimeSection from "../components/timesection";

export default function SSGPage({ dateTime }) {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>SSG Time</h1>
      <main>
        <TimeSection title="SSG" dateTime={dateTime} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://worldtimeapi.org/api/ip");

  return {
    props: { dateTime: res.data.datetime },
  };
};
