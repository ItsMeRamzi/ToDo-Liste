function addToList() {
    const task = document.createElement("li");
    task.appendChild(document.createTextNode(userInput.value));
    task.classList.add("taskTextS");
    taskList.appendChild(task);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButtonStyle");
    deleteButton.innerHTML = trashIcon.innerHTML;
    task.appendChild(deleteButton);

    const categoryTextDiv = document.createElement("div");
    categoryTextDiv.classList.add("categoryTextDivStyle", "categoryTextS");

    const categoryText = document.createElement("p");
    categoryText.classList.add("categoryTextStyle", "categoryTextStyleS");

    if (userInput.placeholder == "Neue Aufgabe...") {
        categoryText.innerHTML = "Aufgabe"
    } else if (userInput.placeholder == "Neuer Termin...") {
        categoryText.innerHTML = "Termin";
    };

    categoryTextDiv.appendChild(categoryText);
    task.appendChild(categoryTextDiv);

    categoryTextDiv.addEventListener("mouseenter", function() {
        categoryText.classList.add("categoryTextHover");
    });
    categoryTextDiv.addEventListener("mouseleave", function() {
        categoryText.classList.remove("categoryTextHover");
    });

    task.addEventListener("click", function() {
        task.classList.toggle("done");
        deleteButton.classList.toggle("done");
        categoryText.classList.toggle("lineThrough");
    });

    deleteButton.addEventListener("click", function() {
        task.classList.add("hidden");
    });
};

function inputCheck() {
    return userInput.value.length;
};

function inputClear() {
    userInput.value = null;
};

userSubmit.addEventListener("click", function() {
    if (inputCheck() > 0) {
        addToList();
        inputClear();
    };
});

userInput.addEventListener("keypress", function(event) {
    if (inputCheck() > 0 && event.which == 13) {
        addToList();
        inputClear();
    };
});

helpSection.addEventListener("click", function() {
    if (helpTextArrow.src === "https://cdn.lordicon.com/albqovim.json") {
        helpTextArrow.src = "https://cdn.lordicon.com/xdakhdsq.json"
    } else if (helpTextArrow.src === "https://cdn.lordicon.com/xdakhdsq.json") {
        helpTextArrow.src = "https://cdn.lordicon.com/albqovim.json"
    };
    helpText.classList.toggle("hidden");
    window.scrollBy(0, 386);
});

appointmentCategoryButton.addEventListener("click", function() {
    appointmentCategoryButton.classList.add("categoryClicked");
    taskCategoryButton.classList.remove("categoryClicked");
    userInput.placeholder = "Neuer Termin...";
});

taskCategoryButton.addEventListener("click", function() {
    taskCategoryButton.classList.add("categoryClicked");
    appointmentCategoryButton.classList.remove("categoryClicked");
    userInput.placeholder = "Neue Aufgabe...";
});