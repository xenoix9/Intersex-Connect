document.addEventListener('DOMContentLoaded', function() {
    // Calendar functionality is now handled by the week view below
});
// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.querySelector('.calendar');
    const currentMonthEl = document.getElementById('current-month');
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');

    let currentWeekStart = new Date();
    // Set to start of current week (Sunday)
    currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay());

    function loadWeekView() {
        calendarEl.innerHTML = '';
        const year = currentWeekStart.getFullYear();
        const month = currentWeekStart.getMonth();
        const weekEnd = new Date(currentWeekStart);
        weekEnd.setDate(weekEnd.getDate() + 6);

        // Update header with week range
        const monthName = currentWeekStart.toLocaleString(undefined, { month: 'long' });
        const monthNameEnd = weekEnd.toLocaleString(undefined, { month: 'long' });
        currentMonthEl.textContent = `${monthName} ${currentWeekStart.getDate()} - ${monthNameEnd} ${weekEnd.getDate()}, ${year}`;

        // Day headers
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const header = document.createElement('div');
        header.className = 'calendar-weekdays';
        weekdays.forEach(w => {
            const cell = document.createElement('div');
            cell.className = 'calendar-weekday';
            cell.textContent = w;
            header.appendChild(cell);
        });
        calendarEl.appendChild(header);

        // Week grid with 7 days
        const weekGrid = document.createElement('div');
        weekGrid.className = 'calendar-grid';

        const today = new Date();
        for (let i = 0; i < 7; i++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-day';
            
            const currentDate = new Date(currentWeekStart);
            currentDate.setDate(currentDate.getDate() + i);
            
            cell.textContent = currentDate.getDate();

            // Highlight today
            if (currentDate.toDateString() === today.toDateString()) {
                cell.classList.add('today');
            }

            cell.addEventListener('click', () => {
                calendarEl.querySelectorAll('.calendar-day.selected').forEach(n => n.classList.remove('selected'));
                cell.classList.add('selected');
            });

            weekGrid.appendChild(cell);
        }

        calendarEl.appendChild(weekGrid);
    }

    prevBtn.addEventListener('click', () => { 
        currentWeekStart.setDate(currentWeekStart.getDate() - 7);
        loadWeekView(); 
    });
    
    nextBtn.addEventListener('click', () => { 
        currentWeekStart.setDate(currentWeekStart.getDate() + 7);
        loadWeekView(); 
    });

    loadWeekView();
});
// ...existing code...