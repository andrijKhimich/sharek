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
  const btnClean = document.querySelector("#btnCleanMix");
  const btnStandartHero = document.querySelector("#btnStandartMixHero");
  const btnCleanHero = document.querySelector("#btnCleanMixHero");
  const modals = document.querySelectorAll(".modal");
  const formTemplate = document.querySelector(".form-content");
  const btnStatus = document.querySelector(".btn_status");


  btnStatus.addEventListener("click", e => {
    e.preventDefault();
    btnStatus.classList.add("cheking");
    setTimeout(() => {
      btnStatus.classList.remove("cheking");
    }, 3000);
  });


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
      // console.log(modals[i].getAttribute("id"));
      if (btnHref === modals[i].getAttribute("id")) {
        modals[i].classList.add("active");
        break
      }
    }
  });

  btnStandartHero.addEventListener("click", e => {
    // e.preventDefault();
    mixContent.classList.add("hidden");
    let btnHref = btnStandartHero.getAttribute("data-href");
    for (let i = 0; i <= modals.length; i++) {
      // console.log(modals[i].getAttribute("id"));
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
      // console.log(modals[i].getAttribute("id"));
      if (btnHref === modals[i].getAttribute("id")) {
        modals[i].classList.add("active");
        break
      }
    }
  });

  btnCleanHero.addEventListener("click", e => {
    // e.preventDefault();
    mixContent.classList.add("hidden");
    let btnHref = btnCleanHero.getAttribute("data-href");
    for (let i = 0; i <= modals.length; i++) {
      // console.log(modals[i].getAttribute("id"));
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

  $('.scroll-btn[href^="#"], .nav-list__link[href^="#"]').on('click', function (e) {
    e.preventDefault();
    closeMenu();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });


  // function newsSlider() {
  //   $('.news-slider')



  // }
  const slider = $(".news-slider");
  slider.slick({
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    cssEase: ' cubic-bezier(.6, 0, .41, 1)',
    responsive: [{
        breakpoint: 1281,
        settings: {
          slidesToShow: 1.3
        }
      },
      {
        breakpoint: 1025,
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

  slider.on('wheel', (function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));


  // monitor graphic functionality 

  const labels = [
    '0',
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
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ];

  const data = {
    labels: labels,
    datasets: [{
      fill: true,
      data: [0, 28, 27, 24, 26, 27, 30, 32, 31, 32, 30, 28, 33, 30, 32, 29, 32, 34, 30, 29, 36, 31, 34, 35, 32, 30, 28, 33, 30, 32, 29],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      maintainAspectRatio: false,
      elements: {
        line: {
          borderWidth: 2,
          borderColor: "#055EFF",
          backgroundColor: "rgba(5,94,255, .2)",
        },
        point: {
          radius: 10,
          borderWidth: 6,
          borderColor: "rgba(0,0,0,0)",
          backgroundColor: "rgba(0,0,0,0)",
          hoverRadius: 10,
          hoverBorderWidth: 6,
          hoverBackgroundColor: "#ffffff",
          hoverBorderColor: "#055EFF",
        },
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          position: 'nearest',
          enabled: true,
          backgroundColor: "#323334",
          padding: 16,
          cornerRadius: 3,
          borderWidth: 1,
          borderColor: "#055EFF",
          boxWidth: 0,
          boxHeight: 0,
          titleColor: "#999A9A",
          caretSize: 5,
          titleFont: {
            size: 12,
            weight: "normal",
          },
          bodyFont: {
            size: 20,
            weight: "bold",
            family: "Circular Std",
          },

          callbacks: {
            title: function () {
              return "Total portfolio:";
            },
            label: function (context) {
              let label = context.dataset.label || '';

              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US ', {
                  style: ' currency',
                  currency: ' USD'
                }).format(context.parsed.y);
              }
              return label;
            }
          }
        },
      },
      // plugins: [showTooltip],
      labels: {
        display: false,
      },
      scales: {
        y: {
          ticks: {
            display: false,
          }
        },
        x: {
          ticks: {
            display: false,
          }
        }
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
});