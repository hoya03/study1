const now = new Date();

const today = {
    year: now.getFullYear(),
    date: now.getDate(),
    month: now.toLocaleString('ko-KR', {month: 'short'}),
    day: now.toLocaleString('ko-KR', {weekday: 'short'})
}

document.getElementById('year').textContext = today.year;
document.getElementById('month').textContent = today.month;
document.getElementById('date').textContent = today.date;
document.getElementById('day').textContent = today.day;