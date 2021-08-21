// We can acess element using document
console.log(document);
console.log(document.title);
document.title="DOM_Basics"
console.log(document.title);

// Selectors in DOM
// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTags
// 4. querySelector
// 5. querySelectorAll

 let heading=document.getElementById("dom1");
 console.log(heading);

 let heading1=document.getElementsByTagName("h1")
 console.log(heading1);

 let sample=document.getElementsByClassName("box1")
 console.log(sample);

 let sample1=document.getElementsByClassName("box2")
 console.log(sample1);

 let p1=document.querySelector("#dom1")
 console.log(p1);

 let p2=document.querySelector("p")
 console.log(p2);

 let p3=document.querySelectorAll("p")
 console.log(p3);

 let p4=document.querySelectorAll("h1")
 console.log(p4);




 let parentE1 = document.getElementById("parent");
 console.log(parentE1.childNodes);

 //first elementchild
 console.log(parentE1.firstElementChild);

 //last elementchild
 console.log(parentE1.lastElementChild);

 // firstchild
 console.log(parentE1.firstChild);

 //lastchild
 console.log(parentE1.lastChild);

 console.log(parentE1.children[3]);

 let midPE1 = document.getElementById("midParagraph");
 console.log(midPE1);

 console.log(midE1.nextElementSibling);

 console.log(midE1.previousElementSibling);


 let midPE1 = document.getElementById("middle");
 console.log(pE1.parentElement);

