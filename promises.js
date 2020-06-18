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

const createPost = (post)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            posts.push(post)

                const error = false

                if(!error){
                    resolve()
                }else {
                    reject("Error:Something went wrong!")
                }
        },2000)
    })
}

// createPost({title:'fourth post', body:"this is the fourth post"})
// .then(getPosts)
// .catch(err => console.log(err))




 async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    // let users=[]
    users = await res.json()
        console.log(users)
        let output =""
        return users.forEach((user)=>{
            
            output +=  
            `<div>
            <h1>${user.name}</h1>
            <p><strong>email id:</strong> ${user.email}</p>
            <p><strong>phone no # </strong> ${user.phone}</p>
            <p><strong>address: </strong>
             suite no # ${user.address.suite},
             street: ${user.address.street},
             ${user.address.city}
             </p>
             <p><strong>company name:</strong> ${user.company.name}</p>
            </div>`
            document.getElementById('place').innerHTML = output
        })
}

getUsers()

// const render = ()=> {
    
//     getUsers()
//     let output = ""
//     users.map((user, inedex)=>{
//         output += `<li>${user.id}</li>`
        
//     })
//     document.getElementById('place').innerHTML= output
// }

// render()