import { newsCard } from '../../util/data';
import './CardNew.css';

export default function CardNew() {
  return (
    <>
      <div className="containeir_new">
        <h2>New</h2>
        {newsCard.map((card) => (
          <article key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.intro}</p>
          </article>
        ))}
      </div>
    </>
  );
}
