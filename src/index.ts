import './style.scss'

const cursor = document.querySelector('.cursor') as HTMLDivElement
const card = document.querySelector('.card-2') as HTMLDivElement

card.addEventListener('mouseleave',()=>{
    if (!cursor) return
    cursor.classList.add('cursor_center')

})

card.addEventListener('mousemove',e=>{
    if (!cursor) return
    if (cursor.classList.contains('cursor_center')){
        cursor.classList.remove('cursor_center')
    }
    // offsetX/Y is calculated relative to the target you're hovering.
    // When the #cursor comes under your mouse, the coordinates are relative to 
    // it (hence, small values), so it goes back to the top left,
    // then the offset is high again, so it comes back, and so on.
    // But you can disable pointer-events on this cursor to make it work.
    if (e.offsetX > cursor.clientWidth/2 && card.clientWidth - e.offsetX > cursor.clientWidth/2){
        cursor.style.left = e.offsetX + 'px'
    }
    if (e.offsetY > cursor.clientHeight/2 && card.clientHeight - e.offsetY > cursor.clientHeight/2){
        cursor.style.top = e.offsetY + 'px'
    }
})