export default function Card({ value, onClick }) {
  return (
    <section onClick={() => onClick(value)} className="card">
      {value}
    </section>
  );
}
