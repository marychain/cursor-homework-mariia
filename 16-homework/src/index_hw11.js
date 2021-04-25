export function getKeySound() {
    const key = document.createElement('div');
    document.body.appendChild(key);
    key.classList.add('key');
    const keyH = document.createElement('kbd');
    keyH.classList.add('keyH');
    document.querySelector('.key').appendChild(keyH);
    const keyO = document.createElement('kbd');
    keyO.classList.add('keyO');
    document.querySelector('.key').appendChild(keyO);
    keyH.textContent = 'H';
    keyO.textContent = 'O';
    const audio = document.createElement('div');
    document.body.appendChild(audio);
    audio.classList.add('audio');
    const audioH = document.createElement('audio');
    audioH.classList.add('keyH');
    document.querySelector('.audio').appendChild(audioH);
    audioH.setAttribute("src", "assets/audio/H.mp3");
    const audioO = document.createElement('audio');
    audioO.classList.add('keyH');
    document.querySelector('.audio').appendChild(audioO);
    audioO.setAttribute("src", "assets/audio/O.mp3");
    keyH.textContent = 'H';
    keyO.textContent = 'O';
    const classKey = document.querySelector('.key');
    const classAudio = document.querySelector('.audio');
    document.addEventListener('keydown', function clickKey(event) {
        const key = '.' + event.code
        if (classKey.querySelector(key) === null)
        return;
        classKey.querySelector(key).classList.add('style');
        classAudio.querySelector(key).play();
    });
    document.addEventListener('keyup', function clickKey(event) {
        const key = '.' + event.code;
        if (classKey.querySelector(key) === null)
        return;
        classKey.querySelector(key).classList.remove('style');
    });
    document.addEventListener('click', function clickMouse(event) {
        const key = '.' + event.target.className;
        if (classKey.querySelector(key) === null)
        return;
        classAudio.querySelector(key).play();
    });
};