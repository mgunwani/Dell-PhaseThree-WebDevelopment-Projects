
function App() {
  var num1 = 1000, num2 = 2000;
  var myStyles = { fontSize: 24, color: "navy" };
  return (
    <div>
      <h2>App Component</h2>
      <p>This is my first app component.</p>
      {/* JavaScript Expression */}
      <h3>Sum of two numbers: {100 + 200}</h3>
      <h3>Sum of two numbers: {num1 + num2}</h3>
      <h3>{num1 > num2 ? "Num1 is greatest." : "Num2 is greatest."}</h3>
      {/* JavaScript Styling */}
      <h3 style={myStyles}>Hello Everyone..</h3>
    </div>
  );
}

export default App;
