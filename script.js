let quoteArr = ['Be yourself, everyone else is already taken.', 'Be the change that you wish to see in the world.', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 'We accept the love we think we deserve.', 'Without music, life would be a mistake.', 'We are all in the gutter, but some of us are looking at the stars.', 'Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.', 'I have not failed. I\'ve just found 10,000 ways that won\'t work.', 'It is never too late to be what you might have been.', 'There is no greater agony than bearing an untold story inside you.'];
let nameArr = ['James', 'John', 'Jack', 'Jill', 'Susan', 'Mary', 'Lily', 'Peter', 'Robert', 'Bruce'];
let ageArr = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let str1 = quoteArr[Math.floor(Math.random() * 10)];
let str2 = nameArr[Math.floor(Math.random() * 10)];
let str3 = ageArr[Math.floor(Math.random() * 10)];

console.log(`Name: ${str2}
Age: ${str3}
Quote: ${str1}`)