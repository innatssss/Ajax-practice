// Create a promise that resolves to the string "Hello, Promises!"

const myPromise = new Promise((resolve, reject) => {
  resolve("Hello, Promises!");
});

myPromise.then((result) => {
  console.log(result);
});

// Create a function that returns a promise. The promise should resolve after a random delay (between 1 to 5 seconds) with a message like "Promise resolved after X seconds".

function delayedResolve() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      resolve(`Promise resolved after ${delay} second`);
    }, delay * 1000); // seconds to milliseconds
  });
}

delayedResolve().then((message) => {
  console.log(message);
});

// Ask a user to submit an artist name and song and after 2 seconds add it to the screen
$(document).ready(function () {
  $("#songForm").submit(function (event) {
    event.preventDefault();

    const artistName = $("#artistName").val();
    const songTitle = $("#songTitle").val();

    // validation
    if (songTitle === "" || artistName === "") {
      alert("Please fill in all fields");
      return;
    }

    // 2 seconds delay
    setTimeout(function () {
      let newRow = $("<tr>");
      let cell1 = $("<td>").text(songTitle);
      let cell2 = $("<td>").text(artistName);

      newRow.append(cell1, cell2);
      $("#songTable tbody").append(newRow);

      $("#songTitle").val("");
      $("#artistName").val("");
    }, 2000);
  });
});

// Ask a user for age, if the input is not a number or a number over 120 or below 0, show error in console, else print in on the page with a welcome message

$(document).ready(function () {
  $("#submitAge").click(function () {
    const ageInput = $("#ageInput").val();

    if (isNaN(ageInput) || ageInput < 0 || ageInput > 120) {
      console.error("Error: Please enter a valid age between 0 and 120.");
      return;
    }

    $("#output-1").show();

    // Validate age using AJAX
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
      dataType: "json",
      success: function (response) {
        if (response.length > 0) {
          $("#output-1").text("Welcome! Your age is " + ageInput);
        } else {
          console.error("Error: Failed to fetch data.");
        }
      },
      error: function (xhr, status, error) {
        console.error("Error:", error);
      },
    });
  });
});
