var prices= [];
var names= [];

$(".submit").click(function() {
    var newName= $(".name").val();
    var newPrice= $(".prices").val();
    var newPhoto=$(".photo").val();
    names.push(newName);
    $(".title3").append("<br>"+"<li>" + " " +newName + "</li>");
    $(".title4").append("<br>" + "<li> " +newPrice +"$"+ "</li>");
    $(".title2").append("<br>"+"<li>"+"<img src=" +newPhoto + ">"+ "</li>");
    var number=names.length;
    $(".nametotal").text("There are"+ " " +number + " " + "items in cart");
    prices.push(newPrice);
var total=0;
prices.forEach(function(price) {
total=total+parseInt(price);
$(".amount").text(parseInt(total));
 
});
});


$(".enter").click(function() {
 alert("Thank you for your order of" + " "+names[0]);
});

