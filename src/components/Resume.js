import React from "react";

export const Resume = props => {
  return (
    <div id="Resume">
      <section>
        <h2>Work Experience</h2>
        <p>
          <b>Full Stack Developer</b> at Atos Syntel, Toronto ON, April
          2018-Present
        </p>
        <ul>
          <li>
            Developed proof of concept apps to help determine the feasibility of
            switching from Angular, Spring Boot, MySQL, and REST to React,
            Node.js, NoSQL, and GraphQL.
          </li>
          <li>
            Business relied on passed around Excel sheet, causing confusion
            regarding changes and non validated data. Built a CRUD app to
            replace Excel sheet in collaboration with clients and another
            developer, using React, Redux, REST, Spring Boot, and PCF following
            Agile methodology.
          </li>
          <li>
            Replaced legacy ASP.NET app with new Spring Boot, React, Redux, PCF
            app, enhancing performance,  validation, visual appeal, and
            maintainability
          </li>
        </ul>
        <p>
          <b>Intern</b> at Data Sentry, Dallas, TX, May - August 2017
        </p>
        <ul>
          <li>
            Assisted in the development and design of prep courses for the CEH
            and CISSP exams, which included preparing hundreds of slides from
            the source material, creating sample test questions, data entry, and
            audio editing.
          </li>
          <li>
            Helped in the assembly, testing, and updating of refurbished servers
          </li>
          <li>Worked locally and remotely, with guidance and independently.</li>
        </ul>
        <p>
          <b>Research Assistant</b> at Ryerson University, Toronto ON, May 2016
          - May 2017
        </p>
        <ul>
          <li>
            Built a virtual reality app with Unity and C# that allowed users to
            view a 360 documentary together on Gear VR.
          </li>
          <li>
            Designed and developed an app that allowed test subjects to explore
            a virtual room and be tested on their recall.{" "}
          </li>
          <li>
            Built two apps, one for users and one for guides, users experience
            360 videos while guides managed the videos.
          </li>
          <li>
            Worked locally with other developers, artists, user experience
            designers, test subjects, customers, etc.
          </li>
        </ul>
        <p>
          <b>Intern</b> at PerfectMail AntiSpam Solutions, Brampton ON, January
          - March 2016 - May 2017
        </p>
        <ul>
          <li>
            Implemented Charts.js to automatically create and display multiple
            types of graphs populated with data from text files to allow clients
            to analyze data and view usage stats through a legacy web based
            interface.
          </li>
          <li>
            Assisted in transitioning traditional courses to an online learning
            platform, helping to generate in excess of $50,000
          </li>
        </ul>
      </section>
      <section>
        <h2>Projects</h2>
        <a href="https://github.com/ekarnis/eric.karnis.ca">eric.karnis.ca</a>
        <ul>
          <li>Written in React, served by AWS</li>
        </ul>
        <a href="https://github.com/ekarnis/inferno-cypress-demo">
          inferno-cypress-demo
        </a>
        <ul>
          <li>
            A quick example project that demonstrates how one could use the
            testing library Cypress to validate the outputs of an interactive
            app given certain inputs
          </li>
        </ul>
        <p>Linux on Android tablets</p>
        <ul>
          <li>
            Used Linux deploy to install a variety of distros in a chroot on old
            android tablets for use as servers
          </li>
        </ul>
      </section>
      <section>
        <h2>Education</h2>
        <p>
          <b>B.Sc. Computer Science Honours</b>– Ryerson University, Toronto,
          ON, 2018
        </p>
        <ul>
          <li>
            Computer Security: emphasis on theory and practice, taught with labs
            based on SEEDUbuntu
          </li>
          <li>
            Database Systems: relational database design and theory, taught
            through Oracle XE and SQL.
          </li>
          <li>
            C and Unix: a course on the basics of using *nix systems, including
            C, C++, Bash.
          </li>
          <li>
            Data Structures and Algorithms: this course taught efficient
            programming, including linked lists, queues, binary search trees,
            time and space complexity, etc.
          </li>
          <li>
            Computer Science 1 & 2: focused on OOP principles, and taught
            through Java.
          </li>
          <li>
            Human-Computer Interactions: a course on UI and UX design. Focused
            on defining users, user testing, collecting requirements, OOP, &
            Visual Basic. Received a 97% on the final project, the highest grade
            in the class.
          </li>
        </ul>
      </section>
      <section>
        <h2>Certifications</h2>
        <p>
          <b>eLearnSecurity Junior Penetration Tester</b>– Ryerson University,
          Toronto, ON, 2018
        </p>
        <ul>
          <li>
            Completed 12 hands on labs covering scanning & fingerprinting,
            bruteforcing & password cracking, use of Nessus, Metasploit,
            Dirbuster, Burp Suite, XSS, SQLi, ARP Poisoning, and null sessions
          </li>
          <li>
            Culminated with a mock blackbox pentest that was completed with a
            grade of 85%.
          </li>
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          <li>
            Java, React, Redux, REST, GraphQL, Spring, Python, Bash, NoSQL, SQL,
            Git, HTML, JavaScript, CSS, C
          </li>
          <li>
            Nessus, Metasploit, Dirbuster, Burp Suite, Wireshark, sqlmap, john,
            hydra, enum4linux
          </li>
          <li>Linux (Debian & Antergos), Windows 7, 10</li>
        </ul>
      </section>
    </div>
  );
};
