function cardValidator(value) {

  let nCheck = 0;
  let nDigit;
  let bEven = false;
  value = value.replace(/\D/g, '');

  for (let n = value.length - 1; n >= 0; n--) {
    let cDigit = value.charAt(n);
    nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) == 0;
}
// let n_card = '5553 4810 4762 8666';
module.exports = cardValidator;