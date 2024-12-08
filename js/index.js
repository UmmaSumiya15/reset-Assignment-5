// All variables

const historyButton = document.getElementById('history-el');
const donationPage = document.getElementById('donation-el');
const donationBtn = document.getElementById('donation_btn');
const balance = document.getElementById('balance-el');

// All button functionality

historyButton.addEventListener('click', function () {
  historyButton.classList.remove('text-[#111111B2]', 'border');
  donationPage.classList.remove('text-black', 'primary_btn_bg');
  activeBtn(historyButton);
  primaryBtn(donationPage);
  document.getElementById('donation_container').classList.add('hidden');
  document.getElementById('history_container').classList.remove('hidden');
});

donationPage.addEventListener('click', function () {
  donationPage.classList.remove('text-[#111111B2]', 'border');
  historyButton.classList.remove('text-black', 'primary_btn_bg');
  activeBtn(donationPage);
  primaryBtn(historyButton);
  document.getElementById('donation_container').classList.remove('hidden');
  document.getElementById('history_container').classList.add('hidden');
});

document.getElementById('donation_btn').addEventListener('click', function () {
  donatedInfo('noakhali-input', 'noakhali-total', 'donation-noakhali');
});

document
  .getElementById('donation_btn_feni')
  .addEventListener('click', function () {
    donatedInfo('feni-input', 'feni-total', 'donation-feni');
  });

document
  .getElementById('donation_btn_quota')
  .addEventListener('click', function () {
    donatedInfo('quota-input', 'quota-total', 'donation-quota');
  });

document.getElementById('blog').addEventListener('click', function () {
  window.location.href = '../blog.html';
});

