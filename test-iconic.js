// Test script for iconic questions
const { generateLessonContent } = require('./dist/lesson-content-generator.js');

console.log('=== Testing Iconic Questions ===\n');

// Test emotions iconic (02_01)
console.log('1. Testing emotions iconic (02_01_3-iconic):');
const emotionsIconic = generateLessonContent('02_01_3-iconic', 'Iconic');
console.log(`   Generated ${emotionsIconic.length} questions`);
emotionsIconic.forEach((q, i) => {
  console.log(`   ${i+1}. ${q.prompt}`);
  console.log(`      Category: ${q.category}`);
  console.log(`      Question parts: ${q.questionParts.map(p => p.type).join(', ')}`);
  console.log(`      Answer options: ${q.answerOptions.map(a => a.label).join(', ')}`);
  console.log('');
});

// Test greetings iconic (01_01)
console.log('2. Testing greetings iconic (01_01_4-iconic):');
const greetingsIconic = generateLessonContent('01_01_4-iconic', 'Iconic');
console.log(`   Generated ${greetingsIconic.length} questions`);
greetingsIconic.forEach((q, i) => {
  console.log(`   ${i+1}. ${q.prompt}`);
  console.log(`      Category: ${q.category}`);
  console.log(`      Question parts: ${q.questionParts.map(p => p.type).join(', ')}`);
  console.log(`      Answer options: ${q.answerOptions.map(a => a.label).join(', ')}`);
  console.log('');
});

// Test numbers iconic (04_01)
console.log('3. Testing numbers iconic (04_01_4-iconic):');
const numbersIconic = generateLessonContent('04_01_4-iconic', 'Iconic');
console.log(`   Generated ${numbersIconic.length} questions`);
numbersIconic.forEach((q, i) => {
  console.log(`   ${i+1}. ${q.prompt}`);
  console.log(`      Category: ${q.category}`);
  console.log(`      Question parts: ${q.questionParts.map(p => p.type).join(', ')}`);
  console.log(`      Answer options: ${q.answerOptions.map(a => a.label).join(', ')}`);
  console.log('');
});
