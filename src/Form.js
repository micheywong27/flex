import React from 'react';

class Form extends React.Component{
    state={
        nutritionCheck: false,
        activityCheck: false
    }

    changeFilter=(e)=>{
        if (e.target.name === "nutritionCheck") {
            this.setState({
                nutritionCheck: true,
                activityCheck: false
            })
        } else if (e.target.name === "activityCheck") {
            this.setState({
                nutritionCheck: false,
                activityCheck: true
            })
        }
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                    <h3>Nutrition<input type="radio" 
                                        name="nutritionCheck"
                                        checked={this.state.nutritionCheck}
                                        onClick={this.changeFilter}/></h3>
                    <h3>Activity<input type="radio" 
                                        name="activityCheck"
                                        checked={this.state.activityCheck} 
                                        onClick={this.changeFilter}/></h3>
                    <textarea type="text" placeholder="Content" />
                    </div>    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;