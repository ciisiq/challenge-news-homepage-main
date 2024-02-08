import { topic } from '../../util/data';
import './topics.css';

export default function Topics() {
  return (
    <>
      <div className="containerMain">
        {topic.map((topic) => (
          <div className="topic-card" key={topic.id}>
            <div className="r-side-topics">
              <img className="topicImage" src={topic.image} alt={topic.title} />
            </div>
            <div className="l-side-topics">
              <p className="t-seq">{topic.seq}</p>
              <h4 className="t-title">{topic.title}</h4>
              <p className="t-intro">{topic.intro}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
