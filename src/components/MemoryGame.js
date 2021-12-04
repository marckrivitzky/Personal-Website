// import React, { PureComponent} from "react";
// import { withRouter } from 'react-router-dom';
// import NavBar from "./NavBar";
// import BottomPage from "./BottomPage";
// import GameModal from "./gameModal";
// import dogBorder from '../assets/dogBorder1.png'
// import dogCarolina from '../assets/dogCarolina1.png'
// import dogCorgi from '../assets/dogCorgi1.png'
// import dogDachshund from '../assets/dogDachshund1.png'
// import dogDoberman from '../assets/dogDoberman1.png'
// import dogGolden from '../assets/dogGolden1.png'
// import dogJack from '../assets/dogJack1.png'
// import dogPit from '../assets/dogPit1.png'
// import empty from '../assets/empty.jpg'
// import score from '../assets/score.webp'

// class MemoryGame extends PureComponent{
// 	constructor(props){
// 		super(props);
// 			this.state = {
// 				borderOne: empty, 
// 				borderTwo: empty, 
// 				carolinaOne: empty, 
// 				carolinaTwo: empty, 
// 				corgiOne: empty, 
// 				corgiTwo: empty,
// 				dachshundOne: empty, 
// 				dachshundTwo: empty, 
// 				dobermanOne: empty, 
// 				dobermanTwo: empty,
// 				goldenOne: empty,  
// 				goldenTwo: empty, 
// 				jackOne: empty, 
// 				jackTwo: empty,
// 				pitOne: empty,
// 				pitTwo: empty, 
// 				chosen: empty,
// 				clicked: false,
// 				yourScore: 0,
// 				count: 0,
// 			}
// 	}

// 	score = () => {
// 		if (this.state.borderOne === dogBorder && this.state.borderTwo === dogBorder && this.state.clicked === true){	
// 			this.setState({
// 				borderOne: score,
// 				borderTwo: score,
// 				yourScore: this.state.yourScore + 1,
// 			})
// 		}

// 		else if (this.state.borderOne === dogBorder && this.state.borderTwo === empty){
// 			this.setState({
// 				borderOne: empty,
// 				borderTwo: empty,
// 			})
// 		}

// 		else if (this.state.borderOne === empty && this.state.borderTwo === dogBorder){
// 			this.setState({
// 				borderOne: empty,
// 				borderTwo: empty,
// 			})
// 		}
		

// //_________________________________________________________________________________________________________________________

// 		else if (this.state.carolinaOne === dogCarolina && this.state.carolinaTwo === dogCarolina){
// 			this.setState({
// 				carolinaOne: score,
// 				carolinaTwo: score,
// 				yourScore: this.state.yourScore + 1,
// 				final: true,
// 			})
// 		}

// 		else if (this.state.carolinaOne === empty && this.state.carolinaTwo === dogBorder || this.state.carolinaOne === dogCarolina && this.state.carolinaTwo === empty && this.state.count % 2 === 0 && this.state.final === false){
// 			this.setState({
// 				borderOne: empty, 
// 				borderTwo: empty, 
// 				carolinaOne: empty, 
// 				carolinaTwo: empty, 
// 				corgiOne: empty, 
// 				corgiTwo: empty,
// 				dachshundOne: empty, 
// 				dachshundTwo: empty, 
// 				dobermanOne: empty, 
// 				dobermanTwo: empty,
// 				goldenOne: empty,  
// 				goldenTwo: empty, 
// 				jackOne: empty, 
// 				jackTwo: empty,
// 				pitOne: empty,
// 				pitTwo: empty, 
// 			})

// 		}

// //_________________________________________________________________________________________________________________________
// 		else if (this.state.corgiOne === dogCorgi && this.state.corgiTwo === dogCorgi){
// 			this.setState({
// 				corgiOne: score,
// 				corgiTwo: score,
// 				yourScore: this.state.yourScore + 1,
// 				final: true,
// 			})
// 		}

