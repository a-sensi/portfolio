let mainMenu = `
<div class=title>
<div class="ow">
  <img src="https://bl6pap003files.storage.live.com/y4m1ceYDHX1UTMurJlAWuhJHHNHT3sXy2IG6F4vnGWKkn_RnAztC8rBOKeBkAgId0DRjJLb2ZRGtceQqe6OJaPlz1nHkI6Zp-j95PHnFifKWshxSAALcYEVJVKgeEIr_y9GD-AFgCnXHhH66pPgtJa-BMelf7uOPeBF6HotHRj-LOsRfbj5H9zqNHrrja1k-f4e?width=909&height=228&cropmode=none" alt="">
</div>

<nav class="ow-menu-block">
  <ul>
    <li><a href="/portfolio/otherworld/cover-1">Read</a></li>
    <li class="short"><a href="#">Short Stories</a>
      <nav class="ow-sub-menu">
        <a href="/portfolio/shorts/cover-1">To Die, To Sleep</a>
      </nav>
    </li>
    <li><a href="/portfolio/about">About</a></li>
  </ul>
</nav>
</div>
`
$('.ow-menu').append(mainMenu);

$('.short').click(function() {
    $('.ow-sub-menu').toggle();
    
    
  })