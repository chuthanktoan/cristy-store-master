$('.slider_background2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    });
    var mainmenu = document.querySelector('.main_menu')
    var bars1 = document.querySelector('.fa-bars');
    var bars2 = document.querySelector('.fa-x')
    var submenu = document.querySelector('.sub_menu');
    console.log(bars1);
    bars1.onclick= function(e){
        bars1.style.display = 'none';
        bars2.style.display = 'block';
        submenu.classList.remove('hidden');
       
    }
    bars2.onclick= function(e){
        bars2.style.display = 'none';
        bars1.style.display = 'block';
        submenu.classList.add('hidden');
     }
    var loaded = document.querySelector('.loaded');
    window.onload = function(){
        loaded.style.display = "none";
    }
    var searchInput = document.querySelector('.search')
    searchInput.oninput = function(e){
       return console.log(e.target.value);
    }

    var buyBtns = document.querySelectorAll('.js-buy-product');
    var number = document.querySelector('.number');
    var count = 0;
    for(const buyBtn of buyBtns){
        buyBtn.addEventListener('click', function(){
            count = count+1;
            number.innerText = count;
        })
    }
        

