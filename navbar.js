console.log('kid page navbar')
const search_tab = document.getElementById("search_tab");
search_tab.onclick = ()=>{
    console.log('enkoke search tab')
    const search_bar = document.getElementById('search_bar');
    search_bar.style.transitionProperty='width';
    search_bar.style.transitionDuration='2s'
    search_bar.style.display='block';
    search_bar.style.width=' 675px'

    const search_dropDown = document.getElementById('search_dropDown')
    setInterval(()=>{
        search_dropDown.style.display='block'
        search_dropDown.style.width='655px';
        search_dropDown.style.height='500px'
        search_dropDown.style.top='42px'
        search_dropDown.style.right='8px'
        search_dropDown.style.background='white'

    },400)


    const search_dropDown_cards = document.getElementById('search_dropDown_cards');

    // const image = document.createElement('img');
    // image.style.border='2px solid red'
    // image.style.marginRight='50px'
    // image.src='https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493bznzc194dt2f41d07paep2o7a72yb35vc3i6y9pq1&rid=200w.gif&ct=g'

    // search_dropDown_cards.append(image);
    setInterval=(()=>{
        // image.style.display='none'
        const search_dropDown_cards = document.getElementById('search_dropDown_cards');


        search_dropDown_cards.style.display='flex'

        const div1 = document.createElement('div');
        const image1 = document.createElement('img')
        image1.src = 'https://cdn.modesens.com/product/24969443_44?w=100'
        const heading1 = document.createRange('h4');
        const about1 = document.createElement('p')
        div1.append(image1,heading1, about1);

        const div2 = document.createElement('div');
        const image2 = document.createElement('img')
        image2.src = 'https://cdn.modesens.com/product/24969443_44?w=100'
        const heading2 = document.createRange('h4');
        const about2 = document.createElement('p');
        div2.append(image2,heading2, about3);

        const div3 = document.createElement('div');
        const image3 = document.createElement('img');
        image3.src = 'https://cdn.modesens.com/product/24969443_44?w=100'
        const heading3 = document.createRange('h4');
        const about3 = document.createElement('p')
        div1.append(image1,heading1, about1);

        const div4 = document.createElement('div');
        const image4 = document.createElement('img');
        image4.src = 'https://cdn.modesens.com/product/24969443_44?w=100'
        const heading4 = document.createRange('h4');
        const about4 = document.createElement('p');
        div1.append(image4,heading4, about4);

        search_dropDown_cards.append(div1, div2, div3, div4)

    },300)



}



// window.ondblclick=()=>{
//     const search_bar = document.getElementById('search_bar');
//     console.log('hello')
//     const search_dropDown = document.getElementById('search_dropDown');
//     search_dropDown.style.height='0px'
//     search_dropDown.style.width='0px'
//     search_dropDown.style.display='none';

//     setInterval(()=>{
//         console.log('hello after 1 min')
//         search_bar.style.display='none'
//         search_bar.style.width='0px'
//     },400)
    
// }

{/* <img src="https://cdn.modesens.com/product/24969443_44?w=100" alt="">
<h5>JW ANDERSON</h5>
<p>12 Stores</p>
</div>
<div>
<img src="https://cdn.modesens.com/availability/54374604?w=100" alt="">
<h5>ETRO</h5>
<p>19 Stores</p>
</div>
<div>
<img src="https://cdn.modesens.com/availability/38255770?w=100" alt="">
<h5>JW ANDERSON</h5>
<p>17 Stores</p>
</div>
<div>
<img src="https://cdn.modesens.com/product/45454045_6?w=100" alt="">
<h5>Etro</h5>
<p>16 Stores</p>
</div> */}