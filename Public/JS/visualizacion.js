document.getElementById('carta').addEventListener('click', abrir);

function abrir() {
    document.getElementById('tipocarta').style.display = 'block';

}
function cerrar() {
    document.getElementById('tipocarta').style.display = 'none';
    document.getElementById('tipoheroe').style.display = 'none';
    document.getElementById('tipoitem').style.display = 'none';

;
}

function abrir_tipo() {
    document.getElementById('tipoheroe').style.display = 'block';
    document.getElementById('tipocarta').style.display = 'none';
    document.getElementById('tipoitem').style.display = 'block';
    document.getElementById('tipoheroe').style.display = 'none';
}

const swiperEl = document.querySelector('swiper-container')

const params = {
  injectStyles: [`
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }
  `],
  pagination: {
    clickable: true,
    dybanucBullets:3,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
}

Object.assign(swiperEl, params)

swiperEl.initialize();