const startButton = document.getElementById('start-btn','intro')

startButton.addEventListener('click',startGame)
function startGame(){
    console.log('Started');
    startButton.classList.add('hide')
    
}