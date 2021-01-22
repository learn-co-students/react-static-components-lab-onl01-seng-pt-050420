import React, { Component } from 'react';
import CatComponent from './CatComponent'
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent' 
import MouseComponent from './MouseComponent'

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent /> 
				< MouseComponent/>
				{/* one more component missing */}
			</div>
		);
	}
}

export default App; 


// import React, { Component } from 'react'
// import moment from 'moment'
// import ExampleComponent from './ExampleComponent'
// import TestComponent from './TestComponent'
 
