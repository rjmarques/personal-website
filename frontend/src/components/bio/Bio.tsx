import React from "react";

import ContentSection from "../common/ContentSection";

import "./Bio.less";

const Bio = () => (
  <ContentSection
    title="about me"
    subTitle="Know me a bit better"
    wrapperClass="bio"
  >
    <div className="bio-grid">
      <div className="bio-picture">
        <img alt="ric" src={require("../../assets/img/me.jpg")} />
      </div>
      <div>
        <div className="bio-divider" />
        <div className="bio-text materialize">
          <p>
            Hi, I'm Ricardo Marques. I'm a professional nerd that works on both
            the back and front end, while using a modern tech stack to make
            things go: <i>Beep-Boop</i>.
          </p>
          <p>
            I started off, as a Java developer, building JEE applications. From
            multithread solutions, to REST integrations and even JPA enabled
            EJBs. However, I've always had a big interest in all things Web
            related. So, when the opportunity to jump into Full Stack
            development presented itself I was over the moon, and as a result,
            these days I'm a full-blown Stack Developer. More recently, at a
            professional level, I’ve been working with Typescript on the backend
            side of things, and with React on the front-end bits -{" "}
            <a
              href="https://github.com/rjmarques/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              this website was built with both those technologies
            </a>
            .
          </p>
          <p>
            In my free time I dabble with tech I don't know much about. Recently
            it has been Go and Webassembly.
          </p>
        </div>
      </div>
    </div>
  </ContentSection>
);

export default Bio;
