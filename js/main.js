

$( document ).ready(function() {
    $("#header").arctext({radius: 940});
    var data = { loop: true, in: {effect: 'flipInX', sync: true, shuffle: false}, out: {effect: 'flipOutX', sync: true, shuffle: false} };
		$('.shifter').textillate(data);
});