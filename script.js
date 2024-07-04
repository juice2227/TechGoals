
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded.');
});


function updateDateTime() {
    const currentDate = new Date();
    
    
    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    if (currentTimeUTCElement) {
        currentTimeUTCElement.textContent = currentDate.toISOString(); 
    }
    
    
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    if (currentDayElement) {
        const options = { weekday: 'long' };
        currentDayElement.textContent = currentDate.toLocaleDateString('en-US', options); 
        
    }
}


updateDateTime();


setInterval(updateDateTime, 1000);
