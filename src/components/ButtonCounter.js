import { connect } from "react-redux";

function ButtonCounter(props) {
  const handleIncrement = () => {
    props.onIncrement();
  };

  const handleDecrement = () => {
    props.onDecrement();
  };

  return (
    <div>
      <h1>Increment/Decrement Counter</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(null,mapDispatchToProps)(ButtonCounter);
