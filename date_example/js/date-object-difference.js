// Create a variable to hold a new Date object (defaults to now)var today = new Date();// Get the year this yearvar year = today.getFullYear();// Set the date that you are bornvar est = new Date('October 1, 1976 05:45:55');// Get difference between then & now in millisecondsvar difference = today.getTime() - est.getTime();// Divide by number of milliseconds to get yearsdifference = (difference / 31556900000);// Create a variable called elMsg to hold the element whose id attribute has a value of messagevar elMsg = document.getElementById('message');// Write the message into that element.elMsg.textContent = 'I am ' + Math.floor(difference) + ' years of old';