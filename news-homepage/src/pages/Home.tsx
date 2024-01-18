import CardNew from '../components/CardNew/CardNew';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Topics from '../components/Topics/Topics';
import main from '../../../assets/images/image-web-3-desktop.jpg';
import './homepage.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="r-side">
          <img
            className="homeImage"
            src={main}
            alt="top image with many colorful geometric"
          />
          <div className="textContainer">
            <div className="r-side-text">
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="l-side-text">
              <p>
                {' '}
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </section>
        <section className="l-side">
          <CardNew />
        </section>
      </main>
      <section>
        <Topics />
      </section>
      <Footer />
    </>
  );
}
