// install these dependencies
// npm install @material-ui/core
// npm install @material-ui/icons
// npm install @material-ui/core
import React from "react";
import Button from "@material-ui/core/Button";

const App = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        width: 400,
        flexWrap: "wrap",
      }}
    >
      <div style={{ width: "100%", float: "left" }}>
        <h3>quadsquad.me</h3> <br />
      </div>
      <Button
        style={{ margin: "auto" }}
        onClick={() =>
          openInNewTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        }
        variant="contained"
        color="primary"
      >
        Connor
      </Button>
      <Button
        style={{ margin: "auto" }}
        onClick={() =>
          openInNewTab("https://www.youtube.com/watch?v=KVAW9RUTfJM")
        }
        variant="contained"
        color="primary"
      >
        Christian
      </Button>
      {/* <Button style = {{margin: 'auto'}} onClick={() => openInNewTab('https://trashloop.com/')} variant="contained" color="secondary">
         Summoner's Rift
        </Button> */}
      <Button
        style={{ margin: "auto" }}
        onClick={() => openInNewTab("http://endless.horse/")}
        variant="contained"
        color="primary"
      >
        Darren
      </Button>
      <Button
        style={{ margin: "auto" }}
        onClick={() =>
          openInNewTab("https://www.wikihow.com/Avoid-Becoming-a-Weeaboo")
        }
        variant="contained"
        color="primary"
        href="#"
      >
        Jack
      </Button>
    </div>
  );
};

export default App;
