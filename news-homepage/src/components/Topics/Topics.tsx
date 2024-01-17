import { topic } from '../../util/data';

export default function Topics() {
  return (
    <>
      <div>
        {topic.map((topic) => (
          <div key={topic.id}>
            <img src={topic.image} alt={topic.title} />
            <p>{topic.seq}</p>
            <h1>{topic.title}</h1>
            <p>{topic.intro}</p>
          </div>
        ))}
      </div>
    </>
  );
}