// 		else if (this.state.corgiaOne === empty && this.state.corgiTwo === dogBorder || this.state.corgiOne === dogCorgi && this.state.corgiTwo === empty && this.state.count % 2 === 0 && this.state.final === false){
// 			this.setState({
// 				borderOne: empty, 
// 				borderTwo: empty, 
// 				carolinaOne: empty, 
// 				carolinaTwo: empty, 
// 				corgiOne: empty, 
// 				corgiTwo: empty,
// 				dachshundOne: empty, 
// 				dachshundTwo: empty, 
// 				dobermanOne: empty, 
// 				dobermanTwo: empty,
// 				goldenOne: empty,  
// 				goldenTwo: empty, 
// 				jackOne: empty, 
// 				jackTwo: empty,
// 				pitOne: empty,
// 				pitTwo: empty, 
// 			})

// 		}
// //_________________________________________________________________________________________________________________________
// 		else if (this.state.dachshundOne === dogDachshund && this.state.dachshundTwo === dogDachshund){
// 			this.setState({
// 				dachshundOne: score,
// 				dachshundTwo: score,
// 				yourScore: this.state.yourScore + 1,
// 				final: true,
// 			})
// 		}

// 		else if (this.state.dachshundOne === empty && this.state.dachshundTwo === dogDachshund || this.state.dachshundOne === dogDachshund && this.state.dachshundTwo === empty && this.state.count % 2 === 0 && this.state.final === false ){
// 			this.setState({
// 				borderOne: empty, 
// 				borderTwo: empty, 
// 				carolinaOne: empty, 
// 				carolinaTwo: empty, 
// 				corgiOne: empty, 
// 				corgiTwo: empty,
// 				dachshundOne: empty, 
// 				dachshundTwo: empty, 
// 				dobermanOne: empty, 
// 				dobermanTwo: empty,
// 				goldenOne: empty,  
// 				goldenTwo: empty, 
// 				jackOne: empty, 
// 				jackTwo: empty,
// 				pitOne: empty,
// 				pitTwo: empty, 
// 			})

// 		}
// //_________________________________________________________________________________________________________________________
// 		else if (this.state.dobermanOne === dogDoberman && this.state.dobermanTwo === dogDoberman){
// 			this.setState({
// 				dobermanOne: score,
// 				dobermanTwo: score,
// 				yourScore: this.state.yourScore + 1,
// 				final: true,
// 			})
// 		}

// 		else if (this.state.dobermanOne === empty && this.state.dobermanTwo === dogDoberman || this.state.dobermanOne === dogDoberman && this.state.dobermanTwo === empty && this.state.count % 2 === 0 && this.state.final !== true){
// 			this.setState({
// 				borderOne: empty, 
// 				borderTwo: empty, 
// 				carolinaOne: empty, 
// 				carolinaTwo: empty, 
// 				corgiOne: empty, 
// 				corgiTwo: empty,
// 				dachshundOne: empty, 
// 				dachshundTwo: empty, 
// 				dobermanOne: empty, 
// 				dobermanTwo: empty,
// 				goldenOne: empty,  
// 				goldenTwo: empty, 
// 				jackOne: empty, 
// 				jackTwo: empty,
// 				pitOne: empty,
// 				pitTwo: empty, 
// 				final: false,
// 			})

// 		}
// //_________________________________________________________________________________________________________________________
// 		else if (this.state.goldenOne === dogGolden && this.state.goldenTwo === dogGolden){
// 			this.setState({
// 				goldenOne: score,
// 				goldenTwo: score,
// 				yourScore: this.state.yourScore + 1,
// 				final: true,
// 			})
// 		}

// 		else if (this.state.goldenOne === empty && this.state.goldenTwo === dogGolden || this.state.goldenOne === dogGolden && this.state.goldenTwo === empty && this.state.count % 2 === 0 && this.state.final === false){
// 			this.setState({
// 				borderOne: empty, 
// 				borderTwo: empty, 
// 				carolinaOne: empty, 
// 				carolinaTwo: empty, 
// 				corgiOne: empty, 
// 				corgiTwo: empty,
// 				dachshundOne: empty, 
// 				dachshundTwo: empty, 
// 				dobermanOne: empty, 
// 				dobermanTwo: empty,
// 				goldenOne: empty,  
// 				goldenTwo: empty, 
// 				jackOne: empty, 
// 				jackTwo: empty,
// 				pitOne: empty,
// 				pitTwo: empty, 
// 				final: false,
// 			})

