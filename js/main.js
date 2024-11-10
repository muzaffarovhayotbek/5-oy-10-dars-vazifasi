const btn = document.querySelector('.btn button');
const firstInput = document.querySelector('.first-input');
const twoInput = document.querySelector('.two-input');

function validate(firstInput, twoInput) {
  if (twoInput.value !== '123456') {
    alert('password no`to`g`ri "123456" bo`lishi kerak');
    return false;
  }
  return true;
}

btn.addEventListener('click', function (event) {
  event.preventDefault();

  const isValid = validate(firstInput, twoInput);
  if (!isValid) {
    return;
  }

  window.location.href = 'pages/home.html';
});
