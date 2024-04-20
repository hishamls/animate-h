import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import cityImg from "../assets/city.jpg";
import heroImg from "../assets/hero.png";

export default function WelcomePage() {
  const { scrollY } = useScroll();

  const opacityCity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const yCity = useTransform(scrollY, [0, 200], [0, -100]);

  const opacityHero = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);
  const yHero = useTransform(scrollY, [0, 200], [0, 150]);
  const scaleHero = useTransform(scrollY, [0, 300, 500], [1.3, 0.5, 0.2]);

  const scaleContent = useTransform(scrollY, [0, 300], [1, 1.5]);
  const yContent = useTransform(scrollY, [0, 250, 500], [0, 150, 300]);

  return (
    <>
      <header id="welcome-header">
        <motion.div
          id="welcome-header-content"
          style={{ scale: scaleContent, y: yContent }}
        >
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          src={cityImg}
          alt="A city skyline touched by sunlight"
          id="city-image"
          animate={{ opacity: 1 }}
          style={{ opacity: opacityCity, y: yCity }}
        />
        <motion.img
          src={heroImg}
          alt="A superhero wearing a cape"
          id="hero-image"
          style={{ opacity: opacityHero, y: yHero, scale: scaleHero }}
        />
      </header>
      <main id="welcome-content">
        <section>
          <h2>There&apos;s never been a better time.</h2>
          <p>
            With our platform, you can set, track, and conquer challenges at
            your own pace. Whether it&apos;s personal growth, professional
            achievements, or just for fun, we&apos;ve got you covered.
          </p>
        </section>

        <section>
          <h2>Why Challenge Yourself?</h2>
          <p>
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Custom challenge creation: Set the rules, define your pace.</li>
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
            </li>
            <li>
              Community Support: Join our community and get motivated by peers.
            </li>
          </ul>
        </section>

        <section>
          <h2>Join Thousands Embracing The Challenge</h2>
          <p>
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
          </p>
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
        </section>
      </main>
    </>
  );
}
