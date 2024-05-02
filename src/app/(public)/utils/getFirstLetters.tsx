//  to get the first letters of a name and display it in the profile card
// like this: Manish Joshi -> MJ
export default function getFirstLetters(name: string) {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0));
  return initials.join("");
}
