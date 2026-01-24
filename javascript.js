function Sclick(){
    alert("button clicked")
}

document.getElementById("btn").addEventListener("click", Hello)
function Hello(){
    alert("button function changed")
}

// if i want use class for  AddEventLister

document.querySelector(".btn").addEventListener('click', function(){
    alert('clicked using class')
})