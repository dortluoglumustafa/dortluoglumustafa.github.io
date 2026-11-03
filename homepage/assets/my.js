document.addEventListener('DOMContentLoaded', async function() {
    // Inspiration from autocomplete book search example from the lecture which utilized APIs.
    let code = await fetch("../navbar.html");
    code = await code.text();

    let nav = document.querySelector('header');
    nav.innerHTML = code;

     // Enumerate the lesson numbers
    try {
        let table = document.getElementById('table-lessons');
        let tbody = table.querySelector('tbody');

        for (let i = 0; i < tbody.children.length; i++) {
            tr = tbody.children[i];
            tr.children[0].innerText = (i + 1);
        }
    } catch {
        // #lessons doesn't exist.
    }

    // Play sound when lemur image is clicked
    try {
        let lemur = document.getElementById('lemur');
        let audio1 = new Audio("/assets/sounds/bbc-lemur2.mp3");
        lemur.addEventListener('click', function(e) {
            if (audio1.paused) {
                audio1.play();
            }
            else {
                audio1.pause();
            }

        });

        let fountain = document.getElementById('fountain');
        let audio2 = new Audio("/assets/sounds/bbc-fountains2.mp3");
        fountain.addEventListener('click', function(e) {
            if (audio2.paused) {
                audio2.play();
            }
            else {
                audio2.pause();
            }
        });

        let ocean = document.getElementById('ocean');
        let audio3 = new Audio("/assets/sounds/bbc-australia.mp3");
        ocean.addEventListener('click', function(e) {
            if (audio3.paused) {
                audio3.play();
            }
            else {
                audio3.pause();
            }
        })


    } catch {
        // no such image
    }
});
