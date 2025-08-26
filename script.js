function getid(id) {
  return document.getElementById(id);
}
// travels method
// let btns = document.getElementsByClassName('btn');
// for (let btn of btns) {
//   btn.addEventListener('click', function () {
//     let cartImg = btn.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
//     let cartTitle = btn.parentNode.parentNode.childNodes[3].innerText;
//     let cartPrice = btn.parentNode.parentNode.childNodes[5].childNodes[0].innerText;
      
//     let totalPrice = getid('total-price');
//     let pay = Number(totalPrice.innerText) + Number(cartPrice);
//     totalPrice.innerText = pay;

//     let quantity = getid('quantity');
//     let quantityNum=Number(quantity.innerText)
//     quantity.innerText = quantityNum+1;
//     let card = document.createElement('div');
//     card.innerHTML = `<div class="flex justify-between items-center bg-white p-5 mt-4 rounded-xl">
//             <img src="${cartImg}" alt="" class="w-14">
//             <div>
//               <h1 class="text-xl font-bold">${cartTitle}</h1>
//               <p class="text-gray-400"><span>${cartPrice}</span> TK</p>
//             </div>
//           </div>`;
//     getid('container').appendChild(card);
//   })
// }

// getid('reset-btn').addEventListener('click', function () {
//   getid('container').innerText = "";
//   getid('total-price').innerText = 0;
//   getid('quantity').innerText = 0;
// })

getid('card-container').addEventListener('click', function (e) {
  if (e.target.className.includes('btn')) {
    let btn = e.target;
    let cartImg =
      btn.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
    let cartTitle = btn.parentNode.parentNode.childNodes[3].innerText;
    let cartPrice =
      btn.parentNode.parentNode.childNodes[5].childNodes[0].innerText;

    let totalPrice = getid('total-price');
    let pay = Number(totalPrice.innerText) + Number(cartPrice);
    totalPrice.innerText = pay;

    let quantity = getid('quantity');
    let quantityNum = Number(quantity.innerText);
    quantity.innerText = quantityNum + 1;
    let card = document.createElement('div');
    card.innerHTML = `<div class="flex justify-between items-center bg-white p-5 mt-4 rounded-xl">
            <img src="${cartImg}" alt="" class="w-14">
            <div>
              <h1 class="text-xl font-bold">${cartTitle}</h1>
              <p class="text-gray-400"><span>${cartPrice}</span> TK</p>
            </div>
          </div>`;
    getid('container').appendChild(card);

    getid('reset-btn').addEventListener('click', function () {
      getid('container').innerText = "";
      getid('total-price').innerText = 0;
      getid('quantity').innerText = 0;
    })
  }
  })


