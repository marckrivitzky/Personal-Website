import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import gameOne from '../assets/gameOne.png'
import gameTwo from '../assets/gameTwo2.png'
import NavBar from "./NavBar";
import { Card } from "react-bootstrap";
import BottomPage from "./BottomPage";

class Games extends PureComponent{
	constructor(props){
		super(props);
	}

	toTicTacToe = () => {
		 const { history } = this.props;
		 if(history) history.push('/Game');
	}

	toEyeSpy = () => {
  		 const { history } = this.props;
  		 if(history) history.push('/EyeSpy');
	}

	render(){
	
		return(
			<div className="resume-page">
				<NavBar/>
				<div className="games-container">
					<h1 className="games-page-title">Simple ReactJS Games!</h1>
					<br/><br/>	

					<div className="game-cards">
						<div className="row">
							<div className="col" id="game-one">
								<div className="game-border">
									<Card style={{ width: '25rem', borderRadius: '25%', backgroundColor: "mediumaquamarine"}}>
								  <img className="images-games" src={gameOne} height="184.2px" width="277px"/>
								  <Card.Body>
								        <h2 className="games-title">Tic-Tac-Toe</h2>
								    <p className="games-cards-descriptions">
								    	Check out this tic-tac-toe game I created using ReactJS.
								    </p>
								    <button className="btn btn-secondary" onClick={this.toTicTacToe}>Play game</button>
								  </Card.Body>
								</Card>
							</div>
							</div>
							<div className="col" id="game-two">
								<div className="game-border">
									<Card   style={{ width: '25rem', borderRadius: '25%', backgroundColor: "mediumaquamarine" }}>
									   <img className="images-games" src={gameTwo} height="184.2px" width="277px"/>
									  <Card.Body>
									    <h2 className="games-title">Eye Spy</h2>
									    <p className="games-cards-descriptions">
									      Check out this eye spy game I created using ReactJS.
									    </p>
									    <button className="btn btn-secondary" onClick={this.toEyeSpy}>Play game</button>
									  </Card.Body>
									</Card>
								</div>
							</div>	
						</div>
					</div>

					<br/><br/>
				</div>	 
				<BottomPage />
			</div>
		);
	}
}

export default withRouter(Games)