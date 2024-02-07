// Функція, яка змінює в тексті одне слово на інше. В нашому випадку слово "cat" на "dog".

function changeWord(string, element, wordsChange) {
  let indices = [];
  const sorts = string.split(' ');

  let idx = sorts.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = sorts.indexOf(element, idx + 1);
  }

  for (let i = 0; i < indices.length; i += 1) {
    sorts.splice(indices[i], 1, wordsChange);
  }
  return sorts.join(' ');
}

const text =
  'The small black cat lazily stretched across the sunlit windowsill. The little cat chased after a playful moth, darting across the room with agility.';
console.log(changeWord(text, 'cat', 'dog'));
