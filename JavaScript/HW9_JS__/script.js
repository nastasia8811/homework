
function getNewList(arr = [],parent = document.body) {
    const newArr = arr.map((elem) => {
        arr.innerText = `<li>${elem}</li>`
        return elem
    });

    return newArr
parent.append(li)
}

getNewList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], document.querySelector('.wrapper_list'));


// Создайте в html ul, дайте класс ul
// Потом в аргумент передавайте
// document. qwerySelector(“ul”)
//
// 3 строчку убрать
//
// Потом пишете
// arr. map
// В каждом цикле создаёте li и устанавливаете innerText = elem, а потом
// parent( он же второй аргумент)
// parent.append( li)

// 2 вариант

// function getNewList(arr = []) {
//     const ulList = document.createElement("ul");
//     const newArr = arr.map((elem) => {
//         const li = `<li>${elem}</li>`
//         return li
//     });
//     ulList.innerHTML = newArr;
//     return ulList
// }
// document.body.after(getNewList( ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]));