// 		}
// //_________________________________________________________________________________________________________________________
// 		else if (this.state.jackOne === dogJack && this.state.jackTwo === dogJack){
// 			this.setState({
// 				jackOne: score,
// 				jackTwo: score,
// 				yourScore: this.state.yourScore + 1,
// 				final: true,
// 			})
// 		}

// 		else if (this.state.jackOne === empty && this.state.jackTwo === dogJack || this.state.jackOne === dogJack && this.state.jackTwo === empty && this.state.count % 2 === 0 && this.state.final === false){
// 			this.setState({
// 				borderOne: empty, 
// 				borderTwo: empty, 
// 				carolinaOne: empty, 
// 				carolinaTwo: empty, 
// 				corgiOne: empty, 
// 				corgiTwo: empty,
// 				dachshundOne: empty, 
// 				dachshundTwo: empty, 
// 				dobermanOne: empty, 
// 				dobermanTwo: empty,
// 				goldenOne: empty,  
// 				goldenTwo: empty, 
// 				jackOne: empty, 
// 				jackTwo: empty,
// 				pitOne: empty,
// 				pitTwo: empty, 
	
// 			})

// 		}
// 	//_________________________________________________________________________________________________________________________
// 		else if (this.state.pitOne === dogPit && this.state.pitTwo === dogPit){
// 			this.setState({
// 				pitOne: score,
// 				pitTwo: score,
// 				yourScore: this.state.yourScore + 1,
// 				final: true,
// 			})
// 		}

// 		else if (this.state.pitOne === empty && this.state.pitTwo === dogPit || this.state.pitOne === dogPit && this.state.pitTwo === empty && this.state.count % 2 === 0 && this.state.final === false){
// 			this.setState({
// 				borderOne: empty, 
// 				borderTwo: empty, 
// 				carolinaOne: empty, 
// 				carolinaTwo: empty, 
// 				corgiOne: empty, 
// 				corgiTwo: empty,
// 				dachshundOne: empty, 
// 				dachshundTwo: empty, 
// 				dobermanOne: empty, 
// 				dobermanTwo: empty,
// 				goldenOne: empty,  
// 				goldenTwo: empty, 
// 				jackOne: empty, 
// 				jackTwo: empty,
// 				pitOne: empty,
// 				pitTwo: empty, 
// 			})

// 		}



// 	}


// 	boxOne = () => {
// 		if (this.state.borderOne === empty){
// 			this.setState({
// 				borderOne: dogBorder,
// 				clicked: true,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

// 	boxTwo = () => {
// 		if (this.state.goldenOne === empty){
// 			this.setState({
// 				goldenOne: dogGolden,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

// 	boxThree = () => {
// 		if (this.state.goldenTwo === empty){
// 			this.setState({
// 				goldenTwo: dogGolden,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

// 	boxFour= () => {
// 		if (this.state.pitOne === empty){
// 			this.setState({
// 				pitOne: dogPit,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}
 	
// 	boxFive= () => {
// 		if (this.state.carolinaOne === empty){
// 			this.setState({
// 				carolinaOne: dogCarolina,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}
	
// 	boxSix= () => {
// 		if (this.state.pitTwo === empty){
// 			this.setState({
// 				pitTwo: dogPit,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

	
// 	boxSeven= () => {
// 		if (this.state.jackOne === empty){
// 			this.setState({
// 				jackOne: dogJack,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}
	
// 	boxEight= () => {
// 		if (this.state.dachshundOne === empty){
// 			this.setState({
// 				dachshundOne: dogDachshund,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

// 	boxNine= () => {
// 		if (this.state.dachshundTwo === empty){
// 			this.setState({
// 				dachshundTwo: dogDachshund,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

// 	boxTen= () => {
// 		if (this.state.dobermanTwo === empty){
// 			this.setState({
// 				dobermanTwo: dogDoberman,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

// 	boxEleven = () => {
// 		if (this.state.dobermanOne === empty){
// 			this.setState({
// 				dobermanOne: dogDoberman,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

// 	boxTwelve = () => {
// 		if (this.state.corgiOne === empty){
// 			this.setState({
// 				corgiOne: dogCorgi,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

