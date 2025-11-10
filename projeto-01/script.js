// Funcionalidade de Busca
const searchInputDesktop = document.getElementById('searchInputDesktop');
const searchInputMobile = document.getElementById('searchInputMobile');
const searchButtonDesktop = document.getElementById('searchButtonDesktop');
const searchButtonMobile = document.getElementById('searchButtonMobile');

const searchMessage = document.createElement('div');
searchMessage.className = 'mx-auto px-4 pb-4 hidden';
searchMessage.innerHTML = '<p class="text-sm text-center"></p>';
const header = document.querySelector('header');
header.appendChild(searchMessage);

function displaySearchResult(input) {
  const searchTerm = input.value.trim();
  if (searchTerm !== '') {
    const messageText = searchMessage.querySelector('p');
    messageText.textContent = `Você buscou por: '${searchTerm}'`;
    searchMessage.classList.remove('hidden');
  }
}

// Desktop
searchInputDesktop.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    displaySearchResult(searchInputDesktop);
  }
});

searchButtonDesktop.addEventListener('click', function () {
  displaySearchResult(searchInputDesktop);
});

searchInputDesktop.addEventListener('input', function () {
  if (searchInputDesktop.value === '') {
    searchMessage.classList.add('hidden');
  }
});

// Mobile
searchInputMobile.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    displaySearchResult(searchInputMobile);
  }
});

searchButtonMobile.addEventListener('click', function () {
  displaySearchResult(searchInputMobile);
});

searchButtonMobile.addEventListener('input', function () {
  if (searchInputMobile.value === '') {
    searchMessage.classList.add('hidden');
  }
});

// Header Mega Menu
const mainNav = document.getElementById('mainNav');
const megaMenu = document.getElementById('megaMenu');
const menuTriggers = document.querySelectorAll('[data-menu-trigger]');

let timeoutId = null;

function showMenu(menuType) {
  const menuCategorias = document.getElementById('menu-categorias');
  const menuDepartamento = document.getElementById('menu-departamento');

  if (menuType === 'categorias') {
    menuCategorias.classList.remove('hidden');
    menuDepartamento.classList.add('hidden');
  } else {
    menuCategorias.classList.add('hidden');
    menuDepartamento.classList.remove('hidden');
  }

  megaMenu.classList.remove('hidden');
}

function hideMenu() {
  timeoutId = setTimeout(() => {
    megaMenu.classList.add('hidden');
  }, 150);
}

menuTriggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', event => {
    clearTimeout(timeoutId);
    const menuId = trigger.getAttribute('data-menu-trigger');

    const menuType = menuId === 'categorias' ? 'categorias' : 'departamento';
    showMenu(menuType);
  });
});

mainNav.addEventListener('mouseleave', hideMenu);
megaMenu.addEventListener('mouseenter', () => clearTimeout(timeoutId));
megaMenu.addEventListener('mouseleave', hideMenu);

// Swiper Slides de Lançamentos
const produtos = [
  {
    id: 1,
    titulo: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    precoOriginal: '100,00',
    precoAtual: '79,90',
    desconto: '10% OFF',
    parcelas: '10x de R$ 7,90',
    imagem: './assets/produto-avanti-Mockup.png',
    novo: true,
  },
  {
    id: 3,
    titulo: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    precoOriginal: '100,00',
    precoAtual: '79,90',
    desconto: '10% OFF',
    parcelas: '10x de R$ 7,90',
    imagem: './assets/produto-avanti-Mockup.png',
    novo: true,
  },
  {
    id: 4,
    titulo: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    precoOriginal: '100,00',
    precoAtual: '79,90',
    desconto: '10% OFF',
    parcelas: '10x de R$ 7,90',
    imagem: './assets/produto-avanti-Mockup.png',
    novo: true,
  },
  {
    id: 5,
    titulo: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    precoOriginal: '100,00',
    precoAtual: '79,90',
    desconto: '10% OFF',
    parcelas: '10x de R$ 7,90',
    imagem: './assets/produto-avanti-Mockup.png',
    novo: true,
  },
  {
    id: 6,
    titulo: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    precoOriginal: '100,00',
    precoAtual: '79,90',
    desconto: '10% OFF',
    parcelas: '10x de R$ 7,90',
    imagem: './assets/produto-avanti-Mockup.png',
    novo: true,
  },
  {
    id: 7,
    titulo: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    precoOriginal: '100,00',
    precoAtual: '79,90',
    desconto: '10% OFF',
    parcelas: '10x de R$ 7,90',
    imagem: './assets/produto-avanti-Mockup.png',
    novo: true,
  },
  {
    id: 8,
    titulo: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit',
    precoOriginal: '100,00',
    precoAtual: '79,90',
    desconto: '10% OFF',
    parcelas: '10x de R$ 7,90',
    imagem: './assets/produto-avanti-Mockup.png',
    novo: true,
  },
];

function criarSlide(produto) {
  return `
    <div class="swiper-slide">
      <div class="bg-white border border-[#DDDDDD] rounded-[10px] overflow-hidden shadow-sm hover:shadow-md transition">
        <div class="relative">
          ${
            produto.novo
              ? '<span class="absolute top-2 left-2 bg-[#00264E] text-white text-[10px] flex items-center justify-center font-bold h-[23px] w-[41px] rounded">NOVO</span>'
              : ''
          }
          <img src="${produto.imagem}" alt="${produto.titulo}" class="w-full h-full" />
        </div>
        
        <div class="pt-[6px] pb-2 px-2">
          <h3 class="text-[#303030] text-sm capitalize">${produto.titulo}</h3>
          
          <div class="flex gap-[14px] lg:gap-2 items-center">
            <div>
              <span class="text-[#303030] line-through text-xs leading-none">R$ ${produto.precoOriginal}</span>
              <p class="font-bold text-base mb-2 leading-none">R$${produto.precoAtual}</p>
            </div>
            
            <span class="bg-[#5EC0BE] underline text-white text-[11px] font-bold px-2 py-1 h-5 flex items-center rounded">
              ${produto.desconto}
            </span>
          </div>
          
          <p class="text-[#303030] text-xs mb-4">Ou em até <strong>${produto.parcelas}</strong></p>
          
          <button class="w-full cursor-pointer bg-[#005CFF] text-white text-sm font-bold py-3 rounded-lg hover:bg-blue-700 transition">
            Comprar
          </button>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const firstSwiperWrapper = document.querySelector('.lancamentosSwiper .swiper-wrapper');
  const secondSwiperWrapper = document.querySelector('.lancamentosSwiperSecond .swiper-wrapper');

  produtos.forEach((produto, index) => {
    firstSwiperWrapper.innerHTML += criarSlide(produto);

    secondSwiperWrapper.innerHTML += criarSlide(produto);
  });

  new Swiper('.lancamentosSwiper', {
    navigation: {
      nextEl: '.swiper-custom-button-next',
      prevEl: '.swiper-custom-button-prev',
    },
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });

  new Swiper('.lancamentosSwiperSecond', {
    navigation: {
      nextEl: '.swiper-custom-button-next',
      prevEl: '.swiper-custom-button-prev',
    },
    slidesPerView: 1.2,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });
});
