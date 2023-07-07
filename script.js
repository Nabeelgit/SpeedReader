const form = document.querySelector('.inp-form');
const text_inp = document.getElementById('text_inp');
const speed_inp = document.getElementById('speed_inp')
const text = document.querySelector('.text')
const start_view = document.getElementById('start_view');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(text_inp.value !== '' && speed_inp.value !== ''){
        if(isNaN(speed_inp.value)){
            alert('Speed has to be an integer!')
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
        }, parseInt(speed_inp.value) * 1000)
    }
})