// 	boxThirteen = () => {
// 		if (this.state.borderTwo === empty){
// 			this.setState({
// 				borderTwo: dogBorder,
// 				count: this.state.count + 1,
// 				clicked: true,
// 			})
// 		}		
// 	}

// 	boxFourteen= () => {
// 		if (this.state.carolinaTwo === empty){
// 			this.setState({
// 				carolinaTwo: dogCarolina,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}
	
// 	boxFifteen= () => {
// 		if (this.state.corgiTwo === empty){
// 			this.setState({
// 				corgiTwo: dogCorgi,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}

// 	boxSixteen= () => {
// 		if (this.state.jackTwo === empty){
// 			this.setState({
// 				jackTwo: dogJack,
// 				count: this.state.count + 1
// 			})
// 		}		
// 	}




// 	render(){
// 		console.log(this.state.count)
// 		return(
// 			<div className="home-page-containter">
// 				<NavBar/>
// 				<br/>
// 				<GameModal />
// 				<br />
				
// 					<br/>
// 					<div class="row">

// 					    <div class="column">
// 						  <button className="border" onClick={(event)=>{this.boxOne(); this.score(event);}} type="button"><img src={this.state.borderOne} height="150px" width="150px"/> </button>
// 					      <button className="golden" onClick={(event)=>{this.boxTwo();this.score(event);}} type="button"><img src={this.state.goldenOne} height="150px" width="150px"/> </button>
// 					      <button className="golden" onClick={(event)=>{this.boxThree();this.score(event);}} type="button"><img src={this.state.goldenTwo} height="150px" width="150px"/> </button>
// 						  <button className="button" onClick={(event)=>{this.boxFour();this.score(event);}} type="button"><img src={this.state.pitOne} height="150px" width="150px"/> </button>
// 					    </div>

// 					    <div class="column">
// 					       <button className="carolina" onClick={(event)=>{this.boxFive();this.score(event);}} type="button"><img src={this.state.carolinaOne} height="150px" width="150px"/> </button>
// 					      <button className="pit" onClick={(event)=>{this.boxSix();this.score(event);}} type="button"><img src={this.state.pitTwo} height="150px" width="150px"/> </button>
// 					      <button className="jack" onClick={(event)=>{this.boxSeven();this.score(event);}} type="button"><img src={this.state.jackOne} height="150px" width="150px"/> </button>
// 						  <button className="dachshund" onClick={(event)=>{this.boxEight();this.score(event);}} type="button"><img src={this.state.dachshundOne} height="150px" width="150px"/> </button>
// 					    </div>

// 					   <div class="column">
// 					      <button className="dachshund" onClick={(event)=>{this.boxNine();this.score(event);}} type="button"><img src={this.state.dachshundTwo} height="150px" width="150px"/> </button>
// 					      <button className="doberman" onClick={(event)=>{this.boxTen();this.score(event);}} type="button"><img src={this.state.dobermanTwo} height="150px" width="150px"/> </button>
// 					      <button className="doberman" onClick={(event)=>{this.boxEleven();this.score(event);}} type="button"><img src={this.state.dobermanOne} height="150px" width="150px"/> </button>
// 						  <button className="corgi" onClick={(event)=>{this.boxTwelve();this.score(event);}} type="button"><img src={this.state.corgiOne} height="150px" width="150px"/> </button>
// 					    </div>

// 						 <div class="column">
// 					      <button className="border" onClick={(event)=>{this.boxThirteen(); this.score(event);}} type="button"><img src={this.state.borderTwo} height="150px" width="150px"/> </button>
// 					      <button className="carolina" onClick={(event)=>{this.boxFourteen();this.score(event);}} type="button"><img src={this.state.carolinaTwo} height="150px" width="150px"/> </button>
// 					      <button className="corgi" onClick={(event)=>{this.boxFifteen();this.score(event);}} type="button"><img src={this.state.corgiTwo} height="150px" width="150px"/> </button>
// 						  <button className="jack" onClick={(event)=>{this.boxSixteen();this.score(event);}} type="button"><img src={this.state.jackTwo} height="150px" width="150px"/> </button>
// 					    </div>


// 					</div>
// 					 <h1>{this.state.yourScore}</h1>
// 				<br/>
// 				<BottomPage />
// 			</div>
		
