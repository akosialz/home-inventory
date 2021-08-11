import React from 'react'
import ModalComponent from './ModalComponent'

const FunctionBar = ({inventories, insertItem}) => {
    
    return (

        <div className="container">
            <div className="row">
                <div className="col col-lg-1">
                    <ModalComponent inventories={inventories} insertItem={insertItem} />
                </div>
                <div className="col col-lg-11">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
                        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunctionBar
