import "../components/comingSoon.css"
import image from "../assets/logo.png"
import heroImage from "../assets/2400-hourglass-with-sand-on-dark-background-time-concept-3d-rendering-ai-generative-image.jpg"

const ComingSoonPage = () => {
  return (
    <div className="mobile-container">
    <header>
      <section className="hero-banner">
        <div className="logo-wrapper">
          <img src={image} height={"100px"} alt="Adidas logo."/>
        </div>
        <div className="hero-image"></div>
      </section>
    </header>
    <main>
      <article className="text-info">
        <h2>We're</h2>
        <h2>Coming<br/>Soon</h2>
        <p>Hello friends! We are currently building our new charity website. Stay tuned for more!</p>
      </article>
      <div className="hero-image-desktop">
    <img src={heroImage} alt="https://www.vecteezy.com/free-photos/coming-soon Coming Soon Stock photos by Vecteezy"/>
  </div>
    </main>
  </div>
  );
};

export default ComingSoonPage;