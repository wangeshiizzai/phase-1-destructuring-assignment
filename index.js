// 1) Animal sounds
const [moo, neigh, baa, oink, cluck] = ['cow', 'horse', 'sheep', 'pig', 'chicken'];

// 2) Animal names
const [bessie, dolly, babe, little] = ['cow', 'sheep', 'pig', 'chicken'];

// 3) Animal colors
const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];

// 4) Rainbow full color names
const [red, orange, yellow, green, blue, indigo, violet] = [
  'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
];

// 5) Rainbow initials
const [r, o, y, g, b, v] = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

// 6) Indigo alias
const [indg] = ['indigo'];

// 7) Muppet object
const muppet = {
  muppetName: 'Kermit',
  color: 'green',
  song: "Bein' Green",
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const { muppetName, color, song, job, partner } = muppet;

// 8) Nested muppet object
const nestedMuppet = {
  songs: [
    'Rainbow Connection',
    'Moving Right Along',
    "Bein' Green",
    'I Hope That Something Better Comes Along'
  ],
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const { songs: [, song2, , song4], job: nestedJob, partner: nestedPartner } = nestedMuppet;



// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

