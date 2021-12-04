import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import BottomPage from "./BottomPage";
import X from '../assets/X.png'
import O from '../assets/O.png'
import Empty from '../assets/empty.png'
import GameModal from "./gameModal";

class Game extends PureComponent{
	constructor(props){
		super(props);
			this.state = {
				count: 0,
				x: X,
				o: O,
				whosTurn: 'X`s Turn!',
				winner: 'Tic-Tac-Toe',
				stop: false,
				sq1: Empty, 
				sq2: Empty,
				sq3: Empty,
				sq4: Empty, 
				sq5: Empty,
				sq6: Empty,
				sq7: Empty, 
				sq8: Empty,
				sq9: Empty,
			}
	}

	squareOne = () => {
		if (this.state.sq1 === Empty && this.state.count % 2 === 0 )	{
			this.setState({sq1: X, count: this.state.count += 1, whosTurn: 'O`s Turn!'})
		}
		else if(this.state.sq1 === Empty && this.state.count % 2 !== 0){
			this.setState({sq1: O, count: this.state.count += 1, whosTurn: 'X`s Turn!'})
		}
	}	

	squareTwo = () => {
		if (this.state.sq2 === Empty && this.state.count % 2 === 0 )	{
			this.setState({sq2: X, count: this.state.count += 1, whosTurn: 'O`s Turn!'})
		}
		else if(this.state.sq2 === Empty && this.state.count % 2 !== 0){
			this.setState({sq2: O, count: this.state.count += 1, whosTurn: 'X`s Turn!'})
		}	
	}

	squareThree = () => {
		if (this.state.sq3 === Empty && this.state.count % 2 === 0 )	{
			this.setState({sq3: X, count: this.state.count += 1, whosTurn: 'O`s Turn!'})
		}
		else if(this.state.sq3 === Empty && this.state.count % 2 !== 0){
			this.setState({sq3: O, count: this.state.count += 1, whosTurn: 'X`s Turn!'})
		}
	}

	squareFour = () => {
		if (this.state.sq4 === Empty && this.state.count % 2 === 0 )	{
			this.setState({sq4: X, count: this.state.count += 1, whosTurn: 'O`s Turn!'})
		}
		else if(this.state.sq4 === Empty && this.state.count % 2 !== 0){
			this.setState({sq4: O, count: this.state.count += 1, whosTurn: 'X`s Turn!'})
		}
	}

	squareFive = () => {
		if (this.state.sq5 === Empty && this.state.count % 2 === 0 )	{
			this.setState({sq5: X, count: this.state.count += 1, whosTurn: 'O`s Turn!'})
		}
		else if(this.state.sq5 === Empty && this.state.count % 2 !== 0){
			this.setState({sq5: O, count: this.state.count += 1, whosTurn: 'X`s Turn!'})
		}
	}

	squareSix = () => {
		if (this.state.sq6 === Empty && this.state.count % 2 === 0 )	{
			this.setState({sq6: X, count: this.state.count += 1, whosTurn: 'O`s Turn!'})
		}
		else if(this.state.sq6 === Empty && this.state.count % 2 !== 0){
			this.setState({sq6: O, count: this.state.count += 1, whosTurn: 'X`s Turn!'})
		}
	}
	
	squareSeven = () => {
		if (this.state.sq7 === Empty && this.state.count % 2 === 0 )	{
			this.setState({sq7: X, count: this.state.count += 1, whosTurn: 'O`s Turn!'})
		}
		else if(this.state.sq7 === Empty && this.state.count % 2 !== 0){
			this.setState({sq7: O, count: this.state.count += 1, whosTurn: 'X`s Turn!'})
		}
	}

	squareEight = () => {
		if (this.state.sq8 === Empty && this.state.count % 2 === 0 )	{
			this.setState({sq8: X, count: this.state.count += 1, whosTurn: 'O`s Turn!'})
		}
		else if(this.state.sq8 === Empty && this.state.count % 2 !== 0){
			this.setState({sq8: O, count: this.state.count += 1, whosTurn: 'X`s Turn!'})
		}
	}

	squareNine = () => {
		if (this.state.sq9 === Empty && this.state.count % 2 === 0 )	{
			this.setState({sq9: X, count: this.state.count += 1, whosTurn: 'O`s Turn!'})
		}
		else if(this.state.sq9 === Empty && this.state.count % 2 !== 0){
			this.setState({sq9: O, count: this.state.count += 1, whosTurn: 'X`s Turn!'})
		}
	}

