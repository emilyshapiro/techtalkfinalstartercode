// JavaScript File
// JavaScript File
$( document ).ready(function() {

$(".submit").click(function() {
    var answer = $("input").val();
    console.log("button click");
    if (answer==="yes") {
    alert("Of course you are!");
    console.log("yes");
    }
    else if (answer==="no"){
    alert ("Try again, there is only one other option");
    }
      else {
    alert ("Come on friend, it is a yes or no question");
    }
});

$(".season").click(function(){
    $(".body").css("background-image",'url("http://dreamatico.com/data_images/summer/summer-5.jpg")');
});


});