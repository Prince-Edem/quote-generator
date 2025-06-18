// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
  person: "Albert Einstein"
},
{
  quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`,
  person: "Dr. Suess"
},
{
  quote: `Life is like riding a bicycle. To keep your balance, you must keep moving.`,
  person: "Albert Einstein"
},
{
  quote: `Be the change that you wish to see in the world.`,
  person: "Mahatma Gandhi"
},
{
  quote: `Remember that not getting what you want is sometimes a wonderful stroke of luck.`,
  person: "Dalai Lama"
},
{
  quote: `In three words I can sum up everything I've learned about life: it goes on.`,
  person: "Robert Frost"
},
{
  quote: `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`,
  person: "Maya Angelou"
},
{
  quote: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.`,
  person: "Martin Luther King Jr."
},
{
  quote: `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
  person: "Mahatma Gandhi"
},
{
  quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.`,
  person: "Albert Einstein"
},
{
  quote: `The fool doth think he is wise, but the wise man knows himself to be a fool.`,
  person: "William Shakespeare"
},
{
  quote: `Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).`,
  person: "Mark Twain"
},
{
  quote: `I have not failed. I've just found 10,000 ways that won't work.`,
  person: "Thomas A Edison"
},
{
  quote: `It is not a lack of love, but a lack of friendship that makes unhappy marriages.`,
  person: "Friedrich Nietzsche"
},
{
  quote: `Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.`,
  person: "Lao Tzu"
},
{
  quote: `The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.`,
  person: "Bob Marley"
},
{
  quote: `Folks are usually about as happy as they make their minds up to be.`,
  person: "Abraham Lincoln"
},
{
  quote: `Success is not final, failure is not fatal: it is the courage to continue that counts.`,
  person: "Winston Churchill"
},
{
  quote: `An unexamined life is not worth living.`,
  person: "Socrates"
},
{
  quote: `Not all of us can do great things. But we can do small things with great love.`,
  person: "Mother Teresa"
},
{
  quote: `It is what you read when you don't have to that determines what you will be when you can't help it.`,
  person: "Oscar Wilde"
},
{
  quote: `"That which does not kill us makes us stronger.`,
  person: "Friedrich Nietzsche"
},{
  quote: `Life is what happens when you're busy making other plans.`,
  person: "John Lennon"
},
{
  quote: `Keep smiling, because life is a beautiful thing and there's so much to smile about.`,
  person: "Marilyn Monroe"
},
{
  quote: `So we beat on, boats against the current, borne back ceaselessly into the past.`,
  person: "F. Scott Fitzgerald"
},
{
  quote: `Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.`,
  person: "Mark Twain"
},
{
  quote: `It is during our darkest moments that we must focus to see the light.`,
  person: "Aristotle"
},
{
  quote: `The only way to do great work is to love what you do.`,
  person: "Steve Jobs"
},
{
  quote: `The most difficult thing is the decision to act; the rest is merely tenacity.`,
  person: "Amelia Earhart"
},
{
  quote: `There are more things in heaven and earth, Horatio, Than are dreamt of in your philosophy.`,
  person: "William Shakespeare"
},
{
  quote: `Your time is limited, so don't waste it living someone else's life.`,
  person: "Steve Jobs"
},
{
  quote: `Life is really simple, but we insist on making it complicated.`,
  person: "Confucius"
},
{
  quote: `Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.`,
  person: "Buddha"
}]

btn.addEventListener('click', function() {

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})