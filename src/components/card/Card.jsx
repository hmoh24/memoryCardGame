export default function Card({ value, onClick }) {
  return (
    <section onClick={() => onClick(value)} className="card">
      <h3>{value.name}</h3>
      <img src={value.imageURL} />
    </section>
  );
}
