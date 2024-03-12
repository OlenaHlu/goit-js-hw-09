

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const emailData = form.elements.email;
const messageData = form.elements.message;

const keepDataForm = JSON.parse(localStorage.getItem(localStorageKey)) || {
  email: "",
  message: "",
};

emailData.value = keepDataForm.email;
messageData.value = keepDataForm.message;

form.addEventListener('input', saveForm);
function saveForm(event) {
  const formData = {
    email: emailData.value.trim(),
    message: messageData.value.trim(),
  };
  saveFormData(formData);
};

form.addEventListener('submit', getForm);
function getForm(event) {
  event.preventDefault();
  if (emailData.value === "" || messageData.value === "") {
    return alert('Please fill all fields!');
  };
  const formData = {
    email: emailData.value.trim(),
    message: messageData.value.trim(),
  };

  saveFormData(formData);
  console.log(formData);
  form.reset();
  localStorage.removeItem(localStorageKey);
};


function saveFormData(formData) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
