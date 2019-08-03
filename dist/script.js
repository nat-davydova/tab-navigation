const DOM = {
  tabsNav: document.querySelector('.tabs__nav'),
  tabsNavItems: document.querySelectorAll('.tabs__nav-item'),
  panels: document.querySelectorAll('.tabs__panel') };


//set active nav element
const setActiveItem = elem => {

  DOM.tabsNavItems.forEach(el => {

    el.classList.remove('js-active');

  });

  elem.classList.add('js-active');

};

//find active nav element
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

//find active nav elements parameters: left coord, width
const findActiveItemParams = activeItemIndex => {

  const activeTab = DOM.tabsNavItems[activeItemIndex];

  //width of elem
  const activeItemWidth = activeTab.offsetWidth - 1;

  //left coord in the tab navigation
  const activeItemOffset_left = activeTab.offsetLeft;

  return [activeItemWidth, activeItemOffset_left];

};

//appending decoration block to an active nav element
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

//appending styles to decoration nav element
const styleDecorElem = (elem, decorWidth, decorOffset) => {
  elem.style.width = `${decorWidth}px`;
  elem.style.transform = `translateX(${decorOffset}px)`;
};

//find active panel
const findActivePanel = index => {

  return DOM.panels[index];

};

//set active panel class
const setActivePanel = index => {

  DOM.panels.forEach(el => {

    el.classList.remove('js-active');

  });

  DOM.panels[index].classList.add('js-active');

};

//onload function
window.addEventListener('load', () => {

  //find active nav item
  const activeItemIndex = findActiveItem();

  //find active nav item params
  const [decorWidth, decorOffset] = findActiveItemParams(activeItemIndex);

  //appending decoration element to an active elem
  const decorElem = appendDecorationNav();

  //setting styles to the decoration elem
  styleDecorElem(decorElem, decorWidth, decorOffset);

  //find active panel
  findActivePanel(activeItemIndex);

  //set active panel
  setActivePanel(activeItemIndex);
});

//click nav item function
DOM.tabsNav.addEventListener('click', e => {

  const navElemClass = 'tabs__nav-item';

  //check if we click on a nav item
  if (e.target.classList.contains(navElemClass)) {

    const clickedTab = e.target;

    const activeItemIndex = Array.from(DOM.tabsNavItems).indexOf(clickedTab);

    //set active nav item
    setActiveItem(clickedTab);

    //find active nav item
    const activeItem = findActiveItem();

    //find active nav item params
    const [decorWidth, decorOffset] = findActiveItemParams(activeItem);

    //setting styles to the decoration elem
    const decorElem = document.querySelector('.js-decoration');

    styleDecorElem(decorElem, decorWidth, decorOffset);

    //find active panel
    findActivePanel(activeItemIndex);

    //set active panel
    setActivePanel(activeItemIndex);

  }

});