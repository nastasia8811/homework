/*
Написати реалізацію кнопки "Показати пароль". Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
Технічні вимоги:
    У файлі index.html лежить розмітка двох полів вводу пароля.
    Після натискання на іконку поруч із конкретним полем - повинні відображатися символи, які ввів користувач, іконка змінює свій зовнішній вигляд. У коментарях під іконкою - інша іконка, саме вона повинна відображатися замість поточної.
    Коли пароля не видно - іконка поля має виглядати як та, що в першому полі (Ввести пароль)
Коли натиснута іконка, вона має виглядати, як та, що у другому полі (Ввести пароль)
Натиснувши кнопку Підтвердити, потрібно порівняти введені значення в полях
Якщо значення збігаються – вивести модальне вікно (можна alert) з текстом – You are welcome;
Якщо значення не збігаються - вивести під другим полем текст червоного кольору Потрібно ввести однакові значення
Після натискання на кнопку сторінка не повинна перезавантажуватись
Можна міняти розмітку, додавати атрибути, теги, id, класи тощо.
    */

window.onload = function(e){
    let tabs = document.querySelector(".tabs-header")
    tabs.addEventListener("click", fTabs)
    function fTabs(event){
        if(event.target.classList.contains("tab-h")){
            let dataTab = event.target.dataset.tab

            let tab_h = document.querySelectorAll('.tab-h');

            for(var i = 0; i<tab_h.length; i++){
                tab_h[i].classList.remove('active');
            }
            event.target.classList.add('active');

            let tabBody = document.querySelectorAll(".tab-b")

            for(let i = 0; i < tabBody.length; i++){
                if(dataTab == i){
                    tabBody[i].classList.add("active")
                }   else{
                    tabBody[i].classList.remove("active")
                }

            }

        }
    }
}

