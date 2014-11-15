var extraList = document.querySelector('extras-list');

extraList.addEventListener('core-select', function() {
  console.log(document.querySelector('extras-list').coeff);
});