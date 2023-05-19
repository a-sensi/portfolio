let mainMenu = `<link rel="shortcut icon" href="/docs/scripts/ow-menu.js/images/star_04.png">
<div class=title>
<div class="ow">
<a href="/otherworld/"><img src="https://bl6pap003files.storage.live.com/y4m1ceYDHX1UTMurJlAWuhJHHNHT3sXy2IG6F4vnGWKkn_RnAztC8rBOKeBkAgId0DRjJLb2ZRGtceQqe6OJaPlz1nHkI6Zp-j95PHnFifKWshxSAALcYEVJVKgeEIr_y9GD-AFgCnXHhH66pPgtJa-BMelf7uOPeBF6HotHRj-LOsRfbj5H9zqNHrrja1k-f4e?width=909&height=228&cropmode=none" alt=""></a>
</div>

<nav class="ow-menu-block">
  <ul>
    <li class="read"><a href="#">Read</a>
    <nav class="ow-read-menu">
    <a id="pro" href="/otherworld/page-1">Prologue</a>
    <a id="one" href="/otherworld/page-6">Chapter 1</a>
    <a id="two" href="/otherworld/page-11">Chapter 2</a>
    <a id="three" href="/otherworld/page-26">Chapter 3</a>
  </nav></li>
    <li class="short"><a href="#">Short Stories</a>
      <nav class="ow-sub-menu">
        <a id="sub" href="/otherworld/short-stories/cover-1">To Die, To Sleep</a>
      </nav>
    </li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
</div>
`
$('.ow-menu').append(mainMenu);

$('.short').click(function() {
    $('.ow-sub-menu').toggle();
    
    
  })
  $('.read').click(function() {
    $('.ow-read-menu').toggle();
    
    
  })