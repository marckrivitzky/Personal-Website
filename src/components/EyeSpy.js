import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import BottomPage from "./BottomPage";
import white from '../assets/white.png'
import check from '../assets/check.png'
import eyeSpy from '../assets/eyeSpy.png'
import GameModal2 from "./gameModal2";
import winner from '../assets/winner.png'

class EyeSpy extends PureComponent{
	constructor(props){
		super(props);
			this.state = {
				bottle: white,
				iphone: white,
				skateboard: white,
				pencil: white,
				highlighter: white,
				lamp: white,
				sharpener: white,
				ticket: white,
				tooth: white,
				plant: white,
				display: eyeSpy,
				message: "Can you find all the items?"
			}
			
			
	}
	
	clickBottle = () => {
		if (this.state.bottle === white){
			this.setState({bottle: check})
		}
		if (this.state.bottle === white &&
			this.state.iphone === check &&this.state.skateboard === check &&this.state.pencil === check &&
			this.state.highlighter === check &&this.state.lamp === check &&this.state.sharpener === check &&
			this.state.ticket === check &&this.state.tooth === check &&this.state.plant === check ){
			this.setState({bottle: check,display: winner,})
		}
	}

	clickPhone = () => {
		if (this.state.iphone === white){
			this.setState({iphone: check})
		}
		if (this.state.bottle === check &&this.state.iphone === white &&this.state.skateboard === check &&
			this.state.pencil === check &&this.state.highlighter === check &&this.state.lamp === check &&
			this.state.sharpener === check &&this.state.ticket === check &&this.state.tooth === check &&
			this.state.plant === check ){
			this.setState({iphone: check,display: winner,})
		}
	}		

	clickSkateboard = () => {
		if (this.state.skateboard === white){
			this.setState({skateboard: check})
		}
		if (this.state.bottle === check && this.state.iphone === check && this.state.skateboard === white &&
			this.state.pencil === check && this.state.highlighter === check && this.state.lamp === check &&
			this.state.sharpener === check &&this.state.ticket === check &&this.state.tooth === check &&
			this.state.plant === check ){
			this.setState({skateboard: check,display: winner,})
		}
	}		

	clickPencil = () => {
		if (this.state.pencil === white){
			this.setState({pencil: check})
		}
		if (this.state.bottle === check && this.state.iphone === check && this.state.skateboard === check &&
			this.state.pencil === white && this.state.highlighter === check && this.state.lamp === check &&
			this.state.sharpener === check &&this.state.ticket === check &&this.state.tooth === check &&
			this.state.plant === check ){
			this.setState({pencil: check,display: winner,})
		}
	}		

	clickHighlighter = () => {
		if (this.state.highlighter === white){
			this.setState({highlighter: check})
		}
		if (this.state.bottle === check && this.state.iphone === check && this.state.skateboard === check &&
			this.state.pencil === check && this.state.highlighter === white && this.state.lamp === check &&
			this.state.sharpener === check &&this.state.ticket === check &&this.state.tooth === check &&
			this.state.plant === check ){
			this.setState({highlighter: check,display: winner,})
		}
	}	

	clickLamp = () => {
		if (this.state.lamp === white){
			this.setState({lamp: check})
		}
		if (this.state.bottle === check && this.state.iphone === check && this.state.skateboard === check &&
			this.state.pencil === check && this.state.highlighter === check && this.state.lamp === white &&
			this.state.sharpener === check &&this.state.ticket === check &&this.state.tooth === check &&
			this.state.plant === check ){
			this.setState({lamp: check, display: winner,})
		}
	}	
	
	clickSharpener = () => {
		if (this.state.sharpener === white){
			this.setState({sharpener: check})
		}
		if (this.state.bottle === check && this.state.iphone === check && this.state.skateboard === check &&
			this.state.pencil === check && this.state.highlighter === check && this.state.lamp === check &&
			this.state.sharpener === white &&this.state.ticket === check &&this.state.tooth === check &&
			this.state.plant === check ){
			this.setState({sharpener: check, display: winner,})
		}
	}	

	clickTicket = () => {
		if (this.state.ticket === white){
			this.setState({ticket: check})
		}
		if (this.state.bottle === check && this.state.iphone === check && this.state.skateboard === check &&
			this.state.pencil === check && this.state.highlighter === check && this.state.lamp === check &&
			this.state.sharpener === check &&this.state.ticket === white &&this.state.tooth === check &&
			this.state.plant === check ){
			this.setState({ticket: check, display: winner,})
		}
	}	

	clickTooth = () => {
		if (this.state.tooth === white){
			this.setState({tooth: check})
		}
		if (this.state.bottle === check && this.state.iphone === check && this.state.skateboard === check &&
			this.state.pencil === check && this.state.highlighter === check && this.state.lamp === check &&
			this.state.sharpener === check &&this.state.ticket === check &&this.state.tooth === white &&
			this.state.plant === check ){
			this.setState({tooth: check, display: winner,})
		}
	}	

	clickPlant = () => {
		if (this.state.plant === white){
			this.setState({plant: check})
		}
		if (this.state.bottle === check && this.state.iphone === check && this.state.skateboard === check &&
			this.state.pencil === check && this.state.highlighter === check && this.state.lamp === check &&
			this.state.sharpener === check &&this.state.ticket === check &&this.state.tooth === check &&
			this.state.plant === white ){
			this.setState({plant: check, display: winner,})
		}
	}	

