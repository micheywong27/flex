import React from 'react';

class Form extends React.Component{
    state={
        nutrition: false,
        activity: false
    }

    changeFilter=(e)=>{
        if (e.target.name === "nutrition") {
            this.setState({
                nutrition: true,
                activity: false
            })
        } else if (e.target.name === "activity") {
            this.setState({
                nutrition: false,
                activity: true
            })
        }
    }

    render(){
        return(
            <div className="form">
                <form onSubmit={(e)=>this.props.filter(e,this.state.nutrition)}>
                    <div>
                    <h3>Nutrition<input type="radio" 
                                        name="nutrition"
                                        checked={this.state.nutrition}
                                        onChange={this.changeFilter}/></h3>
                    <h3>Activity <input type="radio" 
                                        name="activity"
                                        checked={this.state.activity} 
                                        onChange={this.changeFilter}/></h3>
                    <textarea type="text" 
                                name="content"
                                placeholder="Content"
                                onChange={e=> this.props.onChange(e)}
                                value={this.props.content} />
                    </div>    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;