import CardNew from '../components/CardNew/CardNew';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Topics from '../components/Topics/Topics';
import main from '../assets/images/image-web-3-desktop.jpg';
import mainMobile from '../assets/images/image-web-3-mobile.jpg';
import './Home.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="showcase">
          <div>
            <img
              src={windowWidth <= 768 ? mainMobile : main}
              alt="top image with many colorful geometric"
            />

            <article className="text_Container">
              <h1>The Bright Future of Web 3.0?</h1>

              <div>
                <p className="description_home">
                  {' '}
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="readmore_btn">Read More</button>
              </div>
            </article>
          </div>
          <CardNew />
        </section>
      </main>
      <Topics />
      <Footer />
    </>
  );
}
