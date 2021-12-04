import React from "react";
import { Modal} from 'react-bootstrap'

export default class ModalArt extends React.Component{
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
		return(
			<div className="page-two-container">
			
					<Modal show={this.state.modalOpen} onHide={this.closeModal}>
		        	
						 <div className='modal-two-container'>
					    <Modal.Body>
							<div className="modal-directions">
								<div className="modal-directions2">
									<br/>
									<h3 className="directions2">About me</h3>
									<h5 className="directions-description2">
										Another passion I have is drawing, I mainly create digital art.  
										I use Photoshop as well as Procreate.  I started drawing in 2018 and I haven't stopped since.  
										One of my absolute favorite things in the world to do is create something from scratch.  Similar to coding
										drawing fully allows me to express my creativity.  Below is an array of digital drawings I have created over the past two years.  
										If you want to see more scroll to the bottom of the page and click on the instgram logo!  Thanks for viewing!
									</h5>
									<br/>	
									<button className="btn btn-danger" id="exit" onClick={this.closeModal}>Close</button>
									<br/>
								</div>
							</div>
						</Modal.Body>
						</div>
					</Modal>
				
				<button className="btn btn-secondary" id="open-modal-button" onClick={this.openModal}>About me</button>
			 		
			</div>	
				
		);
	}
}