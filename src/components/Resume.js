import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import resume from '../assets/MyResume.png'
import NavBar from "./NavBar";
import { Card } from "react-bootstrap";
import BottomPage from "./BottomPage";
import {GrDocumentPdf} from 'react-icons/gr'

class Resume extends PureComponent{
	constructor(props){
		super(props);
	}

	render(){
		const pdf = <GrDocumentPdf size={30} color={'white'} />
	


		return(
			<div className="resume-page">
				<NavBar/>
				<br />
				<div className="pdf-resume"><Card.Link href="https://docs.google.com/document/d/1OWvaEyCbnMp1XCwJE-8zwU7IXSjfovxYXEAKwe1JIkc/edit?usp=sharing"><h4 className="link-to-resume">Link to resume </h4></Card.Link></div>
				
				<div className="card-group-projects">
					<div class="col">
						<div className="resume-card">
							<br />
							<img src={resume} width="615.45px" height="800px" className="resume-image"/>
							
							<br /><br/>
					
						</div>
				    </div>
		
					
			
			<br/>
			
			
		</div>	 
			<BottomPage />
	</div>
		);
	}
}

export default withRouter(Resume)

