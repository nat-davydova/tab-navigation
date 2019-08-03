const DOM = {
  tabsNav: document.querySelector('.tabs__nav'),
  tabsNavItems: document.querySelectorAll('.tabs__nav-item') };


//find active element
const findActiveTab = () => {

  let activeIndex = 0;

  for (let i = 0; i < DOM.tabsNavItems.length; i++) {

    if (DOM.tabsNavItems[i].classList.contains('js-active')) {
      activeIndex = i;
      break;
    };

  };

  return activeIndex;

};

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

  //find active tab
  const activeTab = findActiveTab();

  //appending decoration element to an active elem
  appendDecorationNav();

});