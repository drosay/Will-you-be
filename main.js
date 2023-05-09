const typed = new Typed('.typed',{
        stringsElement:"#text",
        smartBackspace:true,
        typeSpeed: 50,
        backSpeed:50,
        startDelay:1000,
        backDelay:1000,
        loop:true,
        contentType:'html',
        cursorChar: '💗',
})

// const typeted = new Typed('.typeted',{
//     stringsElement:"#text_blur",
//     smartBackspace:true,
//     typeSpeed: 100,
//     backSpeed:100,
//     startDelay:900,
//     backDelay:1000,
//     loop:true,
//     contentType:'html',
//     showCursor:false
// })

const audio = document.getElementById('audio')
const click = document.getElementById('click')
console.log(click)

click.addEventListener("click",()=>{
        audio.volume = 0.2
        audio.muted = false
})          