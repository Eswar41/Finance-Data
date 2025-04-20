const scriptURL = 'https://script.google.com/macros/s/AKfycbwJ_Z2l8rVFPgODeB9UaEeWKqqpguHJllggKTS6sBLZFs6XM0UCd4PRUrXFN0kg6aKH/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})