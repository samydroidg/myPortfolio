import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://www.github.com/samydroidg" target="_blank" className="w-1/2 h-1/2">
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/gouravojha01" target="_blank" className="w-1/2 h-1/2">
            <img src="/assets/linkedin.svg" alt="twitter" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/samydroid_gmr/" target="_blank" className="w-1/2 h-1/2">
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
      <p className="text-white-500">&copy; 2024 Gourav, All rights reserved</p>
    </section>
  );
};

export default Footer;
