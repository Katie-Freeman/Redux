import { connect } from "react-redux";
import React, { useState } from 'react'

function AddCounter(props) {
    const [value, setValue] = useState('')

    const handleTextChange = (e) => {
        let value = parseInt(e.target.value)
        setValue(value)
    }

    const handleAdd = () => {
        props.onAdd(parseInt(value))
    }

    return (
        <div>
            <input type="text" onChange= {handleTextChange} />
            <button onClick= {handleAdd}>Add</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({type: "ADD", payload: value})
    }
}

export default connect(null,mapDispatchToProps)(AddCounter)

