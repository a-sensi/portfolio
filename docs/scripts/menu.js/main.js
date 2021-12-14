let mainMenu = `
<a  href="/index.html"><div class="home-house"></div></a>
<div class="icon">
        <div class="home-button">
          <a href="#"> <img src="https://bl6pap003files.storage.live.com/y4mxxcG2x73ldYr8-xef-pkyGSUT5VUHKl0lP_XHGyrGpWVyt920SsqUQRrGBfADv4-2-6f3mYMRF36TbTT3KKEa9RybifXxNhK2P0CxsCTiIlxkjXlEkLhjxv6ProSYqucMHbyNStDJSKzI9snVWksOcNqPx-MJQo_DNhpxox08NE0H6jWrRjdM8gTo3grTY55?width=500&height=500&cropmode=none" alt="">
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


