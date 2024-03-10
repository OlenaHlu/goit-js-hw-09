
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';


const saveForm = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const restoreForm = () => {
  const saveData = localStorage.getItem('feedback-form-state');
    if (saveData) {
      const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }
};

form.addEventListener('input', saveForm);

form.addEventListener('submit', event => {
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
     if (form.elements.email.value === ''|| form.elements.message.value === '') {
    alert('Please fill all fields!');
    };
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };
    console.log(formData);

    form.reset();
});


