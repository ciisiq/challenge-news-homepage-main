import { newsCard } from '../../util/data';

export default function CardNew() {
  return (
    <>
      <h1>New</h1>
      <div className="">
        {newsCard.map((card) => (
          <div key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.intro}</p>
          </div>
        ))}
      </div>
    </>
  );
}
