$(document).ready(function() {
    var quotes = [
        {
            "id": "1",
            "quote": "A truly free person is someone who can say no to a dinner invitation without needing a reason. They're not bound by social expectations or obligations. They have the freedom to make their own choices without feeling pressured to explain themselves. It's about having the confidence and independence to follow your own path, even if it means going against the norm.",
            "author": "Jules Renard"
        },
        {
            "id": "2",
            "quote": "Our job is to break free from limitations by being kind to everyone and everything around us. We can do this by caring more and including all living things and the beauty of nature in our hearts. This means being understanding and compassionate towards animals, plants, and the environment. When we expand our care and love to everything in nature, we enrich our lives and the world around us.",
            "author": "Albert Einstein"
        },
        {
            "id": "3",
            "quote": "She lived freely, embracing her wild spirit without constraints. Like a wanderer, she roamed, flowing like a drop of pure, untamed water. She didn't belong to any man or any city, finding her home in the vastness of the world. Her independence was her strength, her freedom her essence. She was a soul unbound, dancing to the rhythm of her own heart.",
            "author": "Roman Payne"
        },
        {
            "id": "4",
            "quote": "Perhaps some women aren't meant to be controlled or restricted. They might simply need the freedom to explore until they discover someone who shares their untamed spirit. Instead of being confined, they thrive when they can be themselves and embrace their wild nature. It's about finding a companion who appreciates their adventurous and free-spirited personality. So, rather than trying to tame them, they flourish when they find someone who matches their energy and enthusiasm for life.",
            "author": "Carrie Bradshaw"
        },
        {
            "id": "5",
            "quote": "Education goes beyond what you learn in school. It's the knowledge and skills that stick with you even after you've forgotten specific lessons. It's about understanding the world around you, growing as a person, and using what you've learned to navigate life's challenges. School teaches you many things, but true education stays with you long after you've left the classroom. It's about continuous learning, curiosity, and the ability to adapt and apply what you've learned to new situations.",
            "author": "Albert Einstein"
        },
        {
            "id": "6",
            "quote": "Lots of books don't need much thinking when you read them. Why? Because the people who wrote them didn't ask for much thinking either. So, it's like a cycle—simple books for simple writing. When authors don't put deep thoughts into their writing, readers don't need to put much thought into reading them either. It's all about the level of thinking required, both for writing and reading.",
            "author": "Charles Caleb Colson"
        },
        {
            "id": "7",
            "quote": "Old age feels like it's fifteen years ahead of me. It's like looking at someone who's already lived a long time when I'm not quite there yet. It's as if I can see what my future might be, just a little further down the road. When I think about old age, I imagine it being fifteen years more advanced than my current age. It's like a glimpse into a world that's slightly ahead of where I am right now.",
            "author": "Oliver Wendell Holmes"
        },
        {
            "id": "8",
            "quote": "Deep within your heart lies a special seed waiting to grow. When you nurture it with care and love, it blossoms into a beautiful flower. This quote encourages you to explore your innermost feelings and desires. By tapping into this seed, you can uncover your true potential and let your uniqueness shine. So, listen to your heart, discover the seed within, and watch as it blooms into something magnificent.",
            "author": "Shigenori Kameoka"
        },
        {
            "id": "9",
            "quote": "It's often said that a good government should do less, letting people manage their own lives. But, the same goes for a bad government too, where doing less can mean neglecting important duties. This means finding a balance is crucial. While too much control can stifle freedom, too little can lead to chaos. So, the challenge lies in finding the right amount of governance that serves the needs of the people while ensuring order and fairness.",
            "author": "Jane Elizabeth Auer"
        },
        {
            "id": "10",
            "quote": "In the world of literature, writers often find themselves constantly demonstrating their skills to those who may not appreciate or understand their talent. It can feel like an ongoing challenge to showcase one's abilities to individuals who lack appreciation for creative expression. Despite this, writers persevere, driven by their passion for storytelling and the desire to connect with readers who do value their work. In essence, literature becomes a journey of continual validation, where writers strive to make their mark amidst varying levels of recognition and appreciation.",
            "author": "Jules Renard"
        },
        {
            "id": "11",
            "quote": "The key to doing amazing work is to enjoy what you're doing. If you haven't discovered that passion yet, don't give up. Keep searching until you find what truly excites you. Don't be satisfied with anything less than what makes you truly happy.",
            "author": "Steve Jobs"
        },
        {
            "id": "12",
            "quote": "Life is mostly about how we react to things that happen to us rather than the things themselves. It's like saying only a small part, around 10%, is about what actually occurs, while the bigger part, about 90%, is about how we handle or respond to those occurrences. This means our attitudes, choices, and actions play a much larger role in shaping our experiences and outcomes than just the events themselves. So, it's important to remember that our reactions and responses can greatly influence the course of our lives and our overall happiness and success.",
            "author": "Charles R. Swindoll"
        },
        {
            "id": "13",
            "quote": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
            "author": "Helen Keller"
        },
        {
            "id": "14",
            "quote": "In three words I can sum up everything I've learned about life: it goes on.",
            "author": "Robert Frost"
        },
        {
            "id": "15",
            "quote": "The only impossible journey is the one you never begin.",
            "author": "Tony Robbins"
        },
        {
            "id": "16",
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston S. Churchill"
        },
        {
            "id": "17",
            "quote": "You miss 100% of the shots you don't take.",
            "author": "Wayne Gretzky"
        },
        {
            "id": "18",
            "quote": "Life is what happens when you're busy making other plans.",
            "author": "John Lennon"
        },
        {
            "id": "19",
            "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "id": "20",
            "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
            "author": "Chinese Proverb"
        },
        {
            "id": "21",
            "quote": "Your time is limited, don't waste it living someone else's life.",
            "author": "Steve Jobs"
        },
        {
            "id": "22",
            "quote": "Believe you can and you're halfway there.",
            "author": "Theodore Roosevelt"
        },
        {
            "id": "23",
            "quote": "The future belongs to those who believe in the beauty of their dreams.",
            "author": "Eleanor Roosevelt"
        },
        {
            "id": "24",
            "quote": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs"
        },
        {
            "id": "25",
            "quote": "It does not matter how slowly you go as long as you do not stop.",
            "author": "Confucius"
        },
        {
            "id": "26",
            "quote": "You must be the change you wish to see in the world.",
            "author": "Mahatma Gandhi"
        },
        {
            "id": "27",
            "quote": "The best revenge is massive success.",
            "author": "Frank Sinatra"
        },
        {
            "id": "28",
            "quote": "The journey of a thousand miles begins with one step.",
            "author": "Lao Tzu"
        },
        {
            "id": "29",
            "quote": "In order to be irreplaceable one must always be different.",
            "author": "Coco Chanel"
        },
        {
            "id": "30",
            "quote": "Nothing is impossible, the word itself says 'I'm possible'!",
            "author": "Audrey Hepburn"
        },
        {
            "id": "31",
            "quote": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs"
        },
        {
            "id": "32",
            "quote": "Believe you can and you're halfway there.",
            "author": "Theodore Roosevelt"
        },
        {
            "id": "33",
            "quote": "The future belongs to those who believe in the beauty of their dreams.",
            "author": "Eleanor Roosevelt"
        },
        {
            "id": "34",
            "quote": "The only way to do great work is to love what you do.",
            "author": "Steve Jobs"
        },
        {
            "id": "35",
            "quote": "It does not matter how slowly you go as long as you do not stop.",
            "author": "Confucius"
        },
        {
            "id": "36",
            "quote": "You must be the change you wish to see in the world.",
            "author": "Mahatma Gandhi"
        },
        {
            "id": "37",
            "quote": "The best revenge is massive success.",
            "author": "Frank Sinatra"
        },
        {
            "id": "38",
            "quote": "The journey of a thousand miles begins with one step.",
            "author": "Lao Tzu"
        },
        {
            "id": "39",
            "quote": "In order to be irreplaceable one must always be different.",
            "author": "Coco Chanel"
        },
        {
            "id": "40",
            "quote": "Nothing is impossible, the word itself says 'I'm possible'!",
            "author": "Audrey Hepburn"
        },
        {
            "id": "41",
            "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            "author": "Buddha"
        },
        {
            "id": "42",
            "quote": "Life is 10% what happens to us and 90% how we react to it.",
            "author": "Charles R. Swindoll"
        },
        {
            "id": "43",
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "author": "Winston S. Churchill"
        },
        {
            "id": "44",
            "quote": "You miss 100% of the shots you don't take.",
            "author": "Wayne Gretzky"
        },
        {
            "id": "45",
            "quote": "Life is what happens when you're busy making other plans.",
            "author": "John Lennon"
        },
        {
            "id": "46",
            "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
            "author": "Franklin D. Roosevelt"
        },
        {
            "id": "47",
            "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
            "author": "Chinese Proverb"
        },
        {
            "id": "48",
            "quote": "Your time is limited, don't waste it living someone else's life.",
            "author": "Steve Jobs"
        },
        {
            "id": "49",
            "quote": "Believe you can and you're halfway there.",
            "author": "Theodore Roosevelt"
        },
        {
            "id": "50",
            "quote": "The future belongs to those who believe in the beauty of their dreams.",
            "author": "Eleanor Roosevelt"
        }
        [
            {
                "id": "51",
                "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
                "author": "Winston S. Churchill"
            },
            {
                "id": "52",
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs"
            },
            {
                "id": "53",
                "quote": "Life is what happens when you're busy making other plans.",
                "author": "John Lennon"
            },
            {
                "id": "54",
                "quote": "In three words I can sum up everything I've learned about life: it goes on.",
                "author": "Robert Frost"
            },
            {
                "id": "55",
                "quote": "If you want to achieve greatness stop asking for permission.",
                "author": "Anonymous"
            },
            {
                "id": "56",
                "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
                "author": "Ralph Waldo Emerson"
            },
            {
                "id": "57",
                "quote": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
                "author": "Maya Angelou"
            },
            {
                "id": "58",
                "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
                "author": "Chinese Proverb"
            },
            {
                "id": "59",
                "quote": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
                "author": "Maya Angelou"
            },
            {
                "id": "60",
                "quote": "Either you run the day, or the day runs you.",
                "author": "Jim Rohn"
            },
            {
                "id": "61",
                "quote": "You only live once, but if you do it right, once is enough.",
                "author": "Mae West"
            },
            {
                "id": "62",
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt"
            },
            {
                "id": "63",
                "quote": "Everything you can imagine is real.",
                "author": "Pablo Picasso"
            },
            {
                "id": "64",
                "quote": "Simplicity is the ultimate sophistication.",
                "author": "Leonardo da Vinci"
            },
            {
                "id": "65",
                "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
                "author": "Ralph Waldo Emerson"
            },
            {
                "id": "66",
                "quote": "We know what we are, but know not what we may be.",
                "author": "William Shakespeare"
            },
            {
                "id": "67",
                "quote": "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
                "author": "Bil Keane"
            },
            {
                "id": "68",
                "quote": "You miss 100% of the shots you don't take.",
                "author": "Wayne Gretzky"
            },
            {
                "id": "69",
                "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
                "author": "Franklin D. Roosevelt"
            },
            {
                "id": "70",
                "quote": "When you reach the end of your rope, tie a knot in it and hang on.",
                "author": "Franklin D. Roosevelt"
            },
            {
                "id": "71",
                "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
                "author": "Abraham Lincoln"
            },
            {
                "id": "72",
                "quote": "Life is either a daring adventure or nothing at all.",
                "author": "Helen Keller"
            },
            {
                "id": "73",
                "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
                "author": "Thomas A. Edison"
            },
            {
                "id": "74",
                "quote": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
                "author": "Dr. Seuss"
            },
            {
                "id": "75",
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs"
            },
            {
                "id": "76",
                "quote": "If you can dream it, you can achieve it.",
                "author": "Zig Ziglar"
            },
            {
                "id": "77",
                "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
                "author": "Zig Ziglar"
            },
            {
                "id": "78",
                "quote": "Change your thoughts and you change your world.",
                "author": "Norman Vincent Peale"
            },
            {
                "id": "79",
                "quote": "The future belongs to those who believe in the beauty of their dreams.",
                "author": "Eleanor Roosevelt"
            },
            {
                "id": "80",
                "quote": "It is never too late to be what you might have been.",
                "author": "George Eliot"
            },
            {
                "id": "81",
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs"
            },
            {
                "id": "82",
                "quote": "The best revenge is massive success.",
                "author": "Frank Sinatra"
            },
            {
                "id": "83",
                "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
                "author": "Albert Schweitzer"
            },
            {
                "id": "84",
                "quote": "Believe you can and you're halfway there.",
                "author": "Theodore Roosevelt"
            },
            {
                "id": "85",
                "quote": "The only way to do great work is to love what you do.",
                "author": "Steve Jobs"
            }
        ]
    ];
    
  
    var qty = quotes.length;
  
    $('#main #quote').html('"'+quotes[0].quote+'"');
    $('#main #author').html(quotes[0].author);
    $("#main #quoteNum").html(quotes.indexOf(quotes[0])+1+' of '+qty);
  
    var tweetUrl = "https://twitter.com/intent/tweet?text=Random%20Quote%3A%20"+encodeURIComponent(quotes[0].quote)+"%20-%20"+encodeURIComponent(quotes[0].author);
    $('#tweetUrl').html("<a style='font-size:22px;' target='_blank' href="+tweetUrl+"><i class='fa fa-twitter'></i></a>");
  
    $('#generate').on('click', function(){
      var randomNum = Math.floor(Math.random() * qty);
      $('#main #quote').html('"'+quotes[randomNum].quote+'"');
      $('#main #author').html(quotes[randomNum].author);
      $("#main #quoteNum").html(quotes.indexOf(quotes[randomNum])+1+' of '+qty);
      var tweetUrl = "https://twitter.com/intent/tweet?text=Random%20Quote%3A%20"+encodeURIComponent(quotes[randomNum].quote)+"%20-%20"+encodeURIComponent(quotes[randomNum].author);
      $('#tweetUrl').html("<a style='font-size:22px;' target='_blank' href="+tweetUrl+"><i class='fa fa-twitter'></i></a>");
    });
  });