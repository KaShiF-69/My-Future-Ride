// javascript/book-now.js
document.addEventListener('DOMContentLoaded', () => {
    // ---------- hamburger toggle (keeps your original behavior) ----------
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('main-nav-links');
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }


    const form = document.querySelector('.booking-form');
    if (!form) return console.error('Booking form not found on the page.');

    const nameInput = form.querySelector('input[placeholder="Your Name"]');
    const phoneInput = form.querySelector('input[placeholder="Phone Number"]');
    const pickupInput = form.querySelector('input[placeholder="Pick Up point"]');
    const dropoffInput = form.querySelector('input[placeholder="Drop Off point"]');
    const messageTextarea = form.querySelector('textarea[placeholder="Your Message..."]');

    const selects = form.querySelectorAll('select');
    const passengerSelect = selects[0] || null; // first select = passengers
    const carSelect = selects[1] || null;       // second select = car type

    const priceInput = document.getElementById('price');
    const transcriptContainer = document.getElementById('transcript-container');
    const transcriptDetails = document.getElementById('transcript-details');
    const cancelRideBtn = document.getElementById('cancel-ride');

    // Safety checks (so code won't crash if an element is missing)
    if (!nameInput || !phoneInput || !pickupInput || !dropoffInput || !messageTextarea) {
        console.warn('One or more form fields not found. Check placeholders in HTML.');
    }
    if (!transcriptContainer || !transcriptDetails || !cancelRideBtn) {
        console.warn('Transcript container or controls not found. Make sure transcript HTML exists.');
    }

    if (carSelect && priceInput) {
        carSelect.addEventListener('change', () => {
            const car = carSelect.value.trim();
            let priceText = '';
            if (car === 'Economy') priceText = '300 PKR';
            else if (car === 'Business') priceText = '600 PKR';
            else if (car === 'Premium') priceText = '800 PKR';
            priceInput.value = priceText;
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent normal submission

        // Basic validation
        if (!nameInput.value.trim() ||
            !phoneInput.value.trim() ||
            !pickupInput.value.trim() ||
            !dropoffInput.value.trim()) {
            alert('Please fill in Name, Phone, Pick Up and Drop Off fields.');
            return;
        }

        // Validate selects
        if (passengerSelect) {
            const p = passengerSelect.value;
            if (!p || p === 'Passenger' || passengerSelect.selectedIndex === 0) {
                alert('Please select number of passengers.');
                return;
            }
        }
        if (carSelect) {
            const c = carSelect.value;
            if (!c || c === 'Select Car Type' || carSelect.selectedIndex === 0) {
                alert('Please select a car type.');
                return;
            }
        }

        // collect values
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const pickup = pickupInput.value.trim();
        const drop = dropoffInput.value.trim();
        const passengers = passengerSelect ? passengerSelect.value : '';
        const carType = carSelect ? carSelect.value : '';
        const date = form.querySelector('input[type="date"]')?.value || '';
        const time = form.querySelector('input[type="time"]')?.value || '';
        const message = messageTextarea.value.trim();
        const price = priceInput ? priceInput.value : '';


        // Build transcript
        const transcriptHTML = `
            <p><strong>Name</strong> ${name}</p>
            <p><strong>Phone</strong> ${phone}</p>
            <p><strong>Pick Up</strong> ${pickup}</p>
            <p><strong>Drop Off</strong> ${drop}</p>
            <p><strong>Passengers</strong> ${passengers}</p>
            <p><strong>Car Type</strong> ${carType}</p>
            <p><strong>Date</strong> ${date}</p>
            <p><strong>Time</strong> ${time}</p>
            <p><strong>Message</strong> ${message}</p>
            <p><strong>Estimated Price</strong> ${price}</p>
`;


        // show transcript
        if (transcriptDetails && transcriptContainer) {
            transcriptDetails.innerHTML = transcriptHTML;
            transcriptContainer.style.display = 'block';
            transcriptContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert('Booking recorded (transcript element missing).');
        }
    });

    // Cancel Ride hide transcript
    if (cancelRideBtn) {
        cancelRideBtn.addEventListener('click', () => {
            if (transcriptContainer) transcriptContainer.style.display = 'none';
            form.reset();
            if (priceInput) priceInput.value = '';
        });
    }

});
