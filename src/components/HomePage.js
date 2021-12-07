import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import BottomPage from "./BottomPage";
import Marc from "../assets/marc.png"
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from 'react-bootstrap'

 class HomePage extends PureComponent{
	constructor(props){
		super(props);
			this.state = {
				isOpen: false, 
				MarcImg: Marc
			}
	}


	toNextPage = () => {
	  		 const { history } = this.props;
	  		 if(history) history.push('/CodingProjects');
	}

	render(){
		return(
			<div className="home-page-containter">
				<NavBar />
				<br/>
				<div className="home-page-card">					
					<Card style={{ width: '29rem', borderRadius: '25px', backgroundColor: "mediumaquamarine" }}>
					  <img src={Marc} className="marc-image" width="178.57px" height="250px" alt="marc" borderRadius='25px' />
						  
					  <Card.Body>
						<br />
					    <h1 className="marc-title-card-name">Marc Krivitzky</h1>
					
						<h5 className="marc-title-card-job">Front End Developer</h5>
					    <p className="marc-title-card-description">
					     	Hi! Thanks for visiting my website! My name is Marc Krivitzky and I'm a 
							creative, organized, and hard working individual looking to begin my career 
							in front-end development. Before beginning my journey into developing, I worked
							 as an accounting administrator at a company called AKRF, Inc. This experience 
							provided a strong foundation in interpersonal, analytical, and collaborative 
							problem solving. During my time working at AKRF, I dreamed of finding 
							a career path that excited me and made me want to jump out of bed everyday. 
							In 2020, during the height of the COVID pandemic, I began to think about my 
							long term career goals more and decided to leave AKRF. I was passionate about art 
							and using my creative talents to build and develop something new and unique, which 
							lead me to coding and web development. In the beginning of 2021, I started my journey
							 to learn how to code by enrolling in an intensive coding bootcamp called Promineo Tech. 
							I instantly fell in love with everything about coding and have been working actively to 
							expand my skillset and grow my career in this space ever since. At Promineo Tech, I  primarily 
							focused on building and developing my frontend skills such as: Javascript, HTML, CSS, Jquery, AJAX, 
							and ReactJS. I look forward to continuing to grow my skills and work for a company that values creative 
							and entrepreneurial thinkers like myself.  Please feel free to explore everything my website has to offer!  
						</p>
					  </Card.Body>
					</Card>
				</div>
				<br/>
				<BottomPage/>
			</div>
		);
	}
}

export default withRouter(HomePage)

