// add active class to current button and move belt
const stepBtnContainer = document.querySelector('.instruction__stepButtonContainer');
const stepBtns = document.querySelectorAll('.instruction__stepButtonContainer__item');
const instructionBelt = document.querySelector('.instruction__belt');

for(let i=0; i< stepBtns.length; i++){
	stepBtns[i].onclick = function(){
		const current = document.querySelector('.active');
		current.className = current.className.replace(' active', '');
		this.className += ' active';

		if(this.getAttribute('data-LR') === 'right'){
			instructionBelt.style.left = '-100%';	
		}
		else{
			instructionBelt.style.left = '0';
		}
		
	}
}