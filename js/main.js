const mattgit = document.querySelector("#mattGithub");
mattgit.addEventListener("click", function(){
    window.open("https://github.com/metaversedance");
})

const jingit = document.querySelector("#jinGithub");
jingit.addEventListener("click", function(){
      window.open("https://github.com/jinredhub");
})

// wake up heroku
$.ajax({url: "https://vrooms-editor.herokuapp.com/"});

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