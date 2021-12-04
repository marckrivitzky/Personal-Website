import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import {Card} from 'react-bootstrap'
import NavBar from "./NavBar";
import weed from "../assets/weedStore.png"
import studentDebt from "../assets/studentDebt.png"
import BottomPage from "./BottomPage";
import conorGame from "../assets/conor-game.png"
import donation from "../assets/donation.png"

 class CodingProjects extends PureComponent{
	constructor(props){
		super(props);
			this.state = {
				weed: weed, 
				studentDebt: studentDebt,
				donation: donation
			}
	}

	render(){
		return(
			<div className="home-page-containter">
				<NavBar/>
				<br />
				<h2 className="art-title">Coding Projects</h2>
				<div className="coding-projects">
				
					<br />
					<div className="row">

						
						<div className="col">
							<div className="project-weed-store">
								<h4 className="why-us">Conor McGregor Game</h4>
								<br />
								<img src={conorGame} width="260px" height="160px" className="project-images"/>
								
								<br /><br/>
								<p className="coding-project-description">
								Just for fun and to continue honing my skills, 
								I created a game where the user is prompted to 
								answer questions about Conor McGregor and his 
								criminal history. (I'm a big MMA fan!)
								</p>
								<Card.Link style={{color: "darkblue" }} href="https://main.d30pd7mvs9hmf5.amplifyapp.com/">Click here to see the app!</Card.Link>
							</div>
					    </div>

						<div className="col">
							<div className="project-weed-store">
								<h4 className="why-us">Big Cat Foundation</h4>
								<br />
								<img src={donation} width="260px" height="160px" className="project-images"/>
								
								<br /><br/>
								<p className="coding-project-description">
								This is a completely fake ReactJS application.  I made this to practice design and control.  
								The general explanation of this application is simply a fake donation foundation for big cats.   
								I used a combination of class and functional components with hooks consisting of 
									useState, setState, useHistory, and more. 
								</p>
								<Card.Link style={{color: "darkblue" }} href="https://main.d2b1fjix3pi4e8.amplifyapp.com/">Click here to see the app!</Card.Link>
							</div>
					    </div>
						
						<div className="col">
							<div className="project-weed-store">
								<h4 className="why-us">Student Debt Slayers</h4>
								<br />
								<img src={studentDebt} width="260px" height="160px" className="project-images"/>
								
								<br /><br/>
								<p className="coding-project-description">
									In partnership with a team of entrepreneurs, I'm building an 
									app to help people tackle student loan debt. I'm responsible 
									for the front-end programming and app design.
								</p>
								<Card.Link style={{color: "darkblue" }} href="https://marc-dev.dx5mnd6szzv1w.amplifyapp.com/">Click here to see the app!</Card.Link>
							</div>
					    </div>
					
						<div className="col">
							<div className="project-weed-store">
								<h4 className="why-us">WEED LIKE 2 HELP</h4>
								<br />
								<img src={weed} width="260px" height="160px" className="project-images"/>
								
								<br /><br/>
								<p className="coding-project-description">
									I created a functional store application with 13 components 
									working together to perform all the aspects of a CRUD application. 
									 I used a combination of class and functional components with hooks consisting of 
									useState, setState, useHistory, and more.  In addition, I used React Router in order
									 to create a multipage app with simple navigation.  Finally, I used React Bootstrap, 
									React Icons, and CSS in order to design and layout my application.  
								</p>
								<Card.Link style={{color: "darkblue" }} className="projects-link" href="https://main.dgeh27c3pqdqp.amplifyapp.com/HomePage">Click here to see the app!</Card.Link>
							</div>
					    </div>

				</div>
			</div>
			<br/>
			<BottomPage />
		</div>
		);
	}
}

export default withRouter(CodingProjects)