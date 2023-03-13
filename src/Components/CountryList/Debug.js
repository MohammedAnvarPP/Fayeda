export function Debug({ data, off = false }) {
  if (off) {
    return null;
  }
  return (
    <div
      style={{
        maxHeight: 200,
        overflow: "auto",
        background: "rgb(224 239 240)",
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 12,
        borderRadius: 2,
      }}
    >
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
