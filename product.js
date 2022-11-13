

let selectedproduct = JSON.parse(localStorage.getItem("selectpro"))

const filldata = ()=>{
    let proname = document.querySelector("#proName")
    proname.innerText = selectedproduct[0].p1+" /"
  

    let progender = document.querySelector("#proGender")
    progender.innerText = selectedproduct[0].gender

    let c2h1 = document.querySelector("#c2h1")
    c2h1.innerText = selectedproduct[0].p1
    c2h1.className = "c2h1"

    let c2p = document.querySelector("#c2p")
    c2p.innerText = "Inniza Urban Fabric With High Quality"
    c2p.className = "c2p"

    let c2price = document.querySelector("#c2price")
    c2price.innerText = selectedproduct[0].p3
    c2price.className = "c2price"

    let c2shop = document.querySelector("#c2shop")
    c2shop.innerText = "Shop From 4 Stores"
    c2shop.className = "c2shop"

    let c2ad = document.querySelector("#c2ad")
    c2ad.innerHTML = "<span id='span1'>Join now</span>  to earn up to  <span id='span2'> 110 </span> <span id='span1'>points</span> when you buy"
    c2ad.className = "c2ad"
}
filldata()

const append = () =>{
    
    let img = document.createElement("img")
    img.className = "c1imgage"
    img.src = selectedproduct[0].image[0]
    document.querySelector("#c1img").append(img)
}

append()


let btn1 =  document.querySelector("#btn1")
btn1.addEventListener("click", function(){
    imgInc()
})

let j=1;
const imgInc = () =>{
    let img = document.querySelector(".c1imgage")

   
     let num = selectedproduct[0].image.length
     if(j==num){
        j=0
     }

        img.src = selectedproduct[0].image[j]
        j++

}

let btn2 =  document.querySelector("#btn2")
btn2.addEventListener("click", function(){
    imgDec()
})

let num2 = selectedproduct[0].image.length-1
let k = num2;
const imgDec = () =>{
    console.log("GG")
    let img = document.querySelector(".c1imgage")

     if(k<0){
        k=num2
     }

        img.src = selectedproduct[0].image[k]
        k--

}

let arr1=[

   { id: 1,
    image: selectedproduct[0].image[0],
    p1: selectedproduct[0].p1,
    p2: selectedproduct[0].p2,
    p3: " <span id='span5'> $462 </span> (60% OFF) - $1739 (3 Promotions)",
    p4: "compare 10 stores",
    gender: selectedproduct[0].gender,
},

{ id: 2,
    image: selectedproduct[0].image[0],
    p1: selectedproduct[0].p1,
    p2: selectedproduct[0].p2,
    p3: "<span id='span5'> $105 </span> (74% OFF) - $1470 (2 Promotions)",
    p4: "compare 10 stores",
    gender: selectedproduct[0].gender,
},

{ id: 3,
    image: selectedproduct[0].image[0],
    p1: selectedproduct[0].p1,
    p2: selectedproduct[0].p2,
    p3: "<span id='span5'> $98 </span> (50% OFF) - $1245 (5 Promotions)",
    p4: "compare 10 stores",
    gender: selectedproduct[0].gender,
},


]


    const append2 = () =>{

        arr1.map(function(el){

        let maincard = document.createElement("div")
        maincard.className = "maincard"
        
        let card1 = document.createElement("div")

        let img = document.createElement("img")
        img.className = "lowerDivImg"
        img.src = selectedproduct[0].image[0]
        card1.append(img)

        let card2 = document.createElement("div")
        let h2 = document.createElement("h2")
        h2.className = "lowerdivh2"
        h2.innerText = "Shop Premium Outlets"

        let p1 = document.createElement("p")
        p1.className = "lowerp1"
        p1.innerHTML = el.p3

        let p2 = document.createElement("p")
        p2.className = "lowerp2"
        p2.innerText = "Sign up to see more detail"

       card2.append(h2,p1,p2)

       let card3 = document.createElement("div")
        let btn = document.createElement("button")
        btn.className = "lowerbtn"
        btn.innerText = "VISIT STORE"
        card3.append(btn)

          maincard.append(card1,card2,card3)
         document.querySelector("#lowerDiv").append(maincard)

        })
    }


   
    append2()


    let addbtn = document.querySelector("#add")
     addbtn.addEventListener("click", function(){
        adddetail()
    })

    let arr5 = JSON.parse(localStorage.getItem("addproduct")) || []
   const adddetail = () =>{
     arr5.push(selectedproduct[0])
     localStorage.setItem("addproduct", JSON.stringify(arr5))

    window.location.href = "add.html"
   }
 