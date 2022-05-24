// console.log(window.location.href)
// console.log(document.title);
// console.log(window.parent)

const TITLE = document.getElementById('title');
const ADDRESS = document.getElementById('address');
const FORM = document.getElementById('form')
// const BOOKMARK_BTN = document.getElementById('bookmark');
const BOOKMARK_LIST = document.getElementById('bookmarks');

TITLE.value = document.title;
// ADDRESS.value = window.location.href;
ADDRESS.value = document.referrer;

FORM.addEventListener('submit', bookmark);
window.addEventListener('DOMContentLoaded', ()=>{
    if(!localStorage.getItem('bookmarks')){
        BOOKMARK_LIST.innerHTML = `            <h2 class="text-center">
        Bookmarks
    </h2>`
    }else{
        BOOKMARK_LIST.innerHTML = localStorage.getItem('bookmarks');
        deleteEvent();
    }
    // console.log(localStorage.getItem('bookmarks'))
})

function bookmark(e){
    e.preventDefault();

    let title = TITLE.value;
    let address = ADDRESS.value;

    if(title !== "" || address !== ""){
        let newBookmark = document.createElement('li');
        newBookmark.classList.add("container", "row", "my-3")
        newBookmark.innerHTML = `<a href="${address}" class="border btn btn-info col-10 mx-auto">${title}</a>
        <button class="border btn btn-danger col-1 mx-auto" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
        </button>`;
        BOOKMARK_LIST.append(newBookmark);
    
        TITLE.value="";
        ADDRESS.value = "";
    }
    else{
        alert("Input field can't be empty!")
    }

    deleteEvent();

    localStorage.setItem('bookmarks', BOOKMARK_LIST.innerHTML);
}

function deleteEvent(){
    document.querySelectorAll('button').forEach((button)=>{
        button.addEventListener('click', (e)=>{
            e.target.parentElement.remove();
            localStorage.removeItem('bookmarks', BOOKMARK_LIST.innerHTML);
            localStorage.setItem('bookmarks', BOOKMARK_LIST.innerHTML);
        })
    });

}

