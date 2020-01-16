import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <div>
                    <h3>Nutrition<input type="radio"/></h3>
                    <input type="radio" />
                    <textarea type="text" placeholder="Content" />
                    </div>    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;