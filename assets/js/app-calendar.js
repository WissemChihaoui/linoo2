document.addEventListener("DOMContentLoaded", function () {
    let calendarEl = document.getElementById("calendar");
  
    let events = []; // Initialize an array to store events
  
    let calendar = new Calendar(calendarEl, {
      initialView: "dayGridMonth",
      selectable: true, // Enables selecting a range of dates
      editable: true,
      locale: 'fr', // Set the calendar language to French
      plugins: [dayGridPlugin, interactionPlugin, listPlugin, timegridPlugin],
      dayMaxEvents: true,
      headerToolbar: {
        start: "prev,next title",
        end: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
      },
      select: function (info) {
        // Get the start and end date of the selected range in YYYY-MM-DD format
        let start = moment(info.start).format("YYYY-MM-DD");
        let end = moment(info.end).subtract(1, "days").format("YYYY-MM-DD"); // Adjust end to the last selected day
  
        // Check if events already exist in the selected range
        let rangeHasEvent = events.some(event => 
          moment(event.start).isBetween(start, end, null, "[]") && event.title === "Indisponible"
        );
  
        if (!rangeHasEvent) {
          // Add events for each day in the selected range
          let current = moment(start);
          while (current.isSameOrBefore(end)) {
            let newEvent = {
              id: events.length + 1,
              title: "Indisponible",
              start: current.format("YYYY-MM-DD"),
              end: current.format("YYYY-MM-DD"),
              backgroundColor: "red",
              display: "block",
            };
            events.push(newEvent); // Add the event to the events array
            calendar.addEvent(newEvent); // Render the event on the calendar
            current.add(1, "day"); // Move to the next day
          }
        }
        calendar.unselect(); // Clear the selection
      },
      eventClick: function (info) {
        // Remove the event from the events array by filtering it out
        events = events.filter(event => event.id !== info.event.id);
  
        // Remove the event from the calendar display
        info.event.remove();
      }
    });
  
    calendar.render();
  });
  