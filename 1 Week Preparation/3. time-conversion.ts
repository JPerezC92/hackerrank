function timeConversion(s: string): string {
  // Write your code here
  const morning = "AM";

  const morningOrAfternoon = s.substring(s.length - 2).toUpperCase();

  const time = s.substring(0, s.length - 2);
  const [hours, minutes, seconds] = time.split(":");

  if (morningOrAfternoon === morning) {
    return [hours === "12" ? "00" : hours, ":", minutes, ":", seconds].join("");
  }

  return [
    hours === "12" ? "12" : parseInt(hours, 10) + 12,
    ":",
    minutes,
    ":",
    seconds,
  ].join("");
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45PM"));
// timeConversion("07:05:45PM");
