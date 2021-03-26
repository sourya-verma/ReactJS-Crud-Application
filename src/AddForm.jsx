import React, { useState } from 'react';
import App from './App';
// import ModalDemo from 'react-modal'
// import { useState } from 'react';
// import '/home/sourya/Desktop/javascript/React-Demo/node_modules/bootstrap/dist/css/bootstrap.css'
// import '/home/sourya/Desktop/javascript/React-Demo/node_modules/bootstrap/dist/css/bootstrap.min.css'

const AddForm = () => {
    const [res, setRes] = useState(true);
    // const [isModalOpen, ModalIsOpen] = useState(false);
    return (
        <>
            <div className="card modal-content bd-example-modal-sm">
                <div className="modal-header bg-success">
                    <h4 className="modal-title">Modal Heading</h4>
                    <button type="button" className="close" data-dismiss="modal" onClick = {()=>{
                      setRes(false);
                      
                    }}>&times;</button>
                    {res ? <></>: <></>}
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="email" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="uname">University:</label>
                        <input type="text" className="form-control" id="email" />
                    </div>
                    <div style={{ float: 'left' }} className="modal-footer">
                        <button type="button" className="btn btn-outline-primary">submit</button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>

        </>
    );

}

export default AddForm;