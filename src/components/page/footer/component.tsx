import React from "react";

const Footer = (): React.ReactElement => {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li>
          <a href="https://github.com/katrynmc">Github</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/katrynmcintosh">LinkedIn</a>
        </li>
        <li>
          <a href="https://twitter.com/katrynmcintosh">Twitter</a>
        </li>
        <li>
          <a href="https://instagram.com/katrynmcintosh">Instagram</a>
        </li>
      </ul>
      <div>
        <a className="email" href="mailto:katryn.mcintosh@gmail.com">
          EMAIL ME
        </a>
      </div>
    </footer>
  );
};

export default Footer;
