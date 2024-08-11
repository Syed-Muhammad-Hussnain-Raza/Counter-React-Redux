import { WiDayThunderstorm } from "react-icons/wi";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div
        className="d-grid gap-3 d-sm-flex justify-content-sm-center"
        style={{ margin: "10px" }}
      >
        <input type="text" placeholder="Enter number" className="numberInput"/>
        <button type="button" className="btn btn-info" >
          Add
        </button>
      </div>
    </>
  );
};

export default Controls;
