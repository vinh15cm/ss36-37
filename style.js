let todoListDatabase = [
    {
        id: 1,
        content: "danh rang luc 7h",
        status: false,

    },
    {
        id: 2,
        content: "rua mat sau khi danh rang",
        status: false,

    },
    {
        id: 3,
        content: "ngu som luc 8h",
        status: true,

    },

];
let ul = document.getElementsByClassName('list')[0]//html collection

for (let index in todoListDatabase) {
    //{id,content,status}--> <li>{id,content,status}</li>
    //ul cho li vao
    //ul.appendChild(li)
    //..ul.innerHTML="<li></li>"
    let li = `<li class="list-item">
                ${todoListDatabase[index].content}
                <button class="delete-btn">xoa</button>
                <button class="edit-btn">sua</button>
            </li>`;

    ul.innerHTML += li;
}