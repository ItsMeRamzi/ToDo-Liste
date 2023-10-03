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

let i = 1;

helpSection.addEventListener("click", function() {
    if (i == 1) {
        helpTextArrow.style.transform = "rotate(180deg)";
        i = 2;
    } else if (i == 2) {
        helpTextArrow.style.transform = "rotate(0deg)";
        i--;
    };
    helpText.classList.toggle("hidden");
    window.scrollBy(0, 800);
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

theme1.addEventListener("click", function() {
    theme1.classList.add("categoryClicked");
    theme2.classList.remove("categoryClicked");
    theme3.classList.remove("categoryClicked");
    theme4.classList.remove("categoryClicked");
    theme5.classList.remove("categoryClicked");
    theme6.classList.remove("categoryClicked");
    document.body.style.backgroundColor = "#F8EFBA";
});
theme2.addEventListener("click", function() {
    theme2.classList.add("categoryClicked");
    theme1.classList.remove("categoryClicked");
    theme3.classList.remove("categoryClicked");
    theme4.classList.remove("categoryClicked");
    theme5.classList.remove("categoryClicked");
    theme6.classList.remove("categoryClicked");
    document.body.style.backgroundColor = "#FEA47F";
});
theme3.addEventListener("click", function() {
    theme3.classList.add("categoryClicked");
    theme1.classList.remove("categoryClicked");
    theme2.classList.remove("categoryClicked");
    theme4.classList.remove("categoryClicked");
    theme5.classList.remove("categoryClicked");
    theme6.classList.remove("categoryClicked");
    document.body.style.backgroundColor = "#FD7272";
});
theme4.addEventListener("click", function() {
    theme4.classList.add("categoryClicked");
    theme1.classList.remove("categoryClicked");
    theme2.classList.remove("categoryClicked");
    theme3.classList.remove("categoryClicked");
    theme5.classList.remove("categoryClicked");
    theme6.classList.remove("categoryClicked");
    document.body.style.backgroundColor = "#9AECDB";
});
theme5.addEventListener("click", function() {
    theme5.classList.add("categoryClicked");
    theme1.classList.remove("categoryClicked");
    theme2.classList.remove("categoryClicked");
    theme3.classList.remove("categoryClicked");
    theme4.classList.remove("categoryClicked");
    theme6.classList.remove("categoryClicked");
    document.body.style.backgroundColor = "#D6A2E8";
});
theme6.addEventListener("click", function() {
    theme6.classList.add("categoryClicked");
    theme1.classList.remove("categoryClicked");
    theme2.classList.remove("categoryClicked");
    theme3.classList.remove("categoryClicked");
    theme4.classList.remove("categoryClicked");
    theme5.classList.remove("categoryClicked");
    document.body.style.backgroundColor = "#6D214F";
});
