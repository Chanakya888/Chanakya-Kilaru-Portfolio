import React from "react";
import "../Css/Home.css";
export const HomeComponent = () => {
  return (
    <div className="Agent-summary">
      <div className="Agent-ID">
        <h1>Welcome to Star Trek command center v-22.1.5</h1>
        <h1>Agent name: Chanakya Kilaru</h1>
        <h1>Ship: uss enterprise</h1>
        <h1>Role: designer and developer</h1>
        <h1>
          Contact:{" "}
          <a href="mailto:hello@chanakyakilaru.com ">
            hello@chanakyakilaru.com
          </a>
        </h1>
        <h1>Available for exciting freelance projects</h1>
      </div>
      <div className="Agent-description">
        <p className="Agent-description ">
          Chanakya is one of Star Trek’s finest engineers, he’s a UI/UX designer
          and a computer science engineer. Star Trek admires his passion of
          building apps and experiences.
        </p>
      </div>
    </div>
  );
};
