let mCurrentIndex = 0 // Tracks the current image index
let mImages = [] // Array to hold GalleryImage objects
const mUrl = 'images.json' // Replace with actual JSON URL
const mWaitTime = 5000 // Timer interval in milliseconds


$(document).ready(() => {
  $('.details').hide() // Hide details initially

  // Call a function here to start the timer for the slideshow
  startTimer()
  // Select the moreIndicator button and add a click event to:
  // - toggle the rotation classes (rot90 and rot270)
  // - slideToggle the visibility of the .details section
  $('.moreIndicator').on('click', function () {
    $('.moreIndicator').toggleClass('rot270 rot90')
    $('.details').slideToggle()
  })
  // Select the "Next Photo" button and add a click event to call showNextPhoto
  $('#nextPhoto').on('click', showNextPhoto)
  // Select the "Previous Photo" button and add a click event to call showPrevPhoto
  $('#prevPhoto').on('click', showPrevPhoto)
  // Call fetchJSON() to load the initial set of images
  fetchJSON()
})
// Function to fetch JSON data and store it in mImages
function fetchJSON () {
  // Use $.ajax here to request the JSON data from mUrl
  $.ajax({
    type: "GET",
    url: mUrl,
    dataType: "json",
    // On success, parse the JSON and push each image object into mImages array
    success: function (data) {
      mImages = data.images
    // After JSON is loaded, call swapPhoto() to display the first image
        swapPhoto()
    },
    error: function () {
      alert("File has not loaded in.")
    }
  });

}

// Function to swap and display the next photo in the slideshow
function swapPhoto() {
  // Access mImages[mCurrentIndex] to update the image source and details
  const images = mImages[mCurrentIndex]
  // Update the #photo element's src attribute with the current image's path
  $('#photo').attr('src', images.imgPath)
  // Update the .location, .description, and .date elements with the current image's details
  $('.driverName').text(`F1 Driver: ${images.driverName}`)

  $('.gotHouse').text(`Game Of Thrones House: ${images.gotHouse}`)

  $('.basedOn').text(`GOT Character: ${images.basedOn}`)


}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto() {
  // Increment mCurrentIndex and call swapPhoto()
  mCurrentIndex++


  // Ensure it loops back to the beginning if mCurrentIndex exceeds array length


  if (mCurrentIndex === mImages.length) {
    mCurrentIndex = 0;
  }
  swapPhoto()
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto() {
  // Decrement mCurrentIndex and call swapPhoto()
  mCurrentIndex--;
  // Ensure it loops to the end if mCurrentIndex is less than 0
  if (mCurrentIndex < 0) {
    mCurrentIndex = 9 // Last image
  }
  swapPhoto()
}

// Starter code for the timer function
let timer
function startTimer() {
  // Create a timer to automatically call `showNextPhoto()` every mWaitTime milliseconds
  timer = setInterval(showNextPhoto, mWaitTime);
  // Consider using setInterval to achieve this functionality
  // Hint: Make sure only one timer runs at a time
}