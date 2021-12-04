import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import {Card} from 'react-bootstrap'
import {BsInstagram} from 'react-icons/bs'

import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

class BottomPage extends PureComponent{
	render(){

	const instagram = <BsInstagram size={30} color={'white'} />
	const github = <AiFillGithub size={30} color={'white'} />
	const linkedin = <AiFillLinkedin size={30} color={'white'} />

		return(
			<div className="text-center text-md-right" id="bottom-page-info">
						
				<div className="container">
				  <div className="row">
					
				    <div className="col">
						<br />
				      <h4 className="about-us">Information</h4> 
						 <br/>
						 <p className="about-us"> 
							 Location: Red Bank, New Jersey <br />
							 Contact: 732-614-8149
						  </p>
							<br />
							<Card.Link href="https://www.instagram.com/digital.art.marc/">{instagram}</Card.Link>
							<Card.Link href="https://github.com/marckrivitzky">{github}</Card.Link>
							<Card.Link href="https://www.linkedin.com/in/marc-krivitzky-1a47a9215/">{linkedin}</Card.Link>
						
				    </div>
				</div>
			</div>
		</div>
		);
	}
}

export default withRouter(BottomPage)