

import React, {useState } from 'react'

 
 
const Fetchtable = () =>{
    const [txt, setTxt] = useState("");
    const [users, setUsers] = useState([]);
   

    const inputSearch=(event) =>{
      setTxt( event.target.value);

    }
    
    const SearchBtn = async () => {
        setTxt(txt)
        console.log(txt);
        const url = "http://65.0.216.210:5000/search/people?query={query}".replace("{query}",txt)
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
      
        // const users = await response.json();
        // console.log(users);

        // setUsers(users);
        if(response.ok){
            const user = await response.json();
            console.log(user);

            console.log(user.records[0].name);
            console.log(user.records.length);
           
             setUsers({users}); 
              
        }
        
        
        
       console.log({users});

      /* console.log(users.records.length);
       return  users.records.length > 0 ?(   
                <>
                 <table>
                           <thead>
                              <tr>
                                    <th>ProfilePic</th>
                                    <th>UserId</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                              </tr>

                           </thead>
                           <tbody>
                                  
                           </tbody>
                       </table>
                </>
             ):
             <div>No users</div>
             */
        

}

//   users.records.map(val =>{
//             return (
//                 <td>{val.name}</td>
//             )
//         })
       
    

    

    return (
        <>
            <div>
                <input type="text" onChange={inputSearch} placeholder="Enter name here..." />
                <button onClick={SearchBtn}>Search</button>
            </div>
            <div>
                {/* <p>  {users.records}</p> */}
            </div>

            </>
           
            )
    
}

export default Fetchtable;
