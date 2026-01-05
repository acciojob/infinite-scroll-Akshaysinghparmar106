//your code he
const listItem = document.getElementById("infi-list");

function addItem(count) {
    for(let i=0; i<count; i++) {
        const li = document.createElement("li");
        li.innerText = `Item ${i+1}`;
        listItem.append(li);
    }
}

addItem(10);

function checkScroll() {
    // console.dir(listItem);
    // console.log(listItem.scrollHeight);
    // console.log(listItem.scrollTop);
    // console.log(listItem.clientHeight);
    if(listItem.scrollHeight - listItem.scrollTop - listItem.clientHeight < 1) {
        addItem(17);
    }
}

listItem.addEventListener("scroll", checkScroll);

