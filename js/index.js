// function of adding a class to all elements by class
function add_class(name_el, name_class){
  document.querySelectorAll(name_el).forEach(
    function(el){
      el.classList.add(name_class)
    })
}

// adding a class by clicking on a tab step
function add_class_on_click(name_el, name_class){
  document.querySelectorAll(name_el).forEach(function(el){
    el.addEventListener('click', function(event){
      if(!event.target.classList.contains(name_class)){
        const path = event.currentTarget.dataset.path;
        document.querySelector(`.${name_class}`).classList.remove(name_class)
        event.target.classList.add(name_class)
        document.querySelector('.block-tabs_active').classList.remove('block-tabs_active')
        document.querySelector(`[data-target="${path}"]`).classList.add('block-tabs_active')
      }
    })
  })
}

// add or delete class
function add_delete_class(name_el, name_class){
  document.querySelector(name_el).classList.toggle(name_class)
}

// show or hide hidden block
function display_block(name_block){
  display_serch_bar = document.querySelector(name_block).style.display
  if(!display_serch_bar || display_serch_bar == 'none'){
    document.querySelector(name_block).style.display = 'flex'
    document.querySelector(name_block).style.opacity = '1'
  }
  else {
    document.querySelector(name_block).style.display = 'none'
    document.querySelector(name_block).style.opacity = '0'
  }
}

function fixed_aria_label(name_block, text_ariaLabel){
  let classList_drop = document.querySelector('.drop-down').classList,
      el = document.querySelector(name_block)
  if(classList_drop.contains('drop-down_close')){

    el.setAttribute('aria-label', 'кнопка свернуть меню')
  }
  else{
    el.setAttribute('aria-label', text_ariaLabel)
  }
}

function add_delete_attribute_ariaHidden(name_block){
  el = document.querySelector(name_block)
  if(el.hasAttribute('aria-hidden')){
    el.removeAttribute('aria-hidden')
  }
  else{
    el.setAttribute('aria-hidden', 'true')
  }
}

window.addEventListener('DOMContentLoaded', function(){
      // slider Swiper
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

      // JQuery accordion
      $(".accordion").accordion({
        heightStyle: "content",
        active: false,
        collapsible: true
      });
  const buttonMob_text_ariaLabel = document.querySelector('.header__mob-menu').getAttribute('aria-label')
  add_class('.banner .swiper-pagination-bullet', 'banner__bullet')
  add_class_on_click('.tabs-nav__step', 'tabs-nav__step_active')
  add_class('.ui-accordion-header-icon', 'circle')
  document.querySelector('.header__mob-menu').addEventListener('click', () => {
    add_delete_class('.nav-list', 'mob-menu-to-right')
    add_delete_class('.drop-down', 'drop-down_close')
    fixed_aria_label('.header__mob-menu', buttonMob_text_ariaLabel)
    add_delete_attribute_ariaHidden('.search-bar')
  })
  document.querySelectorAll('.nav-list__link').forEach(function(el){
    el.addEventListener('click', function(event){
      add_delete_class('.nav-list', 'mob-menu-to-right')
      add_delete_class('.drop-down', 'drop-down_close')

    })
  })
  window.addEventListener('resize', () => {
    add_delete_attribute_ariaHidden_resize('.nav-list')
  });
  document.querySelector('.search').addEventListener('click', () => {
    display_block('.search-bar')
    add_delete_attribute_ariaHidden('.search-bar')
  })
  document.querySelector('.search-bar__button-search-close').addEventListener('click', () => {
    display_block('.search-bar')
    add_delete_attribute_ariaHidden('.search-bar')
  })
})
