const DOM = {
  tabsNav: document.querySelector('.tabs__nav'),
  tabsNavItems: document.querySelectorAll('.tabs__nav-item') };


//set active element
const setActiveItem = elem => {

  DOM.tabsNavItems.forEach(el => {

    el.classList.remove('js-active');

  });

  elem.classList.add('js-active');

};

//find active element
const findActiveItem = () => {

  let activeIndex = 0;

  for (let i = 0; i < DOM.tabsNavItems.length; i++) {

    if (DOM.tabsNavItems[i].classList.contains('js-active')) {
      activeIndex = i;
      break;
    };

  };

  return activeIndex;

};

//find active elements parameters: left coord, width
const findActiveItemParams = activeItemIndex => {

  const activeTab = DOM.tabsNavItems[activeItemIndex];

  //width of elem
  const activeItemWidth = activeTab.offsetWidth;

  //left coord in the tab navigation
  const activeItemOffset_left = activeTab.offsetLeft;

  return [activeItemWidth, activeItemOffset_left];

};

//appending decoration block to an active element
const appendDecorationNav = () => {

  //creating decoration element
  let decorationElem = document.createElement('div');

  decorationElem.classList.add('tabs__nav-decoration');
  decorationElem.classList.add('js-decoration');

  //appending decoration element to navigation
  DOM.tabsNav.append(decorationElem);

  //appending styles to decoration element
  return decorationElem;
};

//appending styles to decoration element
const styleDecorElem = (elem, decorWidth, decorOffset) => {
  elem.style.width = `${decorWidth}px`;
  elem.style.transform = `translateX(${decorOffset}px)`;
};

//onload function
window.addEventListener('load', () => {

  //find active tab
  const activeItem = findActiveItem();

  //find active tab params
  const [decorWidth, decorOffset] = findActiveItemParams(activeItem);

  //appending decoration element to an active elem
  const decorElem = appendDecorationNav();

  //setting styles to the decoration elem
  styleDecorElem(decorElem, decorWidth, decorOffset);
});