const posts = [
    {title: "post one", body:"This is post one"},
    {title: "post two", body:"This is post two "},
    {title: "post three", body:"This is post three"}
]

const getPosts = ()=> {
    setTimeout(()=> {
        let output=""
     posts.forEach((post,index)=>{
        output += `<li>${post.title}</li>`
     })
     document.getElementById('place').innerHTML= output
    },1000)
    
}

const createPost = (post,callback)=> {
setTimeout(()=>{
    posts.push(post)
    callback()
},2000)
}

createPost(
    {
        title:"fourth post",
        body:"this is the fourth post"
    }, getPosts)

