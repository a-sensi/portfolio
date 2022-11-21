let mainMenu = `
<a  href="https://www.alexsensiba.com/"><div class="home-house"></div></a>
<div class="icon">
        <div class="home-button">
          <a href="#"> <img src="https://bl6pap003files.storage.live.com/y4mw7OueLfDhSV5Hk-QXLUkx1HZlQRIRZTs01w0DeMD2v2-fBZLMN70XxlgRkvCwWJwwu7b9_0ol8hU4NGWyrC74S9fSUybrStlDOEma3UctH9c6_RlW_aIMI3o4yslOkMA3ebay7JwsObN_2pYweHodG-NGdP5GpZpIIjmauC2T3nBEH9811JN8VryrDRJto4Z?width=500&height=500&cropmode=none" alt="">
          <p class="text"> MENU</p> </a>
        
          <div>
            <p class="top"></p>
            <nav class="menu">
             <ul>
          
                    <a class="illu" href="/illustration/">IMAGES</a>
                    <a class="comic" href="/comics/">PAGES</a>
                    <a class="ani" href="/animation">ANIMATION</a>
                    <a class="ow" href="/otherworld">OtherWorld</a>
                    <a class="bio" href="/bio/">ABOUT</a>
                    <a class="shop" href="/shop/">SHOP</a>
                   
                 
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


/* <a class="archive" href="/archive">ARCHIVE</a> */