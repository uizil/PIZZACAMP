var ItemsArray = [];



var x1 = 0;
var p1 = 0;
$('#item1plus').on('click',function(){
	$("#it1").text(x1 = x1 + 1);
	//ItemsArray.push($('#title1').text())
    //x1 = x1 + 1;
    y = x1.toString()
    console.log(y)
	$('ul').append($('<li>'+ $("#title1").text()+'</li>') + x1)

})

$('#item1minus').on('click',function(){
	if (x1 > 0){
	$("#it1").text(x1 = x1 - 1);	
}

})


