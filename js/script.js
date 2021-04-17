let forms = document.querySelectorAll('.needs-validation');
Array.prototype.slice.call(forms).forEach((form) => {
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  }, false);
});