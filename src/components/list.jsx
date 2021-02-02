import React, {Component} from 'react'
import Todo_List from "./todo_list";

class List extends Component{
    
    constructor(){
        super();
        this.state ={
            task:'',
            todos:[]
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.addTask = this.addTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }

        handleChange(e){
            const value = e.target.value;
            this.setState({
                task:value
            })
        }

        addTask(){
            this.state.todos.push(this.state.task)
            this.setState({
                todos: this.state.todos
            })
        }
        
        removeTask(index){
            this.state.todos.splice(index,1)
            this.setState({
                todos:this.state.todos
            })
        }

    render(){
        return <>
            <section className="w-75 mx-auto">
                <div className="col-12 d-flex flex-direction-row justify-content-between align-items-center my-4">
                    <input onChange ={this.handleChange} value={this.state.text} className="col-9 form-control" type="text" placeholder="Add Task" aria-label="Add_Task" aria-describedby="Add_Task"/>
                    <button type="button" onClick={this.addTask} className="col-3 btn btn-primary Add-btn">Add</button>
                </div>
                <Todo_List task = {this.state.todos} removeTask = {this.removeTask}/>
            </section>
        </>
    }
}

export default List;