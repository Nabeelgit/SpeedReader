const form = document.querySelector('.inp-form');
const text_inp = document.getElementById('text_inp');
const speed_inp = document.getElementById('speed_inp');
const text = document.querySelector('.text');
const start_view = document.getElementById('start_view');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(text_inp.value !== '' && speed_inp.value !== ''){
        // Ensure the input is a number and greater than 0
        let interval = parseFloat(speed_inp.value);
        if(isNaN(interval) || interval <= 0){
            alert('Please enter a positive number for the seconds!');
            return false;
        }
        let text_arr = text_inp.value.split(' ');    
        start_view.style.display = 'none';
        let i = 1;
        text.innerText = text_arr[0];
        let int = setInterval(function(){
            if(i < text_arr.length) {
                text.innerText = text_arr[i];
            } else {
                start_view.style.display = 'block';
                text.innerText = '';
                clearInterval(int);
            }
            i++;
        }, interval * 1000)  // Using the interval as a float
    }
});
