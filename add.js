let addproduct = JSON.parse(localStorage.getItem("addproduct"))

console.log(addproduct)
const append =()=>{
    addproduct.map(function(el){

        let card = document.createElement("div")
        card.className = "card"
       
        let img = document.createElement("img")
        img.className = "image"
        img.src = el.image
        let p1 = document.createElement("p")
        p1.className = "p1"
        p1.innerText = el.p1
  
        let p2 = document.createElement("p")
          p2.className = "p2"
          p2.innerText = el.p2
  
        let p3 = document.createElement("p")
        p3.className = "p3"
        p3.innerText = el.p3
  
        
        let btn = document.createElement("button")
        btn.className = "btn"
        btn.innerText = "BOOK NOW"
       
        card.append(img,p1,p2,p3,btn)
        document.querySelector("#container").append(card)
    })
}
append()
let totalitem = document.querySelector("#totalitem")
totalitem.innerText = addproduct.length