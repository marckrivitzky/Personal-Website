import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import NavBar from "./NavBar";
import drawing1 from "../assets/drawing1a.png"
import drawing2 from "../assets/drawing2a.png"
import drawing3 from "../assets/drawing3a.png"
import drawing4 from "../assets/drawing4a.png"
import drawing5 from "../assets/drawing5a.png"
import drawing6 from "../assets/drawing6a.png"
import drawing7 from "../assets/drawing7a.png"
import drawing8 from "../assets/drawing8a.png"
import drawing9 from "../assets/drawing9a.png"
import drawing10 from "../assets/drawing10.png"
import drawing11 from "../assets/drawing11a.png"
import drawing12 from "../assets/drawing14.png"
import BottomPage from "./BottomPage";
import ModalArt from "./modalArt";


 class DigitalArt extends PureComponent{
	
	render(){
		return(
			<div className="home-page-containter">
				<NavBar/>
				<br />
				<h2 className="art-title"> Photoshop Art </h2>
				<br />
				<ModalArt />
				<br/>
				<div className="drawings">
				  	<Row>
					 	<Col xs='4'><img src={drawing1} width="317px" height="317px" id="drawing-1"/></Col>
					 	<Col xs='4'><img src={drawing2} width="317px" height="317px" id="drawing-2"/> </Col>
					 	 <Col xs='4'><img src={drawing12} width="317px" height="317px"id="drawing-12"/></Col>
				 	 </Row>
					<br/>
					<Row>
					     <Col xs='4'><img src={drawing10} width="317px" height="317px" id="drawing-10"/></Col>
					     <Col xs='4'><img src={drawing8} width="317px" height="317px" id="drawing-8"/> </Col>
					     <Col xs='4'><img src={drawing6} width="317px" height="317px"id="drawing-6"/></Col>
					</Row>
					<br/>
					  <Row>
					  <Col xs='4'><img src={drawing7} width="317px" height="317px" id="drawing-7"/></Col>
					  <Col xs='4'><img src={drawing9} width="317px" height="317px" id="drawing-9"/>  </Col>
					 <Col xs='4'><img src={drawing5} width="317px" height="317px" id="drawing-5"/> </Col>
					  </Row>
					<br/>
						
				</div>	
			<br/>
			<BottomPage />
		</div>
		);
	}
}

export default withRouter(DigitalArt)