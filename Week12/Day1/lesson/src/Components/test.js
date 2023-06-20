import { connect } from "react-redux"

const Test = (props) => {
    return (
        <>
            <h1>{props.b} {props.c}</h1>
            <button onClick={()=>props.setTitle('Test Title')}>Change Title</button>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log('store=>', state)
    return {
        b:state.property_one,
        c:state.propert_two

    }
}

export default connect(mapStateToProps)(Test)