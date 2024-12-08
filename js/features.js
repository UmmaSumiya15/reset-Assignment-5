function activeBtn(id) {
    id.classList.add('text-black', 'primary_btn_bg');
  }
  
  function primaryBtn(id) {
    id.classList.add('text-[#111111B2]', 'border');
  }
  
  function donatedInfo(inp, have, place) {
    const donationPlace = document.getElementById(place).innerText;
    const inputEl = document.getElementById(inp).value;
    const inputNumber = parseFloat(document.getElementById(inp).value);
    const balanceNumber = parseFloat(balance.innerText);
    const donationAmountTotal = parseFloat(
      document.getElementById(have).innerText
    );
  
    if (
      isNaN(inputNumber) ||
      isNaN(inputEl) ||
      inputNumber <= 0 ||
      inputNumber > balanceNumber
    ) {
      alert('Please enter valid number');
      document.getElementById(inp).value = '';
      return;
    } else {
      const time = new Date();
      const history = document.getElementById('history_container');
      const total = donationAmountTotal + inputNumber;
      document.getElementById(have).innerText = total;
      document.getElementById(inp).value = '';
      balance.innerText = balanceNumber - inputNumber;
      document.getElementById('my_modal_5').showModal();
      history.innerHTML += `
      <div class="border rounded-xl p-6">
            <h1 class="font-bold text-xl"> ${inputNumber} Taka is ${donationPlace}</h1>
            <p class="text-base font-light text-[#111111B2] bg-gray-100 rounded-xl p-4 mt-4"> Date: ${time}</p>
           </div>
      `;
    }
  }