const hi = document.getElementById("hi");

hi.style.color = "red";

const hello = document.getElementById("hello");
const java = document.getElementById("java")

let arr = ['hello','java']

for (let i = 0; i < arr.length; i++) {
   /* if (arr > 0) {
      hello.style.color = "blue"
    }
    else {
        java.style.color = "brown"
    }*/
  
    arr[i].style.color = "blue"
}