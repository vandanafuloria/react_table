export default function Table({ num }) {
  return (
    <div
      style={{
        border: "2px solid purple",
        padding: "2rem",
        borderRadius: "10px",
        margin: 5,
        fontFamily: "monospace",
        fontSize: "0.8rem",
        color: "purple",
        backgroundColor: "white",
      }}
    >
      {Array(11)
        .fill(null)
        .map((_, index) => {
          return (
            <h1 key={index}>
              {`${num} x ${index + 1} = ${num * (index + 1)}`}
            </h1>
          );
        })}
    </div>
  );
}
