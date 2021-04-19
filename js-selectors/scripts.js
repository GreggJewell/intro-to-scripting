// Target a html node by ID
// document.getElementById("welcome-title")

// Target a html node by ClassName
// document.getElementsByClassName("orange-text")

// document.querySelector('#learnings').innerText = "I can change the rendered text"

// Target the FIRST seen html node
// document.querySelector('span').innerHTML = "JS SPAN"

// Retrieve a node-list of all the targeted html nodes
// var links = document.querySelectorAll('.link')

// links.style.border = "5px solid white"
// error: Cannot set property 'border' of undefined   // but why?

// var inputElementsNodeList = document.querySelectorAll('input')
// inputElementsNodeList[0].setAttribute('placeholder', 'override placeholder')

// var secondInputElement = inputElementsNodeList[1]
// secondInputElement.value = "New value"





var req = new XMLHttpRequest()

req.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(req.response)
    }
})
req.open('get', 'https://cat-fact.herokuapp.com/facts')
req.send()

