
    theDate();

      function theDate() {
        var date - new Date();
        var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var currentDate = date.getDate();
        var month = months[date.getMonth()];
        var year = date.getFullYear();

        // var todaysDate = document.getElementById("dateHere").innerHTML = currentDate + "/" + \* month + "/" + \* year;
        var todaysDate = document.getElementById("dateHere").innerHTML = year;
      }
