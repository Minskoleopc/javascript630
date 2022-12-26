let addButton = document.querySelector('#addButton')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')

console.log(addButton)
console.log(inputText)
console.log(ulList)
ulList.addEventListener('click',function(e){
    // console.log(e.target)
    // console.log(e.target.tagName)
    // console.log(e.target.className)

    if(e.target.tagName === "BUTTON"){

        if(e.target.className == "remove"){
           let li =  e.target.parentElement
           let ul = li.parentElement
           ul.removeChild(li)

        }
        else if(e.target.className == "up"){
            let li =  e.target.parentElement
            let ul = li.parentElement
            let preLi = li.previousElementSibling
            if(preLi){
                ul.insertBefore(li,preLi)
            }
        }
        else if(e.target.className == "down"){
            let li =  e.target.parentElement
            let ul = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ul.insertBefore(nextLi,li)
            }
        }


    }





})






addButton.addEventListener('click',function(){
    let text = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text
    // adding buttons to new element
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = " "
})

function createButtons(li){

    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.className = "remove"  // <button class = "remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement('button') 
    u.textContent = "Up"
    u.className = "up"
    li.appendChild(u)

    let d = document.createElement('button') 
    d.textContent = "Down"
    d.className = "down"
    li.appendChild(d)

}