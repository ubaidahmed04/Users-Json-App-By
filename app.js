// // let USERAPI = "https://jsonplaceholder.typicode.com/users"

async function callAPI() {
   let main = document.getElementById("userData");
   let loader = document.getElementById("loader");

   if (main) {
       loader.style.display = "block";

       try {
           let result = await fetch("https://jsonplaceholder.typicode.com/users");
           if (result.ok) {
               let userData = await result.json();

               main.innerHTML = userData
                   .map((user) => 
                       `<tr>
                           <td>${user.id}</td>
                           <td>${user.username}</td>
                           <td>${user.email}</td>
                           <td>${user.website}</td>
                           <td>${user.phone}</td>
                           <td>
                               <button type="button" class="btn btn-secondary" onclick="seePost(${user.id})">See Post</button>
                           </td>
                       </tr>`
                   )
                   .join("");
           } else {
               console.error("Failed to fetch user data. Status: " + result.status);
           }
       } catch (error) {
           console.error("An error occurred while fetching or displaying user data:", error);
       } finally {
           loader.style.display = "none"; // Hide the loader when done
       }
   } else {
       console.error("Element with id 'userData' not found.");
   }
}

function seePost(userId) {
   location.href = `post.html?id=${userId}`;
}

callAPI();   // seePost()
   // console.log(seePost())


//    document.getElementById("userData").addEventListener("click", function (event) {
//       const clickedRow = event.target.closest("tr");
//       if (clickedRow) {
//           const userId = clickedRow.querySelector("td:first-child").textContent;
//           getPostsByUserId(userId);
//       }
//   });
// // new
//   async function callAPI() {
//    const main = document.getElementById("userData");
//    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
//    const users = await usersResponse.json();

//    const tableRows = users.map((user) => {
//        return `<tr>
//            <td>${user.id}</td>
//            <td>${user.username}</td>
//            <td>${user.email}</td>
//            <td>${user.website}</td>
//            <td>${user.phone}</td>
//            <td>
//                <button onclick="seePost(${user.id})">See Post</button>
//            </td>
//        </tr>`;
//    });

//    main.innerHTML = tableRows.join("");
// }

// callAPI();

// function seePost(userId) {
//    location.href = `post.html?id=${userId}`;
// }
// const userData = document.getElementById("userData");
// userData.addEventListener("click", function (event) {
//     const clickedRow = event.target.closest("tr");
//     if (clickedRow) {
//         const userId = clickedRow.querySelector("td:first-child").textContent;
//         seePost(userId);
//     }
// });
  
// async function postAPI() {

//     //  main.innerHTML = result;
//   let post = document.getElementById("postData")
//     let result1 =await fetch("https://jsonplaceholder.typicode.com/posts");
//      result1 = await result1.json();
//      console.warn(result1)
//      document.getElementById("postData").innerHTML = result1
//      .map((user) => 
//         `<tr>
       
//         <td>${user.id}</td>
//         <td>${user.title}</td>
//         <td>${user.body}</td>
//         <td> <button>see post${location.href = "post.html"}</button></td>

//         </tr>
//         ` 
        
//      ).join("");
//      post.innerHTML = result1;


// }


// postAPI()



// // async function  post(){
// //     let result =await fetch("https://jsonplaceholder.typicode.com/users");
// //     result = await result.json();
// //     console.warn(result)

// //     var postGet =`${user.post}?userId=${user.id}}  `
// //     console.log(postGet)
// // }
// // post()

// // let request = () => {
// //     fetch("https://jsonplaceholder.typicode.com/todos/2")
// //     .then(function(reponse){
// //         return reponse.json()
// //     })
// //     .then((response) => {
// //         console.log(response)
// //         var result = document.getElementById("checkDiv")
// //         result.innerHTML = 'Users Id :   ' + response.userId + '   Id :    ' + response.id + '   title :  ' + response.title + '    completed :   ' + response.completed;
// //     })
// // }








// // new 
// async function callAPI() {
//     try {
//       const main = document.getElementById("checkDiv");
//       const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
//       const users = await usersResponse.json();
  
//       const userData = users.map(async (user) => {
//         const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//         const posts = await postsResponse.json();
  
//         return {
//           user,
//           posts,
//         };
//       });
  
//       const userDataWithPosts = await Promise.all(userData);
  
//       const tableRows = userDataWithPosts.map((data) => {
//         const user = data.user;
//         const posts = data.posts;
  
//         return `<tr>
//           <td>${user.id}</td>
//           <td>${user.username}</td>
//           <td>${user.email}</td>
//           <td>${user.website}</td>
//           <td>${user.phone}</td>
//           <td>${posts.length}</td>
//         </tr>`;
//       });
  
//       main.innerHTML = tableRows.join("");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  
//   callAPI();
  