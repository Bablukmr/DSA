function calculateWordFrequency(str) {
  // Step 1: Split the string into words
  const words = str.split(" ");

  // Step 2: Create a frequency map
  const frequencyMap = new Map();

  // Step 3: Update the frequency map
  for (const word of words) {
    const lowercaseWord = word.toLowerCase();
    const count = frequencyMap.get(lowercaseWord) || 0;
    frequencyMap.set(lowercaseWord, count + 1);
  }

  // Step 4: Print the frequency of each word
  for (const [word, frequency] of frequencyMap) {
    console.log(`${word} :- ${frequency}`);
  }
}

// Example usage:
const str = "Success is not the key of Happiness, Happiness is the key of success";
calculateWordFrequency(str);
