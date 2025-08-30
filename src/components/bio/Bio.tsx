import Image from 'next/image';
import ContentSection from '../common/ContentSection';
import meImage from '../../assets/img/me.jpeg';
import './Bio.scss';

const Bio = () => {
  return (
    <ContentSection
      title="about me"
      subTitle="Know me a bit better"
      wrapperClass="bio"
    >
      <div className="bio-grid">
        <div className="bio-picture">
          <Image
            src={meImage}
            alt="Ricardo Marques"
            width={150}
            height={150}
          />
        </div>
        
        <div>
          <div className="bio-divider"></div>
          <div className="bio-text materialize">
            <p>
              Hi, I&apos;m Ricardo Marques. I&apos;m a professional nerd that works on both
              the back and front end, while using a modern tech stack to make
              things go: <em>Beep-Boop</em>.
            </p>
            <p>
              I started off my career as a backend Java developer, building JEE
              applications. Shortly after, my interest in all things Web related
              made me expand into becoming a Full Stack Developer. More recently
              I&apos;ve been working with Golang on the backend side of things, and
              with React and Typescript on the front-end bits -{' '}
              <a
                href="https://github.com/rjmarques/personal-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                this website is a SSR React App with a Typescript backend
              </a>
              .
            </p>
            <p>
              In my free time I dabble with tech I&apos;m less familiar with. Recently
              it has been self-hosting, IoT home automation, and Arduino.
            </p>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default Bio;
