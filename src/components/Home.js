import React from "react";

export const Home = props => {
  return (
    <div id="Home">
      <section>
        <h2>Who Am I?</h2>
        <p> I am a fullstack developer based in Toronto.</p>
        <p>
          I like frontend design, working with clients and users, and security.
        </p>
        <p>I also like hiking, photography, and road trips.</p>
        <p>
          I have a passion for learning, which is why I recently completed the{" "}
          <a
            href="https://www.elearnsecurity.com/certification/ejpt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            elearnSecurity Junior Pentester
          </a>{" "}
          certification.
        </p>
        <p>
          That's also why I will soon be starting the{" "}
          <a
            href="https://www.elearnsecurity.com/certification/ecppt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            elearnSecurity Certified Professional Penetration Tester
          </a>{" "}
          and the{" "}
          <a
            href="https://www.offensive-security.com/information-security-certifications/oscp-offensive-security-certified-professional/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Offensive Security Certified Professional
          </a>{" "}
          certifications.
        </p>
      </section>
      <section>
        <h2>What am I looking for?</h2>
        <p>
          {" "}
          For my next role, I am hoping to find a place where I can continue to
          learn how to write high quality, high performing, and highly
          maintanable code.
        </p>
        <p>
          My highest priority is to find work where I can grow, somewhere I can
          contribute meaningfully both to your company and my career.
        </p>
      </section>
    </div>
  );
};
