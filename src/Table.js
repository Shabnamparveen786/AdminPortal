import React,{useState, Component} from 'react';
import Search from './Search';


class Table extends Component{
  
    constructor(props){
        super(props)

        this.state={
            users:[],
            isLoading:true,
            isError:false
            
        }
    }

    
     //async function to get request
     
         async componentDidMount(){
         this.setState({isLoading:true})

         const response = await fetch("http://65.0.216.210:5000/search/people?query=test",
                {method :'GET',
                headers:{
                    'Accept': 'Application/json',
                    'content-type' : 'Application/json',
                    'userId': 'web_user',
                    'auth': 'we-are-metby'
                }
            })

         
        //  console.log(response.json())
        if(response.ok){
            const users = await response.json()
            console.log(users);
            // console.log(users.records[0].name);
            // console.log(users.records[0].coverPic)
            this.setState({users,isLoading:false,})
        }
        else{
            this.setState({isError:true,isLoading:false})
        }


     }

  

    //  renderTableHeader = ()=>{

    //     return(
    //         <>
                // <th>CoverPic</th>
                // <th>Name</th>
                // <th>ProfilePic</th>
                // <th>Subtitle</th>
    //         </>

   
   

      

     renderTableRows = ()=>{
        
       
        return this.state.users.records.map(user => {
        
            return (
                <tr key={user.id}>
                  
                  <td>
                    <img src={user.profilePic} alt="error"/>
                  </td>
                   <td>{user.userId}</td>
                   <td>{user.name}</td>
                   <td>{user.phoneNumber}</td>
                
                  
                </tr>
            )
        })
     }

     
    inputSearch=(event) =>{
      this.setState({filterText : event.target.value});
    }
    // submitBtn =(event)=>{
    //     this.setState({})
    // }
    
       
    render(){
        
        const {users,isLoading,isError,} = this.state  //array of object destructuring
        if(isLoading){
            return <div>Loading...</div>
        }
        if(isError){
            return <div>Error...</div>
        }

        return users.records.length > 0 
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
                 {this.renderTableRows()}
                 
             </tbody>
           </table>
         </>
        ):(
            <div>No users</div>
        )
    }
}

export default Table;

