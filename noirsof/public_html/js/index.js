$(".nav-item").click(function(){
   $(".nav-item").removeClass('active');
   $(this).addClass('active');
});



var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

window.sr = ScrollReveal({ reset: false });
sr.reveal('.portfolio', {
    duration:2000,
    useDelay: 'always'
});

sr.reveal('.main', {
    duration:2000,
    useDelay: 'always',
    origin: 'bottom'
});

sr.reveal('.about', {
    duration:2000,
    useDelay: 'always',
    origin: 'bottom'
});