"use strict"

// 1. const, 2. let, 3. var

// Limit the total suburbs
const MAX_SUBURBS = 5

// Create a beautiful parallel array (Why? Not sure...)
const suburbNames = []
const suburbPostcodes = []

// Get references to DOM elements
const saveButton = document.getElementById("save")
const removeButton = document.querySelector("#remove")
const addSuburbName = document.getElementById("name")
const addSuburbPostcode = document.getElementById("postcode")
const removeSuburbName = document.getElementById("removeByName")
const contentArea = document.getElementById("content")

// TESTING - create some test data
// suburbNames.push("Hornsby", "Normanhurst")
// suburbPostcodes.push("2077", "2076")
// addSuburb("Hornsby", "2077")
// addSuburb("Normanhurst", "2076")

// TESTING - displaying messages & suburbs
// displayMessage("Test message")
// displayMessage("Test message", "info")
// displayMessage("Test message", "success")
// displayMessage("Test message", "warning")
// displayMessage("Test message", "error")
// displaySuburbs()

// Save button click
saveButton.addEventListener("click", (ev) => {

    // Clear output area
    contentArea.innerText = ""
    
    // Get the suburb name + postcode
    const suburbName = addSuburbName.value.trim()
    const suburbPostcode = addSuburbPostcode.value.trim()

    // Add suburb to the arrays
    addSuburb(suburbName, suburbPostcode)

    // Display the suburb list
    displaySuburbs()
})

// Remove button click
removeButton.addEventListener("click", (ev) => {

    // Clear output area
    contentArea.innerText = ""
    
    // Get the suburb name
    const suburbName = removeSuburbName.value.trim()

    // Remove suburb from the arrays
    removeSuburb(suburbName)

    // Display the suburb list
    displaySuburbs()
})

/**
 * Add a suburb name + postcode to the arrays.
 * @param {string} suburbName The name of the suburb to add.
 * @param {string} postcode The postcode of the suburb to add.
 */
function addSuburb(suburbName, postcode) {

    // Check if suburb limit reached
    if (suburbNames.length < MAX_SUBURBS) {

        // Add suburb
        suburbNames.push(suburbName)
        suburbPostcodes.push(postcode)

        displayMessage("Suburb + postcode added successfully", "success")
    } else {
        displayMessage("Array is full", "error")
    }
}

/**
 * Remove a suburb from the arrays using its name.
 * @param {string} suburbName The name of the suburb to remove.
 */
function removeSuburb(suburbName) {

    let suburbIndex = -1

    // Find the suburb in the suburb names array (manually)
    for (let i = 0; i < suburbNames.length; i++) {
        
        // This is the suburb you are looking for
        if (suburbNames[i] === suburbName) {

            // Record the index where the suburb was found
            suburbIndex = i
            break
        }

    }

    // Check if the suburb was NOT found
    if (suburbIndex === -1) {

        // Suburb not found
        displayMessage("Suburb not found", "error")

    } else {

        // Suburb found

        // Remove suburb from the arrays
        suburbNames.splice(suburbIndex, 1)
        suburbPostcodes.splice(suburbIndex, 1)

        displayMessage("Suburb removed successfully", "success")

    }
}

// Function to display a message
function displayMessage(message, messageType = "default") {
    contentArea.innerHTML += `<p class="message message--${messageType}">${message}</p>`
}

// Function to display suburbs
function displaySuburbs() {

    // Output HTML to display later
    let html = ``

    // Start the list
    html += "<ul>"

    // Loop through each suburb name + postcode
    for (let i = 0; i < suburbNames.length; i++) {

        // Display each suburb as list item
        html += `<li>${suburbNames[i]}, ${suburbPostcodes[i]}</li>`

    }
    
    // End the list
    html += "</ul>"

    // Output the HTML
    contentArea.innerHTML += html
}

