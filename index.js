const mainNode = document.querySelector('main#main');
if (mainNode) {
  mainNode.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Tess is the champion';



