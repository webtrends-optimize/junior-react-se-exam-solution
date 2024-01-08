import React from 'react';
import './App.css';
import New from './components/New';

const fields = [
    { name: "field_name", label: "Name", type: "text" },
    { name: "field_username", label: "User", type: "text" },
    { name: "field_date", label: "Date", type: "date" }
];

class App extends React.Component {

    render(){

        return (
        
<div>

    <h1>Webtrends Optimize Software Engineer exam</h1>
    <form>
        {
            fields.map(f => {
                return (
                    <div className="field" key={ f.name }>
                        <label htmlFor={f.name}>{f.label}</label>
                        <input id={f.name} name={f.name} type={ f.type }></input>
                    </div>
                )
            })
        }
    </form>

    <New text="Hello" />
</div>
            
        );

    }

}

export default App;