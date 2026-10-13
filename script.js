let cart=[],total=0,currentProd={name:"",price:0};
function addToCart(name,price){cart.push({name,price}); total+=price; updateCart(); showToast();}
function updateCart(){document.getElementById('cartCount').innerText=cart.length; let h=""; cart.forEach((i,idx)=>{h+=`<div><span>${i.name}</span><b>Rs.${i.price}</b></div>`}); document.getElementById('cartItems').innerHTML=h||"Bag is empty"; document.getElementById('totalPrice').innerText=total;}
function showToast(){let t=document.getElementById('toast'); t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800);}
function openQuick(name,price){currentProd={name,price}; document.getElementById('quickName').innerText=name; document.getElementById('quickPrice').innerText='Rs. '+price; document.getElementById('quickModal').classList.add('show');}
document.getElementById('closeQuick').onclick=()=>document.getElementById('quickModal').classList.remove('show');
document.getElementById('quickAddBtn').onclick=()=>{addToCart(currentProd.name,currentProd.price); document.getElementById('quickModal').classList.remove('show');};
document.getElementById('cartBtn').onclick=()=>document.getElementById('cartModal').classList.add('show');
document.getElementById('closeCart').onclick=()=>document.getElementById('cartModal').classList.remove('show');
document.getElementById('checkoutBtn').onclick=()=>{if(cart.length==0){alert("Bag is empty");return;} let m=`Hello NOVA, New Order:%0A`; cart.forEach(i=>m+=`- ${i.name} Rs.${i.price}%0A`); m+=`%0ATotal: Rs.${total}%0A%0ASize: M (example)`; window.open(`https://wa.me/923000000000?text=${m}`,"_blank");};
document.querySelectorAll('.filter').forEach(b=>{b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active')); b.classList.add('active'); let c=b.dataset.filter; document.querySelectorAll('.f-product').forEach(p=>{p.style.display=(c=="all"||p.dataset.cat==c)?"block":"none"})}});
document.querySelectorAll('.sizes button').forEach(s=>{s.onclick=()=>{document.querySelectorAll('.sizes button').forEach(x=>x.classList.remove('active')); s.classList.add('active');}});
document.querySelector('.news-form button').onclick=()=>{alert("Thanks! 10% OFF code: NOVA10");};