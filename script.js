//when submit --> things will be saved
// then it will be uploaded

//post must be deletable

document.getElementById("postForm").addEventListener("submit", function(event){
    event.preventDefault();
    const postFeed = document.getElementById("posts");
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;
    const discription = document.getElementById("discription").value;

    if (title && discription !== "") {
        const addingPost = document.createElement("div");
        addingPost.classList.add("addingPost");

        addingPost.innerHTML = `${title}<br>${url}<br>${discription}`;

        //const deletebtn = createElement("button");
        //deletebtn.classList.add = "delete";
        //deletebtn.textContent = "delete";
 

        postFeed.appendChild(addingPost);
        //addingPost.appendChild(deletebtn);
    } else {
        alert("please try again");
    }

    document.getElementById("postForm").reset();

});


//deletebtn.addEventListener("click", function(){
    //addingPost.delete();
//});