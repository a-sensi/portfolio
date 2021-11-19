let mainMenu = `
<div class="icon">
        <div="home-button">
          <img src="https://bl6pap003files.storage.live.com/y4mxxcG2x73ldYr8-xef-pkyGSUT5VUHKl0lP_XHGyrGpWVyt920SsqUQRrGBfADv4-2-6f3mYMRF36TbTT3KKEa9RybifXxNhK2P0CxsCTiIlxkjXlEkLhjxv6ProSYqucMHbyNStDJSKzI9snVWksOcNqPx-MJQo_DNhpxox08NE0H6jWrRjdM8gTo3grTY55?width=500&height=500&cropmode=none" alt="">
      
          <div>
            <p class="top"></p>
            <nav class="menu">
             <ul>
                <li> <a class="home" href="/docs/index.html">Home</a></li>
                <li class="works"><a href="/docs/works">Works</a>
                  <nav class="sub-menu">
                    <a href="/docs/w_illu">Illustration</a>
                    <a href="/docs/w_comic">Comics</a>
                    <a href="/docs/w_animation">Animation</a>
                  </nav>
                </li>
                <li><a class="ow" href="/docs/otherworld">OtherWorld</a></li>
                <li><a class="bio" href="/docs/bio/">Bio</a></li>
                <li><a class="archive" href="/docs/archive">Archive</a></li>
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