var countDownDate = new Date("Dec 3, 2023 11:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d";
    document.getElementById("hours").innerHTML = hours + "h";
    document.getElementById("minutes").innerHTML = minutes + "m";
    document.getElementById("seconds").innerHTML = seconds + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-container").innerHTML = "EXPIRED";
    }
}, 1000);

var redirectButton = document.getElementById("register-button");

  redirectButton.addEventListener("click", function() {
      var isConfirmed = window.confirm("Are you sure you want to redirect?");

      if (isConfirmed) {
          var redirectUrl = "https://forms.gle/NJGaPsybFdntKw7w9";
          window.location.href = redirectUrl;
      }
  });