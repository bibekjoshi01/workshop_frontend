 export function formatDate(timestamp: string) {
    // Convert string to Date object
    var dtObject = new Date(timestamp);

    // Days of the week
    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Months
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Format Date object to desired format
    var formattedDate = daysOfWeek[dtObject.getDay()] + ", " +
                        months[dtObject.getMonth()] + " " +
                        (dtObject.getDate() < 10 ? '0' : '') + dtObject.getDate() + ", " +
                        dtObject.getFullYear() + " " +
                        (dtObject.getHours() < 10 ? '0' : '') + dtObject.getHours() + ":" +
                        (dtObject.getMinutes() < 10 ? '0' : '') + dtObject.getMinutes() + " " +
                        (dtObject.getHours() < 12 ? 'AM' : 'PM');
    
    return formattedDate;
}

