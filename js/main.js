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