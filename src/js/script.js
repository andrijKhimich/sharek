const burger = document.querySelector(".js-burger");
const menu = document.querySelector(".js-menu");
const body = document.querySelector("body");
const header = document.querySelector(".js-header");
const heroSection = document.querySelector(".hero");

const showContent = () => {
  document.querySelector(".main-wrapper").classList.remove("js-fadeIn");
}

document.addEventListener("DOMContentLoaded", () => {
  showContent();

  const openMenu = () => {
    burger.classList.add('active');
    menu.classList.add('active');
    body.classList.add('fixed-body');
  }

  const closeMenu = () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('fixed-body');
  }

  burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });


  const acc = document.querySelectorAll(".faq__btn");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      let item = this.parentElement;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        item.classList.remove("active")
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        item.classList.add("active")
      }
    });
  }


  if (window.scrollY >= 1) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }

  document.addEventListener("scroll", (e) => {
    if (window.scrollY >= 1) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });


  const mixContent = document.querySelector(".js-mix");
  const btnStandart = document.querySelector("#btnStandartMix");
  const modals = document.querySelectorAll(".modal");
  const formTemplate = document.querySelector(".form-content");
  const btnPlus = document.querySelector(".js-plus");

  const btnClean = document.querySelector("#btnCleanMix");
  const formBtn = document.querySelector(".form-modal-1 .btn")


  formTemplate.addEventListener("click", (event) => {
    if (event.target.classList.contains("active") && event.target.tagName === "IMG") {
      event.target.classList.remove('active');
      formTemplate.removeChild(formTemplate.lastChild);
    } else if (event.target.tagName === "IMG") {
      event.target.classList.add("active");
      const inputTemplate =
        `<div class="form-box">
          <input type="text" placeholder="Keep your wallet:" class="form-input js-input">
        </div>`;
      formTemplate.innerHTML += inputTemplate;
    }
  });


  btnStandart.addEventListener("click", e => {
    e.preventDefault();
    mixContent.classList.add("hidden");
    let btnHref = btnStandart.getAttribute("href");
    for (let i = 0; i <= modals.length; i++) {
      console.log(modals[i].getAttribute("id"));
      if (btnHref === modals[i].getAttribute("id")) {
        modals[i].classList.add("active");
        break
      }
    }
  });

  btnClean.addEventListener("click", e => {
    e.preventDefault();
    mixContent.classList.add("hidden");
    let btnHref = btnClean.getAttribute("href");
    for (let i = 0; i <= modals.length; i++) {
      console.log(modals[i].getAttribute("id"));
      if (btnHref === modals[i].getAttribute("id")) {
        modals[i].classList.add("active");
        break
      }
    }
  });


  const btnCopy = document.querySelectorAll(".js-copy");

  btnCopy.forEach((btn) => {
    btn.addEventListener("click", () => {
      var copyText = btn.nextElementSibling;
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
      navigator.clipboard.writeText(copyText.value);
      const copyPopup = document.querySelector(".copy-text");
      copyPopup.classList.add("show");
      setTimeout(() => {
        copyPopup.classList.remove("show");
      }, 2000);
    })
  })

  document.querySelectorAll('.js-btn-modal').forEach(btn => {
    btn.addEventListener('click', e => {
      //handle click
      e.preventDefault();
      // modals.classList.remove("active");
      modals.forEach(modal => {
        modal.classList.remove("active")
      });
      let btnHref = btn.getAttribute("href");
      for (let i = 0; i <= modals.length; i++) {
        console.log(modals[i].getAttribute("id"));
        if (btnHref === modals[i].getAttribute("id")) {
          modals[i].classList.add("active");
          break
        }
      }
    })
  })
  // btnModal.addEventListener("click", e => {

  // });


  // jQuery for scrolling
  // const sectionArray = [1, 2, 3, 4, 5, 6, 7, 8];

  // $.each(sectionArray, function (index, value) {

  //   $(document).scroll(function () {
  //     const offsetSection = $('#' + 'section_' + value).offset().top;
  //     const docScroll = $(document).scrollTop();
  //     const docScroll1 = docScroll + 1;


  //     if (docScroll1 >= offsetSection) {
  //       $('.nav-list li a').removeClass('active');
  //       $('.nav-list li a').addClass('inactive');
  //       $('.nav-list li a').eq(index).addClass('active');
  //       $('.nav-list li a').eq(index).removeClass('inactive');
  //     }
  //   });

  //   $('.nav li a').eq(index).click(function (e) {
  //     const offsetClick = $('#' + 'section_' + value).offset().top;
  //     e.preventDefault();
  //     $('html, body').animate({
  //       'scrollTop': offsetClick
  //     }, 1000)
  //   });
  // });

  // $(document).ready(function () {
  //   $('.nav-list li a:link').addClass('inactive');
  //   $('.nav-list li a').eq(0).addClass('active');
  //   $('.nav-list li a:link').eq(0).removeClass('inactive');
  // });

  $('.scroll-btn[href^="#"], .nav-list__link[href^="#"]').on('click', function (e) {
    e.preventDefault();
    closeMenu();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });

  // $('.close').click(function () {
  //   parent.$.fancybox.close();
  // });

  // const showOnScroll = () => {
  //   $('.section').each(function () {
  //     let sectionPos = $(this).offset().top;
  //     let windowPos = $(window).scrollTop() + $(window).height() / 3;

  //     if (sectionPos < windowPos) {
  //       $(this).addClass('show');
  //     }
  //   });
  // }
  // $(window).scroll(function () {
  // showOnScroll();
  // });

  // $("")

  function newsSlider() {
    $('.news-slider').slick({
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 1.82,
      slidesToScroll: 1,
      arrows: false,
      cssEase: ' cubic-bezier(.6, 0, .41, 1)',
      responsive: [{
          breakpoint: 993,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 601,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
  newsSlider();



  // monitor graphic functionality 

  const labels = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: '',
      backgroundColor: 'rgba(5,94,255, .2)',
      borderColor: '#055EFF',
      fill: true,
      data: [30, 10, 5, 2, 20, 30, 45, 10, 20, 30, 0, 11, 28, 42, 100],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false
        },
      },
      labels: {
        display: false,
      },
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
});