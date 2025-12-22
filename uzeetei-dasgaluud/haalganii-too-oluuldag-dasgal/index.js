function clearDoor() {
  document.getElementById('orts').value = '';
  document.getElementById('davhar').value = '';
  document.getElementById('haalga-per-davhar').value = '';
  document.getElementById('target-haalga').value = '';
  const output = document.getElementById('door-output');
  output.innerHTML = '';
  output.classList.remove('show');
}

function findDoor() {
  const m = parseInt(document.getElementById('orts').value);
  const k = parseInt(document.getElementById('davhar').value);
  const o = parseInt(document.getElementById('haalga-per-davhar').value);
  const n = parseInt(document.getElementById('target-haalga').value);
  const output = document.getElementById('door-output');

  if (isNaN(m) || isNaN(k) || isNaN(o) || isNaN(n)) {
    output.innerHTML = 'Бүх талбарыг бөглөнө үү';
    output.classList.add('show');
    return;
  }

  const haalgaPerOrts = k * o;
  const totalHaalga = m * haalgaPerOrts;

  if (n < 1 || n > totalHaalga) {
    output.innerHTML = `Хаалга олдсонгүй. Нийт ${totalHaalga} хаалга байна.`;
    output.classList.add('show');
    return;
  }

  for (let orts = 1; orts <= m; orts++) {
    for (let davhar = 1; davhar <= k; davhar++) {
      for (let haalga = 1; haalga <= o; haalga++) {
        const currentNumber = (orts - 1) * haalgaPerOrts + (davhar - 1) * o + haalga;
        if (currentNumber === n) {
          output.innerHTML = `${orts}-р орцны ${davhar} давхарын ${haalga}-дэх хаалга`;
          output.classList.add('show');
          return;
        }
      }
    }
  }
}