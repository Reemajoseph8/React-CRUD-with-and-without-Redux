import React, { Component } from 'react'
import Transactionform from './Transactionform'


class Transactionlist extends Component {
    state={
        currentIndex: -1,
        List:this.returnList()
    }
returnList() {
 if(localStorage.getItem('transactions')==null)
    localStorage.setItem('transactions',JSON.stringify([]))
return JSON.parse(localStorage.getItem('transactions'))
}

handleEdit=index=>{
    this.setState({
    currentIndex:index
    })
}
handleDelete=index=>{
    var list = this.returnList()
    list.splice(index,1)
    localStorage.setItem('transactions',JSON.stringify(list))
    this.setState({list,currentIndex:-1})

}
onAddorEdit=(data)=>{
var list = this.returnList()
if(this.state.currentIndex===-1)
    list.push(data)
else
    list[this.state.currentIndex] = data
localStorage.setItem('transactions',JSON.stringify(list))
this.setState({ list,currentIndex:-1 })
}


    render() {
        return (
            <div>
              <Transactionform 
              onAddorEdit={this.onAddorEdit}
              currentIndex={this.state.currentIndex}
              list = {this.state.list}/>
              <hr />
              <table>
                  <tbody>
                      {
                       this.state.List.map((item,index) => {
                         return <tr key={index}>
                             <td >{item.bAccountNo}</td>
                             <td >{item.bAccountName}</td>
                             <td >{item.Amount}</td>
                             <td>
                                 <button onClick={()=>this.handleEdit(index)}>Edit</button>
                                 <button onClick={()=>this.handleDelete(index)}>Delete</button>
                             </td>
                         </tr>  
                    })}
                      
                  </tbody>
              </table>
            </div>
        )
    }
}
export default Transactionlist
