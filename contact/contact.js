document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    const savedDataContainer = document.getElementById('savedDataContainer');
    const displayButton = document.getElementById('displayButton');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const formData = {
            name: name,
            email: email,
            message: message
        };

        const formDataJSON = JSON.stringify(formData);

        localStorage.setItem('formData', formDataJSON);

        alert('Form data saved to local storage!');

        displayButton.style.display = 'flex';

        displayFormData();
    });

    const displayFormData = () => {
        const savedDataJSON = localStorage.getItem('formData');

        if (savedDataJSON) {
            const savedData = JSON.parse(savedDataJSON);

            if (!savedDataContainer.classList.contains('hidden')) {
                savedDataContainer.innerHTML = `
                    <h2>Saved Data</h2>
                    <p><strong>Name:</strong> ${savedData.name}</p>
                    <p><strong>Email:</strong> ${savedData.email}</p>
                    <p><strong>Message:</strong> ${savedData.message}</p>
                    <button id="deleteButton">Delete</button>
                `;

                const deleteButton = document.getElementById('deleteButton');
                if (deleteButton) {
                    deleteButton.addEventListener('click', deleteFormData);
                }
            } else {
                savedDataContainer.innerHTML = '';
            }

            displayButton.style.display = 'none';
        } else {
            savedDataContainer.innerHTML = '<p>No form data found in local storage.</p>';
        }
    };

    const deleteFormData = () => {
        localStorage.removeItem('formData');

        savedDataContainer.classList.add('hidden');

        displayButton.style.display = 'none';
        location.reload();
    };

    displayButton.style.display = localStorage.getItem('formData') ? 'flex' : 'none';

    if (displayButton) {
        displayButton.addEventListener('click', displayFormData);
    }

});

