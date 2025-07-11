import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="footer footer-horizontal footer-center bg-blue-950 dark:bg-gray-900 text-base-content rounded p-3">
        <nav className="grid grid-flow-col gap-4">
          <NavLink to={'/about'}><div className="link link-hover">About us</div></NavLink>
          <NavLink to={'/contact'}><div className="link link-hover">Contact us</div></NavLink>
          <NavLink to={'/books'}><div className="link link-hover">Bookstore</div></NavLink>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/923172041796"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                className="fill-current"
              >
                <path d="M16.043 2.003c-7.728 0-14 6.272-14 14 0 2.475.65 4.89 1.882 7.026L2 30l7.186-1.879a13.943 13.943 0 0 0 6.857 1.752h.001c7.728 0 14-6.272 14-14s-6.272-14-14-14zm0 25.494a11.457 11.457 0 0 1-5.84-1.575l-.418-.248-4.271 1.116 1.137-4.162-.272-.428a11.44 11.44 0 0 1-1.767-6.109c0-6.327 5.148-11.475 11.475-11.475 6.326 0 11.474 5.148 11.474 11.475 0 6.327-5.148 11.475-11.474 11.475zm6.321-8.617c-.35-.175-2.075-1.025-2.398-1.141-.322-.116-.557-.175-.793.175-.233.35-.91 1.141-1.117 1.375-.207.233-.408.262-.758.087-.35-.175-1.475-.543-2.81-1.731-1.038-.927-1.737-2.072-1.94-2.422-.203-.35-.022-.538.153-.713.158-.158.35-.408.524-.612.175-.203.233-.35.35-.583.117-.233.058-.437-.029-.612-.087-.175-.793-1.912-1.086-2.625-.285-.686-.575-.592-.793-.602-.204-.009-.437-.011-.67-.011s-.612.087-.931.437c-.319.35-1.223 1.193-1.223 2.913s1.251 3.377 1.426 3.612c.175.233 2.458 3.753 5.957 5.26.833.359 1.481.573 1.988.732.835.266 1.595.228 2.197.139.67-.1 2.075-.85 2.368-1.67.291-.82.291-1.522.204-1.67-.087-.146-.32-.233-.67-.408z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://web.facebook.com/profile.php?id=100082089881623&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/abdull-samad-731173344/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.849 0-2.131 1.445-2.131 2.939v5.667h-3.553V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.6 0 4.266 2.368 4.266 5.452v6.288zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.068 0-1.144.924-2.068 2.068-2.068 1.142 0 2.068.924 2.068 2.068 0 1.142-.926 2.068-2.068 2.068zM6.765 20.452H3.908V9h2.857v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.204 24 24 23.227 24 22.271V1.729C24 .774 23.204 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </nav>

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by BookStore company
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
