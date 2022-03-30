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

  //  document.addEventListener("scroll", () => {
  //   closeMenu();
  //   if (window.scrollY || heroSection.scrollTop >= 1) {
  //     header.classList.add('fixed');
  //   } else {
  //     header.classList.remove('fixed');
  //   }
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
    // $(this).addClass("active");
    closeMenu();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });

  // $('.close').click(function () {
  //   parent.$.fancybox.close();
  // });

  const showOnScroll = () => {
    $('.section').each(function () {
      let sectionPos = $(this).offset().top;
      let windowPos = $(window).scrollTop() + $(window).height() / 3;

      if (sectionPos < windowPos) {
        $(this).addClass('show');
      }
    });
  }
  $(window).scroll(function () {
    // showOnScroll();
  });

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