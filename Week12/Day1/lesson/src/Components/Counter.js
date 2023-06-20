import {useState} from 'react';
import {connect} from 'react-redux';
import { mapDispatchToProps } from '../App';
import { incrementCounter, decrementCounter } from '../redux/actions';

const Counter = (props) => {
    // const [count, setCount] = useState(0)
    return (
        <>
        <button onClick={()=>props.handleIncrement}> + </button>
        {count}
        <button onClick={()=>props.handleDecrement}> - </button>
        </>
    )
        
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement: () => dispatch(incrementCounter()),
        handleDecrement: () => dispatch(decrementCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
