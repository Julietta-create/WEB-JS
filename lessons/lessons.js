const scheduleElement = document.getElementById('schedule');

function generateScheduleFromJSON(json) {
    if (!json || !json.schedule) {
        return 'Неправильний формат JSON файлу';
    }

    let schedule = '<h2>Розклад занять</h2>';

    json.schedule.forEach(day => {
        schedule += `<h3>${day.date}</h3>`;
        day.lessonList.forEach(lesson => {
            schedule += `<p>${lesson.subject} (${lesson.time}) - ${lesson.teacher} - ${lesson.classroom}</p>`;
        });
    });

    return schedule;
}

fetch('lessons.json')
    .then(response => response.json())
    .then(data => {
        const schedule = generateScheduleFromJSON(data);
        scheduleElement.innerHTML = schedule;
    })
    .catch(error => {
        console.error('Помилка при отриманні JSON файлу:', error);
        scheduleElement.innerHTML = 'Помилка при отриманні JSON файлу';
    });