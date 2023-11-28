let formBtns = document.getElementById('form-btns');
let optionList = document.querySelectorAll('.service');
let formSelect = document.getElementById('form-select');
let input1 = document.getElementById('1');
let input2 = document.getElementById('2');
let input3 = document.getElementById('3');
let input4 = document.getElementById('4');

formSelect.value = '';




optionList.forEach(item =>{
    let btn = document.createElement("button"); 
    btn.textContent = item.textContent;
    btn.className = "formbtn";
    btn.onclick = () => {
        formSelect.value = item.value; 
        document.querySelectorAll('.formbtn').forEach(item =>{
            item.style.borderColor = "#9faffc"
        });  
        btn.style.borderColor = "red";
    }
    formBtns.appendChild(btn)
});

document.getElementById('id1').onclick = () => {
    if (formSelect.value === ''){
        document.getElementById('message').textContent = 'Выберите категорию'
    } else {
        document.getElementById('message').textContent = ''
    }
    fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    data.forEach((item) => {
        if (input1.innerHTML != item.title &&
            input2.innerHTML != item.body &&
            input3.innerHTML != item.userId &&
            input4.innerHTML != item.id){
                console.log('2');
        } else {
            console.log('1');
        }
    })
})
}


