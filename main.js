const calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDays = 6;
const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
}
// const openDoor =  (event) => {
//     // event.target.parentNote.style.backgroundImage = `url(${path})`;
//     // event.target.style.opacity = "0";
//     // event.target.style.backgroundColor = "#521751"; 

// }

const createCalendar = () => {
    for (let i = 0; i < calendarDays; i++) {
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");

        calendarDoor.classList.add("image");
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);

        calendarDoorText.classList.add("text");
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);

        imagesNumber = i + 1;
        let imagesPath = `./images/calendar${imagesNumber}.jpg`;

        calendarDoorText.addEventListener("click", openDoor.bind(null, imagesPath));
        // calendarDoorText.classList.add("text");
        // calendarDoorText.innerHTML = i + 1;
        // calendarDoor.appendChild(calendarDoorText);

        //    imagesNumber = i + 1;
        //    let imagesPath = `./images/calendar-${calendarNumber}.jpg`;

        //    calendarDoorText.addEventListener("click", openDoor.bind(null, imagesPath));

    }

}

calendarButton.addEventListener("click", createCalendar);