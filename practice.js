
let counter = 0;
let isRenderModal = true;
renderModal();

function renderModal() {
  // получаем id для нового элемента, который будем добавлять на экран
  let newId = '' + new Date().getTime();

  // получаем ширину и высоту экрана
  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;

  const modalTitle = document.createElement('div');
  modalTitle.classList.add('modalTitle');
  modalTitle.style.width = `${300}px`;
  const modalTitleLeft = String(( viewportWidth / 2 ) - ( Number(modalTitle.style.width.slice(0, 3)) / 2 ));
  modalTitle.style = `
    width: ${ modalTitle.style.width };
    left: ${ modalTitleLeft }px;`;
  modalTitle.id = newId;
  modalTitle.innerHTML = `
    <div style="
      font-size: 26px;
      font-weight: bold;">
        Modal Title
    </div>
    <div style="
      margin-top: 8px;">
      This is a modal
    </div>
    <div style="
      margin-top: 10px;">
      <button class="js-close-modal">
        Close
      </button>
    </div>
    <button class="js-button-plus">+</button>
    `;
  
  document.body.appendChild(modalTitle);
  document.body.classList.add('body-modal');

  document.querySelector('.js-close-modal').addEventListener('click', () => {
    document.querySelector('.modalTitle').remove();
    document.body.classList.remove('body-modal');
    isRenderModal = false;
  });

  document.querySelector('.js-button-plus').addEventListener('click', () => {
    counter ++;
    console.log(counter);
  });

}

document.querySelector('.js-side-bar-button-1').addEventListener('click', () => {
  if (!isRenderModal) {
    renderModal();
    isRenderModal = true;
  }
});


/* поиск по URL в поисковой строке*/
const inputText = document.querySelector('.js-input-search');
const buttonSearch = document.querySelector('.js-button-search');

buttonSearch.addEventListener('click', () => {
  window.open(inputText.value, '', 'width: 320px; height: 120px;');
});


// slide-side-bar

let isBarSlided = false;
let slideSideBar = document.querySelector('.js-slide-side-bar');
let buttonSlide = document.querySelector('.js-side-bar-button-2');
let intervalID;
slideSideBar.style.left = `0px`;

buttonSlide.addEventListener('click', () => {
  slideBar();
});

function slideBar() {
  intervalID = setInterval(function run() {
    if( !isBarSlided ) {
      if( Number(slideSideBar.style.left.slice(0, -2)) >= 100) {
        slideSideBar.style.left = `100px`;
        document.body.style.paddingLeft = `150px`;
        clearInterval(intervalID);
        isBarSlided = true;
      } else {
        slideSideBar.style.left = String(Number(slideSideBar.style.left.slice(0, -2)) + 1) + 'px';
        document.body.style.paddingLeft = String(Number(document.body.style.paddingLeft.slice(0, -2)) + 1) + 'px';
      } 
    } else {
      if( Number(slideSideBar.style.left.slice(0, -2)) <= 0) {
        slideSideBar.style.left = `0px`;
        document.body.style.paddingLeft = `50px`;
        clearInterval(intervalID);
        isBarSlided = false;
      } else {
        slideSideBar.style.left = String(Number(slideSideBar.style.left.slice(0, -2)) - 1) + 'px';
        document.body.style.paddingLeft = String(Number(document.body.style.paddingLeft.slice(0, -2)) - 1) + 'px';
      } 
    }

    console.log(slideSideBar.style.left);
  }, 1);
}
