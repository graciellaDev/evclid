function testWebP(elem) {
  const webP = new Image();
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

  webP.onload = webP.onerror = function () {
    webP.height === 2 ? elem.classList.add('webp-true') : elem.classList.add('webp-false');
  };
}

function testAvif(elem) {
  const avif = new Image();
  avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABwAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACRtZGF0EgAKCBgANogQEDQgMg4YQAAAUXAAAcV0bpqgHg==';

  avif.onload = avif.onerror = function () {
    avif.height === 2 ? elem.classList.add('avif-true') : elem.classList.add('avif-false');
  };
}

testWebP(document.querySelector('.banner__slide_img_1'));
testAvif(document.querySelector('.banner__slide_img_1'));
testWebP(document.querySelector('.banner__slide_img_2'));
testAvif(document.querySelector('.banner__slide_img_2'));
testWebP(document.querySelector('.banner__slide_img_3'));
testAvif(document.querySelector('.banner__slide_img_3'));
testWebP(document.querySelector('.info-img'));
testAvif(document.querySelector('.info-img'));
testWebP(document.querySelector('.block-tabs__col_img_1'));
testAvif(document.querySelector('.block-tabs__col_img_1'));
testWebP(document.querySelector('.block-tabs__col_img_2'));
testAvif(document.querySelector('.block-tabs__col_img_2'));
testWebP(document.querySelector('.block-tabs__col_img_3'));
testAvif(document.querySelector('.block-tabs__col_img_3'));
testWebP(document.querySelector('.block-tabs__col_img_4'));
testAvif(document.querySelector('.block-tabs__col_img_4'));
