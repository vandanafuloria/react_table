export default function Table({ generateTable }) {
  const table = generateTable();

  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {table.map((number) => {
        return (
          <div>
            {number.map((el) => (
              <h1>{el}</h1>
            ))}
          </div>
        );
      })}
    </div>
  );
}
