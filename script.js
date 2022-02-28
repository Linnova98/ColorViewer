function copy(element, isCD=false){
  if (document.getElementById('chk').checked) {
    if (isCD == true) {
      navigator.clipboard.writeText('var(--c-d-' + element.innerHTML + ')');
    }
    else {navigator.clipboard.writeText('var(--c-m-' + element.innerHTML + ')');}
  } else {
      navigator.clipboard.writeText(element.innerHTML);
  }
}
/*function copy2(element) {
  if (document.getElementById('chk').checked) {
      navigator.clipboard.writeText('var(--c-m-' + element.innerHTML + ')');
  } else {
      navigator.clipboard.writeText(element.innerHTML);
  }
}
function copyDiscord(element) {
  if (document.getElementById('chk').checked) {
      navigator.clipboard.writeText('var(--c-d-' + element.innerHTML + ')');
  } else {
      navigator.clipboard.writeText(element.innerHTML);
  }
}*/