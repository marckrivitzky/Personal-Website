import React from "react";
import { Modal} from 'react-bootstrap'
import {RiSpyFill} from 'react-icons/ri'

export default class GameModal2 extends React.Component{
	constructor(props){
		super(props);
			this.state = {
				modalOpen: false,

			}
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
		
	}	

	openModal = () => {
		this.setState ({
			modalOpen: true
		})
	}

	closeModal = () => {
		this.setState ({
			modalOpen: false
		})
	}
	
	
	render(){
		const spy = <RiSpyFill size={40}/>
		return(
			<div className="modal-container">
					
						<Modal show={this.state.modalOpen} onHide={this.closeModal}>
			        	
							 <div className='modal-two-container'>
						    <Modal.Body>
								<div className="modal-directions">
									<div className="modal-directions2">
										<br/>
										<h3 className="directions2">Welcome to Eye Spy {spy}</h3>
										<h5 className="directions-description2">Hello! I misplaced 10 items that I must find.  Please help me find everything by clicking on each item from the list below. A checkmark will appear in the corresponding box after you click the correct item. </h5>
										<br/>	
										<button className="btn btn-danger" id="exit" onClick={this.closeModal}>Close</button>
										<br/>
									</div>
								</div>
							</Modal.Body>
							</div>
						</Modal>
					
				<button className="btn btn-secondary" id="open-modal-button" onClick={this.openModal}>Click here for directions</button>
			 		
			</div>	
				
		);
	}
}