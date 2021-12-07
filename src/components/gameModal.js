import React from "react";
import { Modal} from 'react-bootstrap'
import {GiTicTacToe} from 'react-icons/gi'
export default class GameModal extends React.Component{
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
		const tic = <GiTicTacToe size={40}/>
		return(
			<div className="page-two-container">
			
					<Modal show={this.state.modalOpen} onHide={this.closeModal}>
		        	<div className='modal-two-container'>
						  
					    <Modal.Body>
							<div className="modal-directions">
								<div className="modal-directions2">
									<br/>
									<h3 className="directions">Tic-Tac-Toe {tic}</h3>
									<h5 className="directions-description">Get a friend and battle against them in the classic game of Tic-Tac-Toe</h5>
									<br/>	
									<button className="btn btn-danger" id="exit" onClick={this.closeModal}>Close</button>
									<br/>
								</div>
							</div>
						</Modal.Body>
						</div>
					</Modal>
				
				<button className="btn btn-secondary" id="open-modal-button" onClick={this.openModal}>Click here for directions </button>
			 		
			</div>	
				
		);
	}
}