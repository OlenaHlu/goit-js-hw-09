import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),s="feedback-form-state",o=e.elements.email,m=e.elements.message,l=JSON.parse(localStorage.getItem(s))||{email:"",message:""};o.value=l.email;m.value=l.message;e.addEventListener("input",n);function n(a){const t={email:o.value.trim(),message:m.value.trim()};r(t)}e.addEventListener("submit",i);function i(a){if(a.preventDefault(),o.value===""||m.value==="")return alert("Please fill all fields!");const t={email:o.value.trim(),message:m.value.trim()};r(t),console.log(t),e.reset(),localStorage.removeItem(s)}function r(a){localStorage.setItem("feedback-form-state",JSON.stringify(a))}
//# sourceMappingURL=commonHelpers2.js.map
