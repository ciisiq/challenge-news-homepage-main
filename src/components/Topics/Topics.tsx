import { topic } from '../../util/data';
import './topics.css';

export default function Topics() {
  return (
    <>
      <div className="cards container">
        {topic.map((topic) => (
          <article key={topic.id}>
            <img src={topic.image} alt={topic.title} />

            <div>
              <span>{topic.seq}</span>
              <h4>{topic.title}</h4>
              <p>{topic.intro}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
