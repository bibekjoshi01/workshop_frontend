function formatNumberOfAttendees(noOfAttendees: number) {
  if (noOfAttendees >= 1000) {
    // If the number of attendees is in thousands or more
    const formattedNumber = Math.floor(noOfAttendees / 1000);
    return `${formattedNumber}k+`;
  } else {
    return `${noOfAttendees}+`;
  }
}

export { formatNumberOfAttendees };
