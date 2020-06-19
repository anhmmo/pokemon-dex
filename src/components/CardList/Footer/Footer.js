import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        An open-source site by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/anhmmo"
        >
          anhmmo
        </a>
        , redesign from{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://codepen.io/FlorinPop17/full/gOYZxyE"
        >
          Florin Pop
        </a>{" "}
        (Pokedex project){" "}
      </p>
      <p>
        All content is © Copyright of Nintendo, Game Freak, and The Pokémon
        Company. With help from Pokéapi.
      </p>
      <amp-ad
        layout="fixed"
        width="240"
        height="410"
        type="adsense"
        data-ad-client="ca-pub-2089022589281471"
        data-ad-slot="3084328415"
      ></amp-ad>
    </div>
  );
}

export default Footer;
