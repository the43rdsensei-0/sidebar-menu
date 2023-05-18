const btn = document.getElementById('btn');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('#searchbtn')

btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

searchBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

console.log(searchBtn);