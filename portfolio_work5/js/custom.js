var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',15);
  } else clearTimeout(t);
  return false;
}


$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 999,
      values: [ 0, 999 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});


/* select style */
var params = {
    changedEl: "select",
    visRows: 5,
    scrollArrows: true
}
cuSel(params);