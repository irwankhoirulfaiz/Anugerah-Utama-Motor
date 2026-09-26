export default function UnitCard({ unit }) {
  return (
    <div className={`unit-card${unit.featured ? " feat" : ""}`}>
      <div className="unit-photo">
        {unit.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={unit.photoUrl} alt={unit.name} />
        ) : null}
      </div>
      <div className="unit-body">
        <h3>{unit.name}</h3>
        <p>{unit.description}</p>
        <div className="unit-foot">
          <span className="unit-tag">{unit.tag || "Hubungi Kami"}</span>
        </div>
      </div>
    </div>
  );
}
