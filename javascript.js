


window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(key)
       
    audio.currentTime = 0
    audio.play()

    key.classList.add('playing')

    const keys = document.querySelectorAll('.key')

    function removeTrnansition(e){
        if (e.propertyName !== 'transform') return;

        this.classList.remove('playing')
    }

    keys.forEach(key => key.addEventListener('transitionend', removeTrnansition))

})
