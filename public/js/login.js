$(function(){

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        data-interval: false,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    
});

$(function () {
    $(".closebtn").on('click', function() {
        $('#it').modal('hide');
    });
});
/*
<<<<<<< HEAD

Password checker
  function checkPassword(str)
  {
    var re = .{6,}$/;
    return re.test(str);
  }
=======
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");
>>>>>>> js_login

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
<<<<<<< HEAD

=======
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
>>>>>>> js_login

*/
