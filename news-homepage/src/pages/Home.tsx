import CardNew from '../components/CardNew/CardNew';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Topics from '../components/Topics/Topics';
import main from '../../../assets/images/image-web-3-desktop.jpg';

export default function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <img src={main} alt="top image with many colorful geometric" />
        <h1>The Bright Future of Web 3.0?</h1>
        <p>
          {' '}
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>READ MORE</button>
      </section>
      <section>
        <CardNew />
      </section>
      <section>
        <Topics />
      </section>
      <Footer />
    </div>
  );
}
