import React, { Component } from 'react'

export class Table extends Component {
    state ={
          users: [],
          txt: ""
     }

    inputSearch=(event) =>{
      this.setState({txt: event.target.value});
    //   console.log(`${txt}`);
      
    }
    SearchBtn = async () =>{
        
        
        const url = "http://65.0.216.210:5000/search/people?query={query}".replace("{query}",this.txt)
        console.log(url)
        

        const response = await  fetch(url,
               {method :'GET',
                headers:{
                    'Accept': 'Application/json',
                    'content-type' : 'Application/json',
                    'userId': 'web_user',
                    'auth': 'we-are-metby'
                }
            }) 
      
             
        if(response.ok){
            const users = await response.json();
            console.log(users);

            console.log(users.records[0].name);
            console.log(users.records.length);
            this.setState({users});
             
        }

    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.inputSearch} placeholder="Enter name here..." />
                <button onClick={this.SearchBtn}>Search</button>
                
            </div>
        )
    }
}

export default Table;