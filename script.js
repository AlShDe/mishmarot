import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const form = document.getElementById('constraintForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const constraints = document.getElementById('constraints').value;

    // Write the data to Firebase
    const db = getDatabase();
    const constraintsRef = ref(db, 'constraints/' + name + "_" + date);
    set(constraintsRef, {
        name: name,
        date: date,
        constraints: constraints
    })
    .then(() => {
        alert('Constraints submitted successfully!');
        form.reset();
    })
    .catch((error) => {
        console.error("Error submitting constraints: ", error);
    });
});
