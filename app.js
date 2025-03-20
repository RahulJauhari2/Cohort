

const saveMood = (mood) => {
    const today = new Date(); // Get today's date (YYYY-MM-DD)
    const Day = String(today.getDate()).padStart(2,0);
    const Month = String(today.getMonth()).padStart(2,0);
    const Year = String(today.getFullYear())
    const todayDate = `${Day}-${Month}-${Year}`;
    let moodLogs = JSON.parse(localStorage.getItem('moodLogs')) || {};
    moodLogs[todayDate] = mood;
    console.log(mood)
    localStorage.setItem('moodLogs', JSON.stringify(moodLogs));
    // localStorage.clear();
};





const displayMoods = (timeframe = 'week') => {
    const moodLogs = JSON.parse(localStorage.getItem('moodLogs')) || {};
    const timeline = document.getElementById('timeline'); // Example target element
    timeline.innerHTML = ''; // Clear previous timeline
    
    Object.keys(moodLogs).forEach(date => {
        const mood = moodLogs[date];
        const moodEntry = document.createElement('div');
        moodEntry.textContent = `${date}: ${mood}`;
        timeline.appendChild(moodEntry);
    });
};

displayMoods(); // Call this function to populate the timeline
