import React,{ Component } from 'react'
 
export default class Todo_List extends Component{
    removeTask(index){
        this.props.removeTask(index);
    }
    render(){
       const list_items = this.props.task.map((item,index) => {
                return (
                    <>
                        <li className="list-group-item d-flex flex-direction-row justify-content-between" key={index}>{item} <button type="button" className="btn-close" onClick={() => this.removeTask(index)} aria-label="Close"></button></li>
                    </>
                )
        })

        return(
            <>
                <ul className="list-group">
                    {list_items}
                </ul>
            </>
        )
    }
}