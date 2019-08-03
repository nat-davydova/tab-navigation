const DOM = {
  tabsNav: document.querySelector('.tabs__nav') };


//appending decoration block to an active element
const appendDecorationNav = () => {

  //creating decoration element
  let decorationElem = document.createElement('div');

  decorationElem.classList.add('tabs__nav-decoration');
  decorationElem.classList.add('js-decoration');

  //appending element to navigation
  DOM.tabsNav.append(decorationElem);


};

//onload function
window.addEventListener('load', () => {

  //appending decoration element to an active elem
  appendDecorationNav();

});