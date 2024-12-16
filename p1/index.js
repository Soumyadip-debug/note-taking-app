const startButton = document.querySelector('#creatNote');
const box1 = document.querySelector('#box1');

function create() {
    const container = document.createElement('div'); // Create a container div
    container.classList.add('note-container'); // Optionally add a class for styling

    const myinput = document.createElement("textarea");
    myinput.classList.add("inputvalue");

    const removePage = document.createElement('button');
    removePage.textContent = 'Remove Page';
    removePage.classList.add("remove");

    removePage.addEventListener('click', function() {
        box1.removeChild(container); // Remove the container
    });

    container.appendChild(myinput);
    container.appendChild(removePage);
    box1.appendChild(container); // Append the container to box1
}

startButton.addEventListener('click', create);
