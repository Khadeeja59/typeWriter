const sentence = "hello there from lighthouse labs";
let delay = 0;
const i = 50;
  for (const char of sentence) {
    for (const letter of char){
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
  delay += i;
  }
}