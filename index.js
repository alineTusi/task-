fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((json) => console.log(json));

// 1. Create HTML structure, just for helping to understand what kind of design and structure
// 2. Fetching data from https://jsonplaceholder.typicode.com/posts
// 3. Rendering on the page (UI)

// HINT
//

const paragraphId = document.getElementById("paragraphId");



const renderListItems = () => {
 
   let itemList = itemList.innerHTML  "https://jsonplaceholder.typicode.com/posts";
  
    let html = '';
    paragraphId.forEach(blocksText => {
        let htmlText = `<div class="blocksText">
                            <h2>${blocksText.id}</h2>
                            <h1 class="title">${blocksText.title}</h1>
                            <div class="paragraph">${blocksText.body}</div>
                        </div>`;

        html += htmlText;
    });
  };

  renderListItems();



//    function renderUsers() {
//     let users = await getUsers();
//     let html = '';
//     users.forEach(user => {
//         let htmlSegment = `<div class="user">
//                             <img src="${user.profileURL}" >
//                             <h2>${user.firstName} ${user.lastName}</h2>
//                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                         </div>`;

//         html += htmlSegment;
//     });