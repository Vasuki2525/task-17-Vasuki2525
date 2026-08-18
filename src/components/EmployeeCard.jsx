function EmployeeCard({ id, name }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Employee ID: {id}</p>
    </div>
  );
}

export default EmployeeCard;