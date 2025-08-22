// script.js
const cards = document.querySelectorAll('.product-card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.btn-close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalTitle.innerText = card.dataset.title;
    modalImg.src = card.dataset.img;
    modalPrice.innerText = card.dataset.price;
    modalDesc.innerText = card.dataset.desc;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

// Example actions for Add to Cart and Buy Now (simple console actions)
document.querySelectorAll('.btn-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const title = modalTitle.innerText;
    console.log(`${title} added to cart`);
    alert(`${title} added to cart`);
  });
});
document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', () => {
    const title = modalTitle.innerText;
    console.log(`Proceed to buy ${title}`);
    alert(`Proceed to buy ${title}`);
  });
});
