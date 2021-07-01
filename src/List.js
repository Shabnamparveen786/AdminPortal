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
        
       
        // const url = "http://65.0.216.210:5000/search/people?query={query}".replace("{query}",this.txt)
        const url = "http://65.0.216.210:5000/search/people?query=test"
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

        // this.SearchBtn();

         const {users} = this.state;
        console.log("print");
        console.log(users);
        // console.log(users.records.length);

        users.length > 0 
        ?(
           <> 
           {/* <Search/> */}
         
                  
            <table>
             <thead>
                 <tr>
                     {/* {this.renderTableHeader()} */}
                      <th>ProfilePic</th>
                      <th>UserId</th>
                      <th>Name</th>
                      <th>Phone Number</th>
                 </tr>
             </thead>
             <tbody>
                 {/* {this.renderTableRows()} */}
                 
             </tbody>
           </table>
         </>
        ):(
            <div>No users</div>
        )

        return (
            <div>
                <input type="text" onChange={this.inputSearch} placeholder="Enter name here..." />
                <button onClick={this.SearchBtn}>Search</button>
                
            </div>
        )
    }
}

export default Table;