// import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import { showDetails } from '../redux/actions';

const MovieList =  (props) => {
    const list = useSelector(state => state.reducer_list.movies_list)
    const dispatch = useDispatch();
    return (
        <div style={{display:'inline-block', width:'50%'}}>
            <h1>Movie List</h1>
            {
                // props.list.map((item, index) => {
                list.map((item, index) => {
                    return(
                        <div key={index}>
                            {item.title}
                            <button onClick={()=> dispatch(showDetails(item))}>Details</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MovieList
// const mapStateToProps = state => {
//     return {
//         list:state.movies_list
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         show: (item) => dispatch(showDetails(item))
//     }
// }

// export default connect(null, mapDispatchToProps)(MovieList)