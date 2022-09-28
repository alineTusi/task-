fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((json) => renderListItems(json));

const renderListItems = (items) => {
    let html = '';
    items.forEach(blocksText => {
        let htmlText = `<div class="blocksText">
                            <h2>${blocksText.id}</h2>
                            <h1 class="title">${blocksText.title}</h1>
                            <div class="paragraph">${blocksText.body}</div>
                        </div>`;

        html += htmlText;
    });

let container = document.querySelector('#paragraphId');
    container.innerHTML = html;

  };