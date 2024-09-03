const lyrics = [
  {
    delay: 0,
    speed: 55,
    text: "If you want it sweet, got that sugar on lock",
  },
  {
    delay: 800,
    speed: 55,
    text: "If you want that spice, I can turn the heat up",
  },
  {
    delay: 600,
    speed: 55,
    text: "Baby, I'm the cake, better know what you got",
  },
  {
    delay: 800,
    speed: 70,
    text: "I'm the cherry on top, cherry on top",
  },
  {
    delay: 700,
    speed: 55,
    text: "Honey, you're a bee, got you buzzin' 'round me",
  },
  {
    delay: 750,
    speed: 55,
    text: "Sticky, sticky, sweet, frosty as I can be",
  },
  {
    delay: 800,
    speed: 55,
    text: "Baby, I'm the cake, better know what you got",
  },
  {
    delay: 600,
    speed: 70,
    text: "I'm the cherry on top, cherry on top...",
  },
  {
    delay: 10000,
    speed: 100,
    text: "",
  },
  // Adjust the delay and speed per line here to sync with your song
];

function playLogLyrics() {
  let cumulativeTime = 0;

  lyrics.forEach(({ delay, speed, text }) => {
    cumulativeTime += delay; // Update the cumulative time with the delay for this line

    text.split("").forEach((letter, index) => {
      setTimeout(() => {
        process.stdout.write(letter); // Logs each letter without a newline
      }, cumulativeTime + index * speed); // Use the speed for timing between letters
    });

    // Add a newline after the entire line is logged
    cumulativeTime += text.length * speed; // Update cumulative time to account for the entire line
    setTimeout(() => {
      console.log(""); // Move to the next line
    }, cumulativeTime);
  });
}

playLogLyrics();
