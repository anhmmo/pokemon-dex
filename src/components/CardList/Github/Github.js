import React from "react";
import "./Github.css";

function Github() {
  return (
    <div>
      <div className="github-link">
        <a
          href="https://github.com/anhmmo/pokemon-dex"
          title="See Source Codes"
          target="_blank"
          rel="noopener noreferrer"
        >
          See project <i className="fas fa-code" aria-hidden="true"></i> on
          Github
        </a>
      </div>
    </div>
  );
}

export default Github;