// 		);
// 	}
// }

// export default withRouter(MemoryGame)

// import React, { PureComponent} from "react";
// import { withRouter } from 'react-router-dom';
// import NavBar from "./NavBar";
// import BottomPage from "./BottomPage";
// import GameModal from "./gameModal";
// import dogBorder from '../assets/dogBorder1.png'
// import dogCarolina from '../assets/dogCarolina1.png'
// import dogCorgi from '../assets/dogCorgi1.png'
// import dogDachshund from '../assets/dogDachshund1.png'
// import dogDoberman from '../assets/dogDoberman1.png'
// import dogGolden from '../assets/dogGolden1.png'
// import dogJack from '../assets/dogJack1.png'
// import dogPit from '../assets/dogPit1.png'
// import empty from '../assets/empty.jpg'
// import score from '../assets/score.webp'

// class MemoryGame extends PureComponent{
// 	constructor(props){
// 		super(props);
// 			this.state = {
// 				dogs: [dogPit, dogJack, dogGolden, dogDachshund, dogDoberman, dogCorgi, dogCarolina, dogBorder],
// 				clicked,
// 			}
// 	}

// 	idk = () => {
// 		let matched = [];
// 		let count = 0;
// 		let whichClicked = [];
// 		for (let i = 0; i < this.state.dogs.length; i++){
// 			if (count === 1){
// 				whichClicked.push(this.state.dogs[i])
// 			}
// 			else if(count === 2){
// 				whichClicked.push(this.state.dogs[i])
// 			}
// 			else if (whichClicked[0] === whichClicked[1]){
// 				matched.push(whichClicked)
// 			}
// 		}
// 	}


// 	render(){

// 		return(
// 			<div className="home-page-containter">
// 				<NavBar/>
// 				<br/>
// 				<GameModal />
// 				<br />
				
// 					<br/>
// 					<div class="row">

// 					    <div class="column">
// 						  {/* <button  className="border" onClick={() => this.setState({ showing: !showing })} type="button"><img src={dogBorder} style={{ display: (showing ? 'inline' : 'none')}} height="150px" width="150px" /> </button> */}
// 							  <button onClick={this.idk}  className="border"type="button"><img src={dogBorder} height="150px" width="150px" /> </button>
// 					      <button className="golden" type="button"><img src={dogGolden} height="150px" width="150px"/> </button>
// 					      <button className="golden" type="button"><img src={dogGolden} height="150px" width="150px"/> </button>
// 						  <button className="button" type="button"><img src={dogPit} height="150px" width="150px"/> </button>
// 					    </div>

// 					    <div class="column">
// 					       <button className="carolina" type="button"><img src={dogCarolina} height="150px" width="150px"/> </button>
// 					      <button className="pit" type="button"><img src={dogPit} height="150px" width="150px"/> </button>
// 					      <button className="jack" type="button"><img src={dogJack} height="150px" width="150px"/> </button>
// 						  <button className="dachshund"  type="button"><img src={dogDachshund} height="150px" width="150px"/> </button>
// 					    </div>

// 					   <div class="column">
// 					      <button className="dachshund"  type="button"><img src={dogDachshund} height="150px" width="150px"/> </button>
// 					      <button className="doberman"  type="button"><img src={dogDoberman} height="150px" width="150px"/> </button>
// 					      <button className="doberman"  type="button"><img src={dogDoberman} height="150px" width="150px"/> </button>
// 						  <button className="corgi"  type="button"><img src={dogCorgi} height="150px" width="150px"/> </button>
// 					    </div>

// 						 <div class="column">
// 					      <button className="border" type="button"><img src={dogBorder} height="150px" width="150px"/> </button>
// 					      <button className="carolina" type="button"><img src={dogCarolina} height="150px" width="150px"/> </button>
// 					      <button className="corgi"  type="button"><img src={dogCorgi} height="150px" width="150px"/> </button>
// 						  <button className="jack" type="button"><img src={dogJack} height="150px" width="150px"/> </button>
// 					    </div>


// 					</div>
// 					 <h1>{this.state.yourScore}</h1>
// 				<br/>
// 				<BottomPage />
// 			</div>
		
// 		);
// 	}
// }

// export default withRouter(MemoryGame)


	
	