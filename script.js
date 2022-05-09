
$("button").click(function(){
    let answer1=$(".questionOne").val();
    let answer2=$(".questionTwo").val();
    let answer3=$(".questionThree").val();
     $(".fortune-display").append("If you eat "+ answer1 + answer2+" candies in a week" +" then you will have to do "+answer3 +" hours of exercise");
});
