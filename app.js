

const seatSelected = document.getElementById('selected-seat');
const totalBookedSeat = document.getElementById('total-booked');
const availableTotalSeat = document.getElementById('available-seat');
const totalPriceSeat = document.getElementById('total-price');
const couponInputField = document.getElementById('coupon-field');
const couponButton = document.getElementById('coupon-btn');
const defaultText = document.getElementById('default-text');
const grandTotal = document.getElementById('grand-total');
let selectedTotalSeat = [];
let totalPrice = 0;






function handleSelectSeat(event) {
    const value = event.innerText;

    if (selectedTotalSeat.includes(value)) {
        return alert('Seat already booked!');
    } else if(selectedTotalSeat.length < 4) {
        event.classList.add('bg-primary');
        event.classList.add('text-white');
    
        // increase booking seat
    
        selectedTotalSeat.push(event.innerText);
        totalBookedSeat.innerText = selectedTotalSeat.length;
    
        // Decrease available seat
    
        const availableSeatValue = parseFloat(availableTotalSeat.innerText);
        const newAvailableSeat = availableSeatValue - 1;
        availableTotalSeat.innerText = newAvailableSeat;

        // Remove default text

        defaultText.classList.add('hidden');
    
        // Booking Seat Details
    
        seatSelected.innerHTML += `<li class="text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economics</span>
        <span>500</span>
        </li>
        `
    
        //    Update total price
    
        totalPrice += 550;
        totalPriceSeat.innerText = totalPrice.toFixed(2);
    
            // Active Coupon Button
    
        if (selectedTotalSeat.length > 3) {
            couponInputField.removeAttribute('disabled');
            couponButton.removeAttribute('disabled');
        }
        
        

    
    } else {
        return alert('Maximum Seat Booked!');
    }

}






// coupon btn function

document.getElementById('coupon-btn').addEventListener('click',() => {
    const couponInputValue = couponInputField.value;
    let couponSave = 0;
    
    // verify coupon

    if (couponInputValue !== "NEW15" && couponInputValue !== "NEW20") {
        alert('Your provided coupon is not valid!');
        return;
    }

    if (couponInputValue === "NEW15") {
        couponSave = totalPrice * 0.15;
    } else if (couponInputValue === "NEW20") {
        couponSave = totalPrice * 0.20;
    }

    const grandTotalValue = totalPrice - couponSave;
    grandTotal.innerText = grandTotalValue.toFixed(2);

});

