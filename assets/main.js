///////////////////////////////////////////
//ハンバーガーメニュー
//////////////////////////////////////////
$('.hambager').on('click', function () {
  navOpen();
});
let navFlg = false;
function navOpen() {
  if (!navFlg) {
    $('.hamberger-wrap').addClass('is-ham-open');
    $('.mega-menu').addClass('is-megamenu-open');
    $('.header-inner').addClass('is-megamenu-icon');
    $('#header').addClass('is-megamenu-headfix');
    $('.ham-txt').text('CLOSE');
    navFlg = true;
  } else {
    $('.hamberger-wrap').removeClass('is-ham-open');
    $('.mega-menu').removeClass('is-megamenu-open');
    $('.header-inner').removeClass('is-megamenu-icon');
    $('#header').removeClass('is-megamenu-headfix');
    $('.ham-txt').text('MENU');
    navFlg = false;
  }
}


/////////////////////////////////////////
//ハンバーガーメニュー アコーディオン
/////////////////////////////////////////
$(document).ready(function() {
  $(".little-nav").hide();
  $(".nav01 .parent").on('click', function() {
    $(this).toggleClass('active');
    $(this).next('.little-nav').slideToggle(300);
  });
});


///////////////////////////////////////////
//スクロールフェードイン
///////////////////////////////////////////
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: '0px',
  threshold: 0.6
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}

///////////////////////////////////////////
//TOP タブ
///////////////////////////////////////////
const tabMenus = document.querySelectorAll('.tab_menu-item');
console.log(tabMenus);

tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})

function tabSwitch(e) {
  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab_menu');
  console.log(tabList);
  const tabItems = tabList.querySelectorAll('.tab_menu-item');
  console.log(tabItems);
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab_panel-box');
  console.log(tabPanelItems);

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is-active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is-show');
  })

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is-active');
  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is-show');
    }
  })

}


///////////////////////////////////////////
//FAQ アコーディオン
///////////////////////////////////////////
$(".qa-list dd").hide();
$(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});



//////////////////////////////////////////////////////////////////////////////
//各Swiperイベントの初期化
//////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', (event) => {

  //トップMVスライダー
  const swiper = new Swiper(".mv-swiper", {
    loop: true, // ループ
    speed: 2000, // 少しゆっくり(デフォルトは300)
    slidesPerView: 1.1, // 一度に表示する枚数
    centeredSlides: true, // アクティブなスライドを中央にする
    breakpoints: {
      769: {
        slidesPerView: 1.15,
      }
    },
    autoplay: {
      // 自動再生
      delay: 4000, // 1秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //TOP　商品一覧スライダー
  var rankingswiper; 
  $(window).on('load resize', function(){
      var w = $(window).width();
      if (w <= 1100) {
        if (rankingswiper) {
          return;
        } else {
          rankingswiper = new Swiper('.ranking-swiper', {
            autoplay: {
              delay: 3000,
            },
            scrollbar: {
              el: '.swiper-scrollbar', //要素指定
            },
            mousewheel: {
              forceToAxis: true,
              sensitivity: 3
            },
            breakpoints: {
              360: {
                slidesPerView: 2.4,
                spaceBetween: 15,
              },
              769: {
                slidesPerView: 4,
                spaceBetween: 50,
              }
            },
          });
        }
      } else {
        const itemlistswiper = new Swiper('.ranking-swiper', {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 50,
          mousewheel: {
            forceToAxis: true,
            sensitivity: 3
          },
        });
      } 
  });


  //TOP　無限スライダー
  const visualswiper = new Swiper(".sec-visual-swiper", {
    loop: true, // ループ有効
    slidesPerView: 2, // 一度に表示する枚数
    speed: 7000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      }
    },
  });


  // //商品詳細 おすすめ
  var itemdetail_recommendswiper; 
  $(window).on('load resize', function(){
      var w = $(window).width();
      if (w <= 1100) {
        if (itemdetail_recommendswiper) {
          return;
        } else {
          itemdetail_recommendswiper = new Swiper('.recommend_swiper', {
            autoplay: {
              delay: 3000,
            },
            scrollbar: {
              el: '.swiper-scrollbar', //要素指定
            },
            breakpoints: {
              360: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 20,
              }
            },
          });
        }
      } else {
          if (itemdetail_recommendswiper) {
            itemdetail_recommendswiper.destroy();
            itemdetail_recommendswiper = undefined;
          } 
      } 
  });


});



(function () {
  const jsText = document.querySelectorAll('.anime-ttl01');
  jsText.forEach(target => {
    let newText = '';
    const text = target.innerHTML;  
    const result = text.split('');
    for (let i = 0; i < result.length; i++) {
      // <br>タグを検出した場合
      if (result[i] === '<' && result[i + 1] === 'b' && result[i + 2] === 'r' && result[i + 3] === '>') {
          newText += '<br>';
          i += 3;  // <br>の残りの部分をスキップする
      } else {
          newText += '<span>' + result[i] + '</span>';
      }
    }
    target.innerHTML = newText;
  });
})();


////////////////////////////////////////////////////////////////////////////////////////
// GSAPアニメーション
///////////////////////////////////////////////////////////////////////////////////////
//テキストアニメ
document.querySelectorAll('.anime-ttl01').forEach(function(elem) {
  gsap.to(elem.querySelectorAll('span'), {
    y: 0,
    stagger: 0.05,
    duration: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: elem,
      start: 'top 90%'
    }
  });
});

//順番にフェードイン
document.querySelectorAll('.fade_triger').forEach(trigger => {
  gsap.fromTo(trigger.querySelectorAll('.anime-fade'), 
    { opacity: 0, y: -10 }, 
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5, // 順番にフェードインする間隔
      scrollTrigger: {
        trigger: trigger,
        start: "top 50%", 
      }
    }
  );
});


// HOW TOの追従バーのアニメーション
gsap.utils.toArray('.howto-contents .block').forEach((block, i) => {
  // ScrollTriggerの設定
  ScrollTrigger.create({
    trigger: block,
    start: "top 40%", // トリガー要素のトップが画面の40%に達したとき
    endTrigger: block,
    end: "bottom 50%", // トリガー要素のボトムが画面の60%に達したとき
    onEnter: () => setActiveStep(i), // 要素が画面に入ったとき
    onEnterBack: () => setActiveStep(i), // 逆スクロールで要素のボトムが画面の60%に達したとき
    onLeave: () => clearActiveStep(i), // 要素が画面から離れたとき（下にスクロール）
    onLeaveBack: () => clearActiveStep(i), // 逆スクロールで要素が画面から離れたとき（上にスクロール）
    toggleActions: "restart pause reverse pause"
  });
});

// アクティブなステップを設定する関数
function setActiveStep(index) {
  // すべてのステップを非アクティブにする
  document.querySelectorAll('.step-list .box').forEach((box) => {
    gsap.to(box, {opacity: 0.5, duration: 0.3});
  });

  // アクティブなステップをハイライト
  const activeStep = document.querySelector(`.step-list .step0${index + 1}`);
  if (activeStep) {
    gsap.to(activeStep, {opacity: 1, duration: 0.3});
  }
}

// アクティブなステップをクリアする関数
function clearActiveStep(index) {
  const activeStep = document.querySelector(`.step-list .step0${index + 1}`);
  if (activeStep) {
    gsap.to(activeStep, {opacity: 0.5, duration: 0.3});
  }
}
