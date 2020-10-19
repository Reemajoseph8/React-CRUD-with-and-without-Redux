import React, { Component } from 'react'

class Transactionform extends Component {
    state={
        ...this.returnStateObject()
    }
    returnStateObject(){
    if(this.props.currentIndex === -1)
        return {
            bAccountNo:'',
            ifsc:'',
            bAccountName:'',
            Amount:''
    };
else
   return this.props.list[this.props.currentIndex]
}

componentDidUpdate(prevProps){
    if(prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list ){
    this.setState({...this.returnStateObject()})
    } 
}

handleInputChange = e =>{
    this.setState({
        [e.target.name]:e.target.value
    })

}

handleSubmit = e => {
    e.preventDefault()
    this.props.onAddorEdit(this.state)
    
}

render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="bAccountNo"
                placeholder="A/C No"
                value={this.state.bAccountNo}
                onChange={this.handleInputChange} /><br/>

                <input name="ifsc"
                placeholder="IFSC"
                value={this.state.ifsc}
                onChange={this.handleInputChange} /><br/>

                <input name="bAccountName"
                placeholder="A/C Name"
                value={this.state.bAccountName}
                onChange={this.handleInputChange} /><br/>

                <input name="Amount"
                placeholder="Amount"
                value={this.state.Amount}
                onChange={this.handleInputChange} /><br/>
                <button type="submit" >Submit</button>
            </form>
            
        )
    }
}
export default Transactionform 