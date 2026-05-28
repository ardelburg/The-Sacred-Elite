// Initial configuration
const INITIAL_YEAR = 1350;
const DAYS_PER_YEAR = 3; // 3 days = 1 year
const MS_PER_DAY = 24 * 60 * 60 * 1000; // Milliseconds in one real day

// Start date (when the clock started)
const START_TIME = new Date('2025-01-01T00:00:00').getTime();

function updateClock() {
    // Current time in milliseconds
    const now = new Date().getTime();
    
    // Time elapsed since start
    const elapsed = now - START_TIME;
    
    // How many real days have passed
    const daysElapsed = elapsed / MS_PER_DAY;
    
    // How many years have been added (1 year every 3 days)
    const yearsAdded = Math.floor(daysElapsed / DAYS_PER_YEAR);
    const currentYear = INITIAL_YEAR + yearsAdded;
    
    // Time of day (00:00:00 to 23:59:59)
    // We repeat the 24-hour cycle
    const timeOfDay = new Date();
    const hours = String(timeOfDay.getHours()).padStart(2, '0');
    const minutes = String(timeOfDay.getMinutes()).padStart(2, '0');
    const seconds = String(timeOfDay.getSeconds()).padStart(2, '0');
    
    // Update HTML elements
    document.getElementById('year').textContent = currentYear;
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('days-info').textContent = `Days elapsed: ${Math.floor(daysElapsed)}`;
    
    // Update every second
    requestAnimationFrame(updateClock);
}

// Start the clock when the page loads
window.addEventListener('load', updateClock);
