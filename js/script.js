window.addEventListener('DOMContentLoaded', function() {

    let marker = document.querySelectorAll('.marker'),
        popup = document.querySelectorAll('.popup'),
        map = document.querySelector('.map-bg'),
        btnToggle = document.querySelectorAll('.btn-secondary'),
        burger = document.querySelector('.burger'),
        menu = document.querySelector('.ul');

    function hidePopup(a) {
        for(let i = a; i < popup.length; i++) {
            popup[i].classList.remove('show');
            popup[i].classList.add('hide')
        }
    }
    function toggle(b) {
        for(let i = b; i < btnToggle.length; i++) {
            btnToggle[i].classList.remove('active');
        }
    }
    for(let i = 0; i < btnToggle.length; i++) {
        btnToggle[i].addEventListener('click', function() {
            toggle(0);
            btnToggle[i].classList.add('active');
        });
    }

    for(let i = 0; i < marker.length; i++) {
        marker[i].addEventListener('click', function() {
            if (popup[i].classList.contains('hide')) {
                hidePopup(0);
                popup[i].classList.remove('hide');
                popup[i].classList.add('show');
            }
            else {
                hidePopup(i);
            }
        });
    }

    map.addEventListener('click', function (event) {
        if (event.target.classList.contains('.popup') || event.target.classList.contains('.marker')) return;
        else {
            for(let i = 0; i < popup.length; i++) {
                popup[i].classList.remove('show');
                popup[i].classList.add('hide');
            }
        }
    });

    burger.addEventListener('click', function() {
        if (burger.classList.contains('burger_active')) {
            burger.classList.remove('burger_active');
            menu.classList.remove('ul_active');
        }
        else {
            burger.classList.add('burger_active');
            menu.classList.add('ul_active');
        }
    });

});