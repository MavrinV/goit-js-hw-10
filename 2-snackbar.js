import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as s}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",function(i){i.preventDefault();const t=parseInt(this.elements.delay.value),o=this.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{o==="fulfilled"?e(t):r(t)},t)}).then(e=>{s.success({title:"Успіх",message:`✅ Проміс виконано через ${e} мс`})}).catch(e=>{s.error({title:"Помилка",message:`❌ Проміс відхилено через ${e} мс`})})});
//# sourceMappingURL=2-snackbar.js.map
