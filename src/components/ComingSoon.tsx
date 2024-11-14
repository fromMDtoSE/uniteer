import "../components/comingSoon.css"
import image from "../assets/logo.png"
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
        <p>Hello friends! We are currently building our new sports and comfort clothing store. Add your email address below to stay up-to-date with announcements and our launch proposals.</p>
      </article>
      <div className="hero-image-desktop">
    <img src="https://assets.codepen.io/6060109/athlete-big.png" alt="Femail athlete squinting towards the camera."/>
  </div>
    </main>
  </div>
  );
};

export default ComingSoonPage;