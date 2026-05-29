const donationForm = document.querySelector("#donationForm");
const formResult = document.querySelector("#formResult");
const currencyFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

donationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(donationForm);
  const name = formData.get("name").toString().trim() || "Donatur baik";
  const amount = Number(formData.get("amount"));
  const program = formData.get("programChoice");

  formResult.textContent = `Terima kasih, ${name}! Donasi ${currencyFormatter.format(amount)} untuk ${program} sudah dicatat.`;
  donationForm.reset();
});