	reset = () => {
		this.setState({
			bottle: white,
			iphone: white,
			skateboard: white,
			pencil: white,
			highlighter: white,
			lamp: white,
			sharpener: white,
			ticket: white,
			tooth: white,
			plant: white,
			display: eyeSpy,
		})
	}

	render(){

		return(
			<div className="eye-spy">
				<NavBar />
				<div className="eye-spy-modal"><GameModal2/></div>
				
				<div className="background-container-eye-spy">
					<div className="buttons-to-click">

							<div className="help">
								<button  className="eye-spy-image"><img src={this.state.display} style={{height:"504x", width:"672px"}} /></button>
							</div>

							<div className="my-bottle">
								<button className="bottle" onClick={(event)=>{this.clickBottle();}}></button>
							</div>

							<div className="my-phone">
								<button className="phone" onClick={(event)=>{this.clickPhone();}}></button>	
							</div>

							<div className="my-skateboard">
								<button className="skateboard" onClick={(event)=>{this.clickSkateboard();}}></button>
							</div>

							<div className="my-pencil">
								<button className="pencil" onClick={(event)=>{this.clickPencil();}}></button>
							</div>

							<div className="my-highlighter">
								<button className="highlighter" onClick={(event)=>{this.clickHighlighter();}}></button>	
							</div>

							<div className="my-lamp">
								<button className="lamp" onClick={(event)=>{this.clickLamp();}}></button>
							</div>

							<div children="my-sharpener">
								<button className="sharpener" onClick={(event)=>{this.clickSharpener();}}></button>
							</div>

							<div className="my-ticket">
								<button className="ticket" onClick={(event)=>{this.clickTicket();}}></button>	
							</div>

							<div className="my-tooth">
								<button className="tooth" onClick={(event)=>{this.clickTooth();}}></button>
							</div>

							<div className="my-plant">
								<button className="plant" onClick={(event)=>{this.clickPlant();}}></button>
							</div>

						</div>
				
						<div className="eye-spy-container">
							<div className="list-container">
								<h3 className="eye-spy">I Spy...</h3>
								<div className="row">
									<div className="col">
										<img src={this.state.bottle} height="80px" width="80px"/>
										<p className="eye-spy-description"> a pill bottle</p>
									</div>
									<div className="col">
										<img src={this.state.iphone} height="80px" width="80px"/>
										<p className="eye-spy-description"> an iphone</p>
									</div>
									<div className="col">
										<img src={this.state.skateboard} height="80px" width="80px"/>
										<p className="eye-spy-description">a skateboard</p>
									</div>
									<div className="col">
										<img src={this.state.pencil} height="80px" width="80px"/>
										<p className="eye-spy-description">a pencil</p>
									</div>
									<div className="col">
										<img src={this.state.highlighter} height="80px" width="80px"/>
										<p className="eye-spy-description">a highlighter</p>
									</div>
									<div className="col">
										<img src={this.state.lamp} height="80px" width="80px"/>
										<p className="eye-spy-description">a lamp shade</p>
									</div>
									<div className="col">
										<img src={this.state.sharpener} height="80px" width="80px"/>
										<p className="eye-spy-description">a sharpener</p>
									</div>
									<div className="col">
										<img src={this.state.ticket} height="80px" width="80px"/>
										<p className="eye-spy-description">a concert ticket</p>
									</div>
									<div className="col">
										<img src={this.state.tooth} height="80px" width="80px"/>
										<p className="eye-spy-description">a shark tooth</p>
									</div>
									<div className="col">
										<img src={this.state.plant} height="80px" width="80px"/>
										<p className="eye-spy-description">a fake plant</p>
									</div>
									
							</div>
						</div>
						
							<button className="btn btn-success" type="button" onClick={this.reset}>Play Again</button><br/><br/>
					</div>
				</div>
				<BottomPage />
			</div>
		);
	}
}
export default withRouter(EyeSpy)

// import React, { PureComponent} from "react";
// import { withRouter } from 'react-router-dom';
// import NavBar from "./NavBar";
// import BottomPage from "./BottomPage";
// import room from "../assets/roomFull.png"
// import dumbbell from "../assets/roomDumbbell.png"
// import figure from "../assets/roomFigure.png"
// import firePlace from "../assets/roomFirePlace.png"
// import hourGlass from "../assets/roomHourGlass.png"
// import plant from "../assets/roomPlant.png"
// import yogaBall from "../assets/roomYogaBall.png"
// import yogaMat from "../assets/roomYogaMat.png"



// class EyeSpy extends PureComponent{
// 	constructor(props){
// 		super(props);
// 	}		
			

// 	render(){

// 		return(
// 			<div className="eye-spy">
// 				<NavBar />
// 					<img src={room}	height="497.14px" width="795.4px" alt="image" className="full-room" />
// 					<img src={dumbbell}	height="497.14px" width="795.4px" alt="image" className="dumbbell-room" />
// 					{/* <img src={figure} height="497.14px" width="795.4px" alt="image" className="figure-room" />
// 					<img src={firePlace} height="497.14px" width="795.4px" alt="image" className="fire-place-room" />
// 					<img src={hourGlass} height="497.14px" width="795.4px" alt="image" className="hour-glass-room" />
// 					<img src={plant} height="497.14px" width="795.4px" alt="image" className="plant-room" />
// 					<img src={yogaBall}	height="497.14px" width="795.4px" alt="image" className="yoga-ball-room" />
// 					<img src={yogaMat} height="497.14px" width="795.4px" alt="image" className="yoga-mat-room" /> */}
// 				<BottomPage />
// 			</div>
// 		);
// 	}
// }
// export default withRouter(EyeSpy)