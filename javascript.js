// function Sclick(){
//     alert("button clicked")
// }

// document.getElementById("btn").addEventListener("click", Hello)
// function Hello(){
//     alert("button function changed")
// }

// // if i want use class for  AddEventLister

// document.querySelector(".btnn").addEventListener('click', function(){
//     alert('clicked using class')
// })

// document.getElementById("pra").addEventListener("click", pra())
// function btns(){
//     document.getElementById("he").innerHTML="he changed"
// }

// function pra(){
   
//     document.getElementById("p").innerHTML="pragraph is now completed";
//     alert('now completed')   
// }


function CompletCourse(btn) {
    const text = btn.previousElementSibling;
    text.innerText = "course completed";
    text.classList.add("completed");
    // CompletCourse(btn)
     // What this means

// You are declaring a function

// btn is a parameter

// It will receive the button that was clicked

// 👉 Why?
// Because you don’t want to hard-code IDs.
// You want the function to work for any button.

//   const text = btn.previousElementSibling;

// 🔍 Why this line is used

// btn = clicked button

// previousElementSibling = the element just before the button

// Your HTML structure:

// <span>course name</span>
// <button>Completed</button>


// So:

// Button’s previous sibling = <span>

// 👉 This is how JS finds the correct course text.

//   text.innerText = "course completed";

// 🔍 What it does

// Replaces the visible text

// Changes UI instantly

// 👉 This is how UI updates happen.

//   text.classList.add("completed");


}

function resetCourse(btn){
  const text = btn.previousElementSibling;
  const original = text.getAttribute('data-orginal');

  text.innerText = original;
  text.classList.remove("completed")
}