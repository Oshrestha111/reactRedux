import { useSelector, useDispatch } from "react-redux";
import { increment } from "./action/increment";

function App() {
  const counter = useSelector((state) => state.counter); //to display
  const dispatch = useDispatch();
  return (
    <div>
      {/* <Greet />
			<Clock /> */}
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <div>counter:{counter}</div>
    </div>
  );
}

export default App;
