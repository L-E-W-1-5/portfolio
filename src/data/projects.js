import createTripForm from '../data/travel_herd/create_trip_form.png';
import dashboard from '../data/travel_herd/dashboard.png';
import getStarted from '../data/travel_herd/get_started_page.png';
import joinTrip from '../data/travel_herd/join_trip.png';
import viewTrips from '../data/travel_herd/view_trips.png';
import createMulti from '../data/travel_herd/create_trip_multioption.PNG';
import tripDetails from '../data/travel_herd/trip_details.png';

import mainPage from '../data/SOCATG/main_page.PNG';
import englishSearch from '../data/SOCATG/english_search.PNG';
import englishResults from '../data/SOCATG/english_results.PNG';
import spanishResults from '../data/SOCATG/spanish_results.PNG';

import mainScreen from '../data/cs_game/main_screen.PNG';
import choosePlayers from '../data/cs_game/choose_players.PNG';
import hangman from '../data/cs_game/hangman.PNG';
import tetris from '../data/cs_game/tetris.PNG';

import questionScreen from '../data/LuluGPT/question-screen.png';
import sidewaysEmail from '../data/LuluGPT/sideways-email.png';
import sidewaysLoading from '../data/LuluGPT/sideways-loading-screen.png';
import returnedImage from '../data/LuluGPT/returned-image.png';



