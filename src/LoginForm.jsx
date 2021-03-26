// import React, { useEffect } from 'react';
// import ModalDemo from 'react-modal'
import { useState } from 'react';
import App from './App';

const AddForm = ({onSubmit}) => {
    // useEffect(()=>{
    const [active, setActive] = useState('False')
    // })
    const [isModalOpen, ModalIsOpen] = useState(true);
    
    return (
        <>
            {/* <ModalDemo ariaHideApp={false} style={{ width: '500px' }} isOpen={isModalOpen}> */}
                {/* <div className="modal faded"> */}
                {/* <div className="modal-content bd-example-modal-sm"> */}
                <form onSubmit = {onSubmit}>
                <div className="modal-header bg-success">
                    <h4 className="modal-title">Modal Heading</h4>
                    <button onClick={() => { ModalIsOpen(false) }} type="button" className="close" data-dismiss="modal">&times;</button>

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
                        <button onClick={() => { ModalIsOpen(false); setActive('True') }} type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    <div>
                        {active === 'True' && <App />}
                    </div>

                </div>
                </form>
                {/* </div> */}
                {/* </div> */}
            {/* </ModalDemo> */}
        </>
    );

}

export default AddForm;