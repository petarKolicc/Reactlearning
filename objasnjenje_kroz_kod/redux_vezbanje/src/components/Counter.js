import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../store/counter";

const Counter = () => {

  const dispatch = useDispatch()

  // vadi samo deo stanja koji mi koristimo
  // automatski pravi supskripciju za ovu komponentu i dobija automatski
  // najnoviju verziju counter-a
  const counter = useSelector(state => state.counter.counter)
  const toggler = useSelector(state => state.counter.trueshowCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase({amount: 5}) );
  }
  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter() );
  }


  // metod slanja akcije za dispatcher
  // const incrementHandler = () => {
  //   dispatch({type: 'increment'});
  // }

  // const decrementHandler = () => {
  //   dispatch({type: 'decrement'});
  // }
  // const increaseHandler = () => {
  //   dispatch({type: 'increase', amount: 5});
  // }
  // const toggleHandler = () => {
  //   dispatch({type: 'toggle'});
  // }

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggler === true && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={toggleHandler}>Toggle</button>


      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