export const projects = [
    {
        title: "School Of Code Across The Globe",
        links: ["https://github.com/L-E-W-1-5/Week_9_Project", "https://soc-across-the-globe.netlify.app/"],
        details: `This was a group project created with a team of 4 other students at the School Of Code over just a weeklong period. In this time the 4 of us managed to create a React front end, an Express backend and a Postgres database. From the entire cohort of over 130 students we were the only team which managed to also deploy the application. An achievement that wasn't set as a requirement at the beginning of the project. \nThe brief was to create something that would help future bootcampers. We came up with the idea to create an app aimed at student who weren't native English speakers. The premise was to have a database of common coding terms translated into other languages along with definitions, an example, an image and links for further reading. As a stretch goal we would have liked it to be an app that perhaps groups of students could log in and could add their own terms they had learnt which would then automatically be translated into the other languages for other members of the group. After many sprints, retros and iterations we eventually settled for creating the app without the ability to log in but that everyone could access and add translations for other bootcampers. We made the MVP with 4 languages, a search function for either english or for one of the foreign languages to see if the term had already been added.`,
        photos: [
                    createTripForm
                ],
        stages: [
                    {
                        photo: mainPage,
                        description: "This is the first page the user sees when they visit the site, it prompts the user to select their native language before being directed to the main page where searches can be made."
                    },
                    {
                        photo: englishSearch,
                        description: "This is the page a user is directed to after selecting English as their native language. Notice it just has 1 search bar since the user will only be searching in English for their definition. Other functionality includes the ablility to get all definitions from the database, to add a new entry to the database, to sort the results in the order of what week during the course the topic was covered and to show favourites. In the top right corner the user can choose to change the language they are using at any time."
                    },
                    {
                        photo: englishResults,
                        description: "Once a search has been made, either using the 'get all' button or by searching a particular word (or part of a word), these are the results that will be shown after a successful search. There is added functionality added to each result including the ability to edit the resource, favourite the resource (to retrieve it faster the next time) or to delete the resource."
                    },
                    {
                        photo: spanishResults,
                        description: "The results of a foreign language search show the user the same set of results but in their chosen language, along with the english translation. When a foreign language is selected, an extra search bar is shown, this is so that the user can choose whether to search for the english name or the name in their own language."
                    }
                ]
    },
    {
        title: "Travel Herd",
        links: ["https://github.com/L-E-W-1-5/travel_herd_frontend", "https://github.com/L-E-W-1-5/travel_herd_backend", "https://soc-travelherd.netlify.app"],
        details: `A four week project created with five other students as our final project. We worked as an Agile team with daily standups and retros, we worked in pairs which we were constantly changing so that everybody understood each part of the code. It was created using a React frontend and an Express backend which was accessing data we had created in a relational PostgreSQL database. The idea we had was to create a group travel app where a user can create a trip including destination, itinerary, dates, members etc. To make this more useful we included the option for the user to create multiple entries for any field, any field with multiple entries would be voted on by the rest of the group. The group members added are each sent an email inviting them to join the trip. Each user has their own account which they need to log into, giving them access to any trips they are a part of and allowing them to cast votes where needed. This was accomplished using Auth0.`,
        photos: [
                    createTripForm
                ],
        stages: [
                    {
                        photo: getStarted,
                        description: "This is the first page you come to when navigating to the site, it gives some information as to the function of the app and allows the user to either login or continue into the site first."
                    },
                    {
                        photo: dashboard,
                        description: "This is the main dashboard for the app, the screen you reach after logging in. This shows the 3 main functions of the app, creating a new trip, joining a trip and viewing trips you have already joined"
                    },
                    {
                        photo: createTripForm,
                        description: "This is a multipage form created with a custom hook which takes in 5 separate forms and adds them each into an array, the index of which is what gets incrimented to move to the next page/form. The useForm hook was used along with the useFieldArray hook, making it possible to create forms with a user defined amount of entries for specific fields. This is for the user to create for example, 3 possible destinations for the group to later vote on. A challenge faced with the form was needing to create a variable number of items on the itinerary each with a variable number of possible activities."
                    },
                    {
                        photo: createMulti,
                        description: "An example of one of the multi-option forms, the user can add and remove fields as necessary."
                    },
                    {
                        photo: joinTrip,
                        description: "This is where the user is directed after recieving an email inviting them to join a trip. The email includes a link, their code to join and their username. Before joining, the user will have been prompted to create an account, it is this new account that will be linked with the trip after the correct code and username is entered. Now whenever the user visits the site, their details along with any trips joined will be automatically retrieved using Auth0 to secure the information."
                    },
                    {
                        photo: viewTrips,
                        description: "After either creating or joining a trip, the trip will appear here, a custom carousel was created using ref's to navigate across the trips if the user was a part of quite a few."
                    },
                    {
                        photo: tripDetails,
                        description: "After clicking on a trip from the View Trips page, the user is brought here. This is where the details of the trip are displayed for the user and where votes can be cast and results of votes shown."
                    },
                    
                ]
    },
    {
        title: "C# WPF Games",
        links: ["https://github.com/L-E-W-1-5/hangman_tetris"],
        details: "A WPF application created as a way to learn more about the C# language, how to create WPF applications and how XAML is written. User profiles and scores are saved and retrieved from a text file, created when the first user creates a profile, additional profiles and scores are added to the file when desired. There are 2 games the player can choose from, Hangman, which was an early game i made as a console application, now converted to WPF. Hangman is 1 of the apps i have made that has gone through many iterations over time as i have learnt better ways in which to accomplish something, for example when i learned LINQ I came back to Hangman and implimented LINQ to do the searching for the letters within a certain word. The other is a Tetris game I first created using an online tutorial but have since revisited many times to break it down, modify it, add features and rebuild it. Tetris was an enormous learning experience. It taught me a lot about the use of arrays to store images which can then be layed out onto a canvas. It also taught me a lot about asynchronous programming and how this can be manipulated to simulate game speed, updating the drop of a block at varying intervals. Learning about the use of an offset to move the blocks around the grid and rotate them was also amazing to learn, once you have the offset you can just add those coordinates to the block and regardless of what index of rotation the block is in, just add the offset and it will be positioned correctly.",
        photos: [
                    createTripForm
                ],
        stages: [
                    {
                        photo: mainScreen,
                        description: "The main screen the user comes to when they open the game.exe. In fairness it still needs a bit of TLC but I was focussed mainly on the functionality and bringing the games together was more of an after thought and so proved to be quite a challenge. The user must either select or create a profile before selecting one of the games or can view the highscores of both games."
                    },
                    {
                        photo: choosePlayers,
                        description: "After entering the Hangman game the user/s are prompted to select whether it is a 1 player game with the computer selecting words from a huge selection of words in a file included in the app, or if they wish to play a 2 player game against a friend and take turns selecting and guessing the words."
                    },
                    {
                        photo: hangman,
                        description: "The main screen for a game of Hangman, the user can either use the keys on their keyboard or the buttons on-screen to guess the letters. The user has a limited number of guesses, used letters are shown and it is not permitted to select the same letter twice. The round is over when guesses run out or when the word is guessed."
                    },
                    {
                        photo: tetris,
                        description: "The start of a game of Tetris. The next block is shown on the left and to the right there is a space where the user can save/swap a block for the next block in the queue. The score is shown at the top and there is also a back button to quit out. The game starts at a slow pace, a large delay between function calls, then as time passes the delay becomes smaller and the blocks get faster. This was a lot of fun to create, even with the amount of challenges I faced. There is another array that just stores numbers, each number relates to an image in an array, number 0 is a black image for an empty square, 1 for a yellow block etc. The array on the canvas is created incrimentally from the numbers on that array. Checks are constantly being made for whether a line has zero's left, once a line doesnt have any it means there are no empty squares and the row can be removed and the rows above lowered. A great and fun learning experience."
                    }
                ]
    },
    {
        title: "LuluGPT",
        links: ["https://github.com/L-E-W-1-5/chatGPT_api", "https://github.com/L-E-W-1-5/chatgpt_backend", "https://lulugpt.netlify.app/"],
        details: "A web application with a front end made using react and a back end made with Node.js and Express. It utilizes the OpenAI API.",
        stages: [
                    {
                        photo: questionScreen,
                        description: "The first screen that you see will be where you can ask questions to the OpenAI API and receive an answer. The web application is fully responsive to differently sized screens and features different layouts. All data on all the different forms, along with the last form used, are saved to local storage and are only lost through the 'clear' button."
                    },
                    {
                        photo: sidewaysEmail,
                        description: "For both your returned answers and images, there is the option to email the data to others', data is stored on the form using local storage so it's possible to send both an image and an answer in the same email."
                    },
                    {
                        photo: sidewaysLoading,
                        description: "All forms are using the same CSS styles and are all responsive in the same way. Due to the time it takes to fetch resources from the OpenAI API (especially when I have my back end hosted for free) I created a loading screen to use across all forms, with a loading animation to let the user know the application hasn't crashed. Any failure to fetch resources, for whatever reason, are reported back to the user with an alert box to describe the error. All errors, be it user error or network error etc, are handled correctly. The fetch (or email send) operation can also be cancelled while the loading screen is displayed."
                    },
                    {
                        photo: returnedImage,
                        description: "Returned images are responsive to the screen size and can be emailed, there are buttons to show and hide the image and the user can paste the url into the email form with the click of a button. In essence, I just felt that this would be a fun and useful project to create. I focussed more on mobile design than on past projects and I will think of future web app design from a 'mobile first' standpoint as i have found it to be easier to adapt from small screen to a larger screen as opposed to the other way around."
                    }
                ]
    }
]

// TODO: - could i make the stages of creation with pagination? Have the photos imported along with details about what it does.
// Or could import the images seperately and have an array of notes to list alongside?
// Can maybe try to import the projects similar to how i imported the cv pdf in recycle bin?

// Have an array of objects, each with a photo and details. Then each item of the array can be mapped to a 'Stages' component.