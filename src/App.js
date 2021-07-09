import React, { Component } from 'react';
import axios  from 'axios';


export class App extends Component {

    
    state = {
        selectedFile: null,
        enterText:"",
        imageView:[]
    }

    fileSelectedHandler = event =>{
       this.setState({
           selectedFile: event.target.files[0],
       })
       console.log(event.target.files[0]);
      
    }

    enteredTextHandler = event => {
       this.setState({
           enterText: event.target.value
       })
       console.log(event.target.value);
    }
    
    
    fileUploadHandler = () =>{
        const formData = new FormData();
        formData.append('files',this.state.selectedFile);
        
        axios.post("http://65.0.211.194:8082/api/v1/upload/bulk/files?contentType=IMAGE&entityId=2cdab72c20ed47eda71c8f4c8818c520&entityType=POST&isThumbnailNeeded=true",
         formData, { headers:{
                    
                    'auth': 'dont_delete_user',
                    'Content-Type' : 'multipart/form-data'
                    
                }}
               
              )
           .then(res => {
            // url="http://google.com"
            console.log(res);
            const imageUrl = res.data;
            console.log(imageUrl);
            this.setState({imageView:imageUrl});
            console.log(this.state.imageView[0].url);



          }).catch(error =>{
            console.log(error);
        })
    }

    submitBtnHandler = () =>{
       
        console.log(this.state.enterText);
        console.log(this.state.imageView[0].url);
        // const payload="";

        axios.post("http://65.0.211.194:8083/api/v1/clubs/banner",
        {payload :{
            "imageUrl": "this.state.imageView[0].url",
            "tag": "this.state.enterText"
        }}
        ).then(submitRes =>{
            console.log(submitRes);

        }).catch(error=>{
            console.log(error);
        })
      
    }
    render() {
         
              
                   
               
               
        return (
            <>
            <div>
              <input type="file" onChange={this.fileSelectedHandler}/>
              <button onClick={this.fileUploadHandler}>Upload</button>
              
                {   this.state.imageView.length > 0 &&
                    
                    this.state.imageView.map((val) =>{
                       return <div key={val.id}>
                          <img src={val.url} alt="error"></img>
                       </div>
                   })
                 }

                
             <div>
              <input type="text" onChange={this.enteredTextHandler} placeholder="Add Text"/>

               <div>
               <button onClick={this.submitBtnHandler}>Submit</button>
               </div>
            </div>

            </div>
          
            </>
        )
    }
}

export default App;


