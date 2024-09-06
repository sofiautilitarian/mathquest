$(document).ready(function () {
    var count = 0;
    var n = 0;
    function func1() {
        n = Math.floor(Math.random() * 20);
    }
    function func3() {
        var x = Math.floor(Math.random() * 3) + 1;
        $('.img').attr('src', 'img' + x + '.png');
    }
    func3();
    func1();
    func2(n);
    var correctAnswers = {
        0: "0.33",
        1: "3.3",
        2: "2.889",
        3: "5",
        4: "100",
        5: "0.345",
        6: "33",
        7: "567",
        8: "Thirteen thousand and two hundred and nine",
        9: "One hundred and nineteen thousand and nine",
        10: "70502",
        11: "115965",
        12: "10",
        13: "100",
        14: "100",
        15: "2.2597",
        16: "1998.1998",
        17: "hundredths",
        18: "tenths",
        19: "thousandths"
    };

    var audio = new Audio('wrong.mp3'); // Initialize audio
    var audio1 = new Audio('right.mp3');
    var originalBackgroundColor = $('body').css('background-color'); // Store original background color




    // Function to handle answer clicks
    function handleAnswerClick(event) {
        var selectedAnswer = $(event.target).text();
        var correctAnswer = correctAnswers[n];
        if (selectedAnswer === correctAnswer) {
            $('body').css('background-color', 'green');
            audio1.play();
            count++; // Change background color to green
            $('.count').text("Your current score is "+count);
            setTimeout(function () {
                $('body').css('background-color', originalBackgroundColor); // Revert background color after 2 seconds
                func3();
                func1();
                func2(n);
                // Reload the page after 2 seconds
            }, 2000);
        } else {
            audio.play(); // Play the wrong answer sound
            $('body').css('background-color', 'red'); // Change background color to red
            setTimeout(function () {
                $('body').css('background-color', originalBackgroundColor); // Revert background color after 2 seconds
            }, 2000);
        }
    }

    // Set up click event listeners
    $(".selfformedclass2, .selfformedclass3, .selfformedclass4, .selfformedclass5").click(handleAnswerClick);

    // The rest of the code remains the same
    function func2(n) {
        if (n == 0) {
            $(".selfformedclass1").text("33 ÷ 100 = ");
            $(".selfformedclass2").text("0.033");
            $(".selfformedclass3").text("3");
            $(".selfformedclass4").text("0.33");
            $(".selfformedclass5").text("3.3");
        } else if (n == 1) {
            $(".selfformedclass1").text("3300 ÷ 1000 = ");
            $(".selfformedclass2").text("3.3");
            $(".selfformedclass3").text("0.033");
            $(".selfformedclass4").text("33");
            $(".selfformedclass5").text("0.33");
        } else if (n == 2) {
            $(".selfformedclass1").text("0.9 + 0.99 + 0.999 = ");
            $(".selfformedclass2").text("0.289");
            $(".selfformedclass3").text("0.99999");
            $(".selfformedclass4").text("2.889");
            $(".selfformedclass5").text("0.9999");
        } else if (n == 3) {
            $(".selfformedclass1").text("Ellen picked a number and multiplied the number with 10 for 5 times. Her result is 500000, the number she picked is: ");
            $(".selfformedclass2").text("2");
            $(".selfformedclass3").text("10");
            $(".selfformedclass4").text("100");
            $(".selfformedclass5").text("5");
        } else if (n == 4) {
            $(".selfformedclass1").text("Round 0.99 to the nearest ten");
            $(".selfformedclass2").text("10");
            $(".selfformedclass3").text("100");
            $(".selfformedclass4").text("9");
            $(".selfformedclass5").text("0");
        } else if (n == 5) {
            $(".selfformedclass1").text("3.45 ÷ 10 = ");
            $(".selfformedclass2").text("34.5");
            $(".selfformedclass3").text("345");
            $(".selfformedclass4").text("0.345");
            $(".selfformedclass5").text("0.0345");
        } else if (n == 6) {
            $(".selfformedclass1").text("0.33 X 100 = ");
            $(".selfformedclass2").text("3.3");
            $(".selfformedclass3").text("33");
            $(".selfformedclass4").text("0.033");
            $(".selfformedclass5").text("330");
        } else if (n == 7) {
            $(".selfformedclass1").text("56.7 x 10 = ");
            $(".selfformedclass2").text("5.67");
            $(".selfformedclass3").text("567");
            $(".selfformedclass4").text("0.567");
            $(".selfformedclass5").text("56.7");
        } else if (n == 8) {
            $(".selfformedclass1").text("13209 in words: ");
            $(".selfformedclass2").text("One thousand and thirty two hundred and nine");
            $(".selfformedclass3").text("Thirteen thousand and two hundred and nine");
            $(".selfformedclass4").text("One hundred and thirty two hundred and nine");
            $(".selfformedclass5").text("One thousand and two and nine");
        } else if (n == 9) {
            $(".selfformedclass1").text("119009 in words: ");
            $(".selfformedclass2").text("Eleven thousand and nine hundred and nine");
            $(".selfformedclass3").text("One hundred and nineteen and nine");
            $(".selfformedclass4").text("One hundred and nineteen thousand and nine");
            $(".selfformedclass5").text("Plants to seeds");
        } else if (n == 10) {
            $(".selfformedclass1").text("Seventy thousand and five hundred and two in numbers: ");
            $(".selfformedclass2").text("70502");
            $(".selfformedclass3").text("700502");
            $(".selfformedclass4").text("70052");
            $(".selfformedclass5").text("700052");
        } else if (n == 11) {
            $(".selfformedclass1").text('One hundred and fifteen thousand and nine hundred and sixty five in numbers: ');
            $(".selfformedclass2").text('115965');
            $(".selfformedclass3").text('Leaves');
            $(".selfformedclass4").text('Sunlight');
            $(".selfformedclass5").text('Roots');
        } else if (n == 12) {
            $(".selfformedclass1").text("54.5 X _____   =  545");
            $(".selfformedclass2").text("100");
            $(".selfformedclass3").text("10");
            $(".selfformedclass4").text("1000");
            $(".selfformedclass5").text("0");
        } else if (n == 13) {
            $(".selfformedclass1").text("545  ÷  _____ = 5.45");
            $(".selfformedclass2").text("10");
            $(".selfformedclass3").text("100");
            $(".selfformedclass4").text("1000");
            $(".selfformedclass5").text("0");
        } else if (n == 14) {
            $(".selfformedclass1").text("13.67 x _____  = 1367");
            $(".selfformedclass2").text("10");
            $(".selfformedclass3").text("1000");
            $(".selfformedclass4").text("10000");
            $(".selfformedclass5").text("100");
        } else if (n == 15) {
            $(".selfformedclass1").text("225.97  ÷  100  = ");
            $(".selfformedclass2").text("2.2597");
            $(".selfformedclass3").text("22.597");
            $(".selfformedclass4").text("2259.7");
            $(".selfformedclass5").text("0.22597");
        } else if (n == 16) {
            $(".selfformedclass1").text("18 + 180 + 1800 + 0.18 + 0.018 + 0.0018 = ?");
            $(".selfformedclass2").text("1998.1998");
            $(".selfformedclass3").text("1888.1888");
            $(".selfformedclass4").text("0018");
            $(".selfformedclass5").text("1818.1818");
        } else if (n == 17) {
            $(".selfformedclass1").text("Pick the correct place of 7 in the number 1456.97");
            $(".selfformedclass2").text("tenths");
            $(".selfformedclass3").text("hundredths");
            $(".selfformedclass4").text("thousandths");
            $(".selfformedclass5").text("ten thousandths");
        }
        else if (n == 18) {
            $(".selfformedclass1").text("Pick the correct place of 7 in the number 146.7");
            $(".selfformedclass2").text("tenths");
            $(".selfformedclass3").text("hundredths");
            $(".selfformedclass4").text("thousandths");
            $(".selfformedclass5").text("ten thousandths");
        }
        else if (n == 19) {
            $(".selfformedclass1").text("Pick the correct place of 7 in the number 1456.957");
            $(".selfformedclass2").text("tenths");
            $(".selfformedclass3").text("hundredths");
            $(".selfformedclass4").text("thousandths");
            $(".selfformedclass5").text("ten thousandths");
        }
    }
});