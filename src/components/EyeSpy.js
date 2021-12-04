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
				message: "Can you find all the items before the time runs out?"
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
				<h1 className="eye-spy-bottom-message">{this.state.message}</h1>
				<div className="background-container-eye-spy">
					<button  className="eye-spy-image"><img  src={this.state.display} style={{height:"504x", width:"672px"}} /></button>
					<br /><br />
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
						<div className="buttons-to-click">
							<button className="bottle"  onClick={(event)=>{this.clickBottle();}}></button>
							<button className="phone" onClick={(event)=>{this.clickPhone();}}></button>	
							<button className="skateboard" onClick={(event)=>{this.clickSkateboard();}}></button>
							<button className="pencil" onClick={(event)=>{this.clickPencil();}}></button>
							<button className="highlighter" onClick={(event)=>{this.clickHighlighter();}}></button>	
							<button className="lamp" onClick={(event)=>{this.clickLamp();}}></button>
							<button className="sharpener" onClick={(event)=>{this.clickSharpener();}}></button>
							<button className="ticket" onClick={(event)=>{this.clickTicket();}}></button>	
							<button className="tooth" onClick={(event)=>{this.clickTooth();}}></button>
							<button className="plant" onClick={(event)=>{this.clickPlant();}}></button>
						</div>
							<button className="btn btn-success" onClick={this.reset}>Play Again</button>
					</div>
				</div>
				<BottomPage />
			</div>
		);
	}
}
export default withRouter(EyeSpy)
