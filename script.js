function searchProperties() {

    const location =
        document.getElementById("location").value;

    const bhk =
        document.getElementById("bhk").value;

    const budget =
        document.getElementById("budget").value;

    const properties =
        document.querySelectorAll(".property-card");


    properties.forEach(property => {

        const propertyLocation =
            property.dataset.location;

        const propertyBhk =
            property.dataset.bhk;

        const propertyPrice =
            Number(property.dataset.price);


        const locationMatch =
            !location ||
            propertyLocation === location;

        const bhkMatch =
            !bhk ||
            propertyBhk === bhk;

        const budgetMatch =
            !budget ||
            propertyPrice <= Number(budget);


        if (
            locationMatch &&
            bhkMatch &&
            budgetMatch
        ) {

            property.style.display = "block";

        } else {

            property.style.display = "none";

        }

    });


    document
        .getElementById("properties")
        .scrollIntoView({
            behavior: "smooth"
        });
}



function showAll() {

    document
        .querySelectorAll(".property-card")
        .forEach(property => {

            property.style.display = "block";

        });

}



function filterLocation(location) {

    document.getElementById("location").value =
        location;

    searchProperties();

}



function openForm(project) {

    document
        .getElementById("modal")
        .classList.add("active");


    document
        .getElementById("formTitle")
        .textContent =
        project === "Site Visit"
            ? "Book a site visit."
            : project === "Property Match"
            ? "Find your property match."
            : "Interested in " + project + "?";


    document
        .getElementById("interest")
        .value = project;


    document
        .getElementById("success")
        .textContent = "";

}



function closeForm() {

    document
        .getElementById("modal")
        .classList.remove("active");

}



function submitForm(event) {

    event.preventDefault();


    document
        .getElementById("success")
        .textContent =
        "Thank you! Our team will contact you shortly.";


    event.target.reset();

}



document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeForm();

        }

    });
