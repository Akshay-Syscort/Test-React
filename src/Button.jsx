import "./Button.css";
function Button() {
  let firstName = "Akshay";
  const fullName = () => {
    return "shaharwale";
  };

  return (
    <div>
      <h1>from buton</h1>
      <h2>my name is {firstName}</h2>
      <h2>my last name is {fullName()}</h2>
    </div>
  );
}
export default Button;
