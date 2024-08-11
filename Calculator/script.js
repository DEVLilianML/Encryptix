document.addEventListener('DOMContentLoaded', function () {
   const display = document.getElementById('display');
   const buttons = document.querySelectorAll('.btn');
   const clearButton = document.getElementById('clear');

   buttons.forEach(button => {
       button.addEventListener('click', function () {
           const value = this.getAttribute('data-value');

           if (value === '=') {
               try{
                  display.innerText = eval(display.innerText);
               } catch{
                   display.innerText = "Error message"
               }
               return;

            }
            display.innerText += value;
        });
    });
    clearButton.addEventListener('click', function () {
        display.innerText = '';
    });

});