import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    
  }
  
  render() { 
    console.log('Counters Rendered');
    
    //Object Destructuring
    const {onReset, counters, onDelete, onIncrement} = this.props;
    return ( 
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
      {counters.map(counter => 
        <Counter key={counter.id} counter={counter}
        onDelete={onDelete} onIncrement={onIncrement}>
        </Counter>)
      }
    </div> 
    );
  }

}
 
export default Counters;