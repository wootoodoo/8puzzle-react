import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="alternative-background">
      <a href="https://medium.com/jon-tinkers-with-stuff"><button className="btn btn-dark">Read more at my blog!</button></a>
      <a href="https://wootoodoo.com">
          <button className="btn btn-dark">Return to main site</button></a>
      <p className="footer">Jonathan Lee ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
