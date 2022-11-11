const  section= document.querySelector("section")
//const  likes= document.querySelector(".likes")
//const  username= document.querySelector(".username")
//const  name= document.querySelector(".name")
//const  location= document.querySelector(".location")
//const  comment= document.querySelector(".comment")
//const  post= document.querySelector(".post")//






const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


for (let i=0; i<posts.length; i++ ){
    
    
    section.innerHTML += `  
    
      <div class="post-info">
       
         <div>
       
       
           <img src="${posts[i].avatar}" alt="poster profile pic" class="avatar">
           
           
           
       </div>
           
        
       <div class="poster-content">
           
           
        <h5 class="name"> ${posts[i].name} </h5>
        
        <h6 class= "location"> ${posts[i].location} </h6>
        
       </div>
       
       
    </div> 
        
        
    <img src="${posts[i].post}" alt="poster profile pic"  class="post" >
    
    <div class="icons">
        
     <img src="images/icon-heart.png" alt="heart icon" class="icon-img">
     <img src="images/icon-comment.png" alt="comment icon" class="icon-img">
     <img src="images/icon-dm.png" alt="DM icon" class="icon-img">
   </div>
   

       
    <p class="likes"> ${posts[i].likes} likes </p>

   
   <div class="post-caption">
   
  
    

    <p class="username" >${posts[i].username} </p> 
    
    <p class= "comment">${posts[i].comment}</p>
    
  
       
       
       
   </div>
    

  `
  
  
  
  

    
    
}



