let mainMenu = `
<a  href="/index.html"><div class="home-house"></div></a>
<div class="icon">
        <div class="home-button">
          <a href="#"> <img src="https://bl6pap003files.storage.live.com/y4mAbga2uWWAJni_DRgtPa8rTQTEBMeRsgimCYHrb2sw8EcdXKxupXCmLqwwJcMGhc-DF30WOuFwdLYNCzgRrYqonpzStILLCpW9HcVYD4_IDo91u17AQNsjJ_RKyPMElLbn-FIhaMwPObffZ04xcdSRnoPr_mU-xR8__OudGVO4Og4lL3ONG7ejlc6t8EvFCMc?width=500&height=500&cropmode=none" alt="">
          <p class="text"> MENU</p> </a>
        
          <div>
            <p class="top"></p>
            <nav class="menu">
             <ul>
          
                    <a class="illu" href="/illustration/">Illustration</a>
                    <a class="comic" href="/comics/">Comics</a>
                    <a class="ani" href="/animation">Animation</a>
                    <a class="ow" href="/otherworld/cover-1">OtherWorld</a>
                    <a class="bio" href="/bio/">Bio</a>
                    <a class="archive" href="/archive">Archive</a>
                 
                </li>
              
              </ul>
            </nav>
      
          </div>
         </div>
    </div>

`



$('header').append(mainMenu);

$('.icon').click(function() {
  $('.menu').toggle();
  
  
})

// <li class="works"><a href="#">Works</a>


