totalPrice = 0;

object1 = {
	name: "Margherita Pizza",
	price: 9.99,
	orderTime: 0
}

$('#item1plus').on('click',function(){
	totalPrice += object1.price;
	object1.orderTime += 1;
	if (object1.orderTime > 1){
		
		$("#it1").text(object1.orderTime);
		$('#li1').remove();
		$('ul').append('<li id="li1">' + object1.name + ' x' + object1.orderTime + '</li>');

	} else {
		$("#it1").text(object1.orderTime);
		$('ul').append('<li id="li1">' + object1.name + ' x' + object1.orderTime + '</li>');
	}
	console.log(totalPrice)
	

})


$('#item1minus').on('click',function(){
	totalPrice -= object1.price;
	if(object1.orderTime > 0) {
		if(object1.orderTime - 1 === 0){
			object1.orderTime -= 1;
			$('#li1').remove();
			$("#it1").text(object1.orderTime);
		} else {
			object1.orderTime -= 1;
			$("#it1").text(object1.orderTime);
			$('#li1').remove();
			$('ul').append('<li id="li1">' + object1.name + ' x' + object1.orderTime + '</li>');
		}
	}


	console.log(totalPrice);
})



