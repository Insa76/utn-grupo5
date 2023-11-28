export function Container({ children }) {
  return (
    <div className="container">
      <div className="col-md-5 offset-md-4">{children}</div>
    </div>
  );
}
