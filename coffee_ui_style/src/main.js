const topMenu = document.getElementById('karin-top-menu')

const topMenuIcon = document.getElementById('karin-top-menu-icon')

document.addEventListener('click', (e) => {
    if(topMenuIcon.contains(e.target)){
        //click inside
        topMenu.classList.toggle('karin-top-menu-expanded')
        topMenu.classList.toggle('hidden')
    }else{
        //click outside
        if(topMenu.classList.contains('karin-top-menu-expanded')){
            topMenu.classList.remove('karin-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
      
    }
})