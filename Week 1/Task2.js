//Create a program that uses a while loop to iterate through an array of strings. Inside the loop, use forEach to print each string
// with an appended exclamation mark. The loop should terminate once the length of the current string exceeds 8 characters.
// Comment on the differences between while and forEach in this context.

const arr = ["Maitri", "Jahanvi", "Kruti", "Krishnadd", "riya"];
let i = 0;
while (i < arr.length) {
  const current = arr[i];

  if (current.length > 8) break;
  else {
    [current].forEach((i) => {
      console.log(i + "!");
    });
  }
  i++;
}