	resetGame = () => {
		this.setState({
				whosTurn: 'X`s Turn!',
				winner: 'Tic-Tac-Toe',
				sq1: Empty, 
				sq2: Empty,
				sq3: Empty,
				sq4: Empty, 
				sq5: Empty,
				sq6: Empty,
				sq7: Empty, 
				sq8: Empty,
				sq9: Empty,
		})
	}
	
	render(){
		if (this.state.sq1 === X && this.state.sq2 === X && this.state.sq3 === X ||
			this.state.sq1 === X && this.state.sq4 === X && this.state.sq7 === X ||
			this.state.sq1 === X && this.state.sq5 === X && this.state.sq9 === X ||
			this.state.sq2 === X && this.state.sq5 === X && this.state.sq8 === X ||
			this.state.sq3 === X && this.state.sq6 === X && this.state.sq9 === X ||
			this.state.sq4 === X && this.state.sq5 === X && this.state.sq6 === X ||
			this.state.sq7 === X && this.state.sq8 === X && this.state.sq9 === X ||
			this.state.sq7 === X && this.state.sq5 === X && this.state.sq3 === X 
		 	){
			this.setState({
				winner: 'Tic-Tac-Toe!', 
				whosTurn: 'X WINS',
				sq1: X, 
				sq2: X,
				sq3: X,
				sq4: X, 
				sq5: X,
				sq6: X,
				sq7: X, 
				sq8: X,
				sq9: X,
			})
		 }
		
		else if (this.state.sq1 === O && this.state.sq2 === O && this.state.sq3 === O ||
			this.state.sq1 === O && this.state.sq4 === O && this.state.sq7 === O ||
			this.state.sq1 === O && this.state.sq5 === O && this.state.sq9 === O ||
			this.state.sq2 === O && this.state.sq5 === O && this.state.sq8 === O ||
			this.state.sq3 === O && this.state.sq6 === O && this.state.sq9 === O ||
			this.state.sq4 === O && this.state.sq5 === O && this.state.sq6 === O ||
			this.state.sq7 === O && this.state.sq8 === O && this.state.sq9 === O ||
			this.state.sq7 === O && this.state.sq5 === O && this.state.sq3 === O 
		 	){
			this.setState({
				winner: 'Tic-Tac-Toe',
				whosTurn: 'O WINS!',
				sq1: O, 
				sq2: O,
				sq3: O,
				sq4: O, 
				sq5: O,
				sq6: O,
				sq7: O, 
				sq8: O,
				sq9: O,
			})
		 }
	
		return(
			<div className="home-page-containter">
				<NavBar/>
				<br/>
				<GameModal />
				<br />
					<h1 className="winner">{this.state.winner}</h1>
					<br/>
					<div class="row">

					    <div class="column">
					      <button className="button" type="button" onClick={() => {this.squareOne();}} id="button1"><img src={this.state.sq1} class="squareImg" alt="square" id="square1" height="150px" width="150px"/> </button>
					      <button className="button" type="button" onClick={() => {this.squareTwo();}} id="button2"><img src={this.state.sq2}  class="squareImg" alt="square" id="square2" height="150px" width="150px"/> </button>
					      <button className="button" type="button" onClick={() => {this.squareThree();}} id="button3"><img src={this.state.sq3}  class="squareImg" alt="square" id="square3" height="150px" width="150px"/> </button>
					    </div>

					    <div class="column">
					      <button className="button" type="button" onClick={this.squareFour} id="button4"><img src={this.state.sq4}  class="squareImg" alt="square" id="square1" height="150px" width="150px"/> </button>
					      <button className="button" type="button" onClick={this.squareFive} id="button5"><img src={this.state.sq5}  class="squareImg" alt="square" id="square2" height="150px" width="150px"/> </button>
					      <button className="button" type="button" onClick={this.squareSix} id="button6"><img src={this.state.sq6}  class="squareImg" alt="square" id="square3" height="150px" width="150px"/> </button>
					    </div>

					    <div class="column">
					      <button className="button" type="button" onClick={this.squareSeven} id="button7"><img src={this.state.sq7} class="squareImg" alt="square" id="square1" height="150px" width="150px"/> </button>
					      <button className="button" type="button" onClick={this.squareEight} id="button8"><img src={this.state.sq8}  class="squareImg" alt="square" id="square2" height="150px" width="150px"/> </button>
					      <button className="button" type="button" onClick={this.squareNine} id="button9"><img src={this.state.sq9}  class="squareImg" alt="square" id="square3" height="150px" width="150px"/> </button>
					    </div>

					</div>
					 <h1 className="whos-turn">{this.state.whosTurn}</h1>
					<br />
					<button className="btn btn-warning" type="button" onClick={this.resetGame}>Play Again</button>
					<br />
				<br/>
				<BottomPage />
			</div>
		);
	}
}

export default withRouter(Game)


