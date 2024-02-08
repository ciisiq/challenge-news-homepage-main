import { newsCard } from '../../util/data';
import './CardNew.css';

export default function CardNew() {
  return (
    <>
      <div className="containeirNew">
        <h1 className="titleNew">New</h1>
        <div className="cardNewCont">
          {newsCard.map((card) => (
            <div className="new-wrapp" key={card.id}>
              <h3 className="subtitleNew">{card.title}</h3>
              <p className="introNew">{card.intro}</p>
              <div className="line"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
