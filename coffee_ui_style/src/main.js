const topMenu = document.getElementById('karin-top-menu')

const topMenuIcon = document.getElementById('karin-top-menu-icon')

document.addEventListener('click', (e) => {
    if(topMenuIcon.contains(e.target)){
        //click inside
        topMenu.classList.toggle('hidden')
    }else{
        //click outside

    }
})