export default function Table({ generateTable }) {
  const table = generateTable();

  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "flex-start",
        fontFamily: "monospace",
        fontSize: "1.2rem",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      {table.map((number) => {
        return (
          <div
            style={{
              backgroundColor: "palegreen",
              padding: "1rem",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            {number.map((el) => (
              <h4>{el}</h4>
            ))}
          </div>
        );
      })}
    </div>
  );
}
