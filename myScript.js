const  currentLocation= location.href;
const menuList = document.querySelectorAll('a');
const menuLength = menuList.length;
for ( let i=0; i < menuLength; i++){
  if(menuList[i].href === currentLocation){
      menuList[i].className = "active"
  }}