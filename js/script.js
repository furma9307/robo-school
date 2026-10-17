// Элементы
const burgerBtn = document.getElementById('burgerBtn');
const nav = document.getElementById('nav');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');
const leadForm = document.getElementById('leadForm');

// Открытие модального окна по любая кнопке с классом
document.querySelectorAll('#openModalBtn, .open-course-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
  });
});

// Закрытие модалки
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});

// Бургер меню
if (burgerBtn) {
  burgerBtn.addEventListener('click', () => nav.classList.toggle('active'));
}

// Отправка формы
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Заявка отправлена!');
    modal.classList.remove('active');
    leadForm.reset();
  });
}