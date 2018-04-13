 size();
    window.onresize=function(){
      size();
    };
    function size(){
      var html=document.getElementsByTagName('html')[0];
      html.style.fontSize=10*(window.innerWidth/320)+"px";
      if(window.innerWidth=="320px"){
        window.innerWidth="320px";
      }
    }