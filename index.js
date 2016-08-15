
function createSortableList() {
    var options = {
        valueNames: ['category', 'updated', 'title']
    };

    window.userList = new List('posts', options);
    
}

window.addEventListener("load", createSortableList);