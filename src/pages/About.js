import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
              React Developer 🚀| Turning Ideas into Dynamic Web Experiences |
              Years of development Expertise | Crafting Exceptional User
              Experiences | Let's Build Something Extraordinary! 💻🌟
            </p>
            <span>
              <p>
                Enthusiastic frontend developer with building scalable web
                applications in JavaScript and React. I believe that great
                design is not just visually appealing but also intuitive and
                accessible. Apart from my expertise in React and JavaScript, I
                have a strong foundation in utilizing state-of-the-art tools and
                libraries such as Tailwind CSS, Redux, and Firebase to craft
                dynamic and responsive web applications.
                <p >
                <span>
                As much as I relish
                challenges as opportunities to learn and grow, I thrive in
                collaborative environments where ideas are freely exchanged, and
                creativity knows no bounds.
               </span>
               </p>
                <p>
                  <span>
                    Email For Collaboration:- parthibmohanta17@gmail.com{" "}
                  </span>
                </p>
              </p>
            </span>
            <header>
              <h2>Tech Stacks</h2>
              <p>
                HTML | CSS | JAVASCRIPT | REACT JS | REDUX | FIREBASE | TAILWIND
                CSS | BOOTSTRAP
              </p>
            </header>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
