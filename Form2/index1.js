function validation() {
    event.preventDefault(); 
    var name = document.getElementById('Name').value;
    var date = document.getElementById('Date').value;
    var days = document.getElementById('Day').value;
    var person = document.getElementById('Person').value;
    var advance_payment = document.getElementById('Payment').value;

    if (name === '' || date === '' || days === '' || person === '' || advance_payment === '') {
        alert("Please fill all the details for Registration");
    } else {
        alert("Your Registration is successful");

        var room_rate = document.querySelector('.room_type:checked').value;
        var room_cost = room_rate * days;

     
        var amenities = document.querySelector('.animation:checked').value;
        var animated_cost = amenities * days;
        var total_amount = room_cost + animated_cost;

        if (person > 2) {
            var extra_amount = person * 1000;
            total_amount += extra_amount;
        }

        var balance_amount = total_amount - advance_payment;

        alert("Your Total amount is " + total_amount);
        alert("Your Balance amount is " + balance_amount);

        document.getElementById("total_amount").innerText = total_amount;
        document.getElementById("taooooo").style.display = 'block';

        setTimeout(function() {
         location.reload(); 
     }, 6000);
     }
 }