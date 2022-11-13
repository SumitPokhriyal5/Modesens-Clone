let addproduct = JSON.parse(localStorage.getItem("addproduct"))

console.log(addproduct)


const append =(data)=>{
    data.map(function(el,i){

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

        let btn2 = document.createElement("button")
        btn2.className = "btn2"
        btn2.innerText = "REMOVE"
        btn2.addEventListener("click",function(event){
          event.target.parentNode.remove()
          removeitem(i)
        })
       
        card.append(img,p1,p2,p3,btn,btn2)
        document.querySelector("#container").append(card)
    })
}
 append(addproduct)


let totalitem = document.querySelector("#totalitem")
   totalitem.innerText = addproduct.length

 const removeitem = async(i) =>{
  addproduct.splice(i,1)
 

  localStorage.setItem("addproduct", JSON.stringify(addproduct))
  window.location.reload()
 }
let sum=0;
for(let i=0;i<addproduct.length;i++){

    sum+= addproduct[i].price
    console.log(sum)
    document.querySelector("#totalprice").innerText = " $"+sum
}