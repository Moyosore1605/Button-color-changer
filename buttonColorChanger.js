const allButtons = document.getElementsByTagName('button')
const copyOfButtons = []
const randomColors = ['red','blue','green','orange','yellow','pink']

for (let index = 0; index < allButtons.length; index++) {
    copyOfButtons.push(allButtons[index].style.backgroundColor)
}

const btnColorChange = (params)=>{
    if (params.value == 'reset') {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].style.backgroundColor = `${copyOfButtons[i]}`
        }
    }
    else if (params.value == 'random') {
        for (let i = 0; i < allButtons.length; i++) {
            let indexer = Math.floor(Math.random() * randomColors.length)
            allButtons[i].style.backgroundColor = `${randomColors[indexer]}`
        }
    }
    else{
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].style.backgroundColor = `${params.value}`
        }
    }
}