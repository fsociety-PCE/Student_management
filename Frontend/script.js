document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function(event) {
            const selectedEvent = event.target.value;
            console.log(selectedEvent)
            filterStudents(selectedEvent);
        });
    });
});

async function filterStudents(event) {
    try {
        const response = await fetch(`http://localhost:5000/api/v1/students?Events=${event}`);
        const data = await response.json();

        const students = data.data.filter(student => student.Events.includes(event));

        const studentListDiv = document.getElementById('student-list');
        studentListDiv.innerHTML = '';
        let counter = 1; // Initialize counter
        students.forEach(student => {
            const studentDiv = document.createElement('div');
            studentDiv.classList.add('student-info');
            studentDiv.innerHTML = `
                <div>${counter}. Name: ${student.Name}</div>
                <div>Branch: ${student.Branch}</div>
                <div>Batch: ${student.Batch}</div>
                <div>Phone Number: ${student['Phone Number']}</div>
                <div>Events: ${student.Events}</div>
            `;
            studentListDiv.appendChild(studentDiv);
            counter++; // Increment counter for next student
        });
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}

