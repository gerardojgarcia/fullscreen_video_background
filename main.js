const btnEl = document.querySelector('.switch-btn')
const videoEl = document.querySelector('.video-container')




btnEl.addEventListener('click', () => {
    if(!btnEl.classList.contains('slide')) {
        btnEl.classList.add('slide')
       
    }
    else{
        btnEl.classList.remove('slide')
    }

    if(videoEl.paused) {
        videoEl.play()
    } else (
        videoEl.pause()
    )

})


//Preloader is called


const preloader = document.querySelector('.preloader')


window.addEventListener('load', ( ) => {
    preloader.classList.add('hide-preloader')
})
