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

import login from '../data/movie_streamer/login.png';
import register from '../data/movie_streamer/register.png';
import dashboardPhoto from '../data/movie_streamer/dashboard.png';
import dashboardMessage from '../data/movie_streamer/dashboard_message.png';
import responsiveMessage from '../data/movie_streamer/responsive_message.png';
import responsiveMovieOpen from '../data/movie_streamer/responsive_movie_open.png';
import uploadForm from '../data/movie_streamer/upload_form.png';
import editMovieForm from '../data/movie_streamer/edit_movie_form.png';
import editUserForm from '../data/movie_streamer/edit_user_form.png';
import moviePlayer from '../data/movie_streamer/movie_player.png'



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
        title: "LuluGPT (2025)",
        links: ["https://github.com/L-E-W-1-5/chatGPT_api", "https://github.com/L-E-W-1-5/chatgpt_backend", "https://lulugpt.netlify.app/"],
        details: `A simple web application with a front end made using React and a back end made with Node.js and Express. It utilizes the OpenAI API.
        This is just a quick practice project I created to learn how to use the OpenAI API and to create a fun, useful web application. The user can ask questions to the API and receive answers, they can also ask for images to be generated by the API. The user can then choose to email the answer or image to themselves or others. I created this project with mobile design in mind, so it is fully responsive and looks good on all screen sizes. I also created a loading screen to show while waiting for a response from the API as it can take a while (since I no longer have a paid plan), especially when generating images. All data on the forms is saved to local storage so that it is not lost on refresh and so that it can be easily pasted into the email form if desired.
        I want to make some future projects which may depend somewhat on OpenAi so I thought making a simple Q&A app would be a useful and interesting way to do it. I find myself using this quite a lot, the feature of being able to send responses via email has turned out to be very useful. You can paste an email you have received, say what key points you would like in the reply and ask for an email to be written, then send it direct from the application.`,
        stages: [
                    {
                        photo: questionScreen,
                        description: "The first screen that you see will be where you can ask questions to the OpenAI API and receive an answer. The web application is fully responsive to differently sized screens and features different layouts. All data on all the different forms, along with the last form used, are saved to local storage and are only lost through the 'clear' button."
                    },
                    {
                        photo: sidewaysEmail,
                        description: "For both your returned answers and images, there is the option to email the data to others, data is stored on the form using local storage so it's possible to send both an image and an answer in the same email."
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
    },
    {
        title: "Luluflix (2026)",
        links: ["https://github.com/L-E-W-1-5/movie-streamer", "https://github.com/L-E-W-1-5/movie-streamer-backend", "https://luluflix.netlify.app"],
        details: `A web application with a front end made using React, Typescript and Bootstrap and a back end made with Node.js, Express and Postgres, along with an AWS S3 bucket. It acts similarly to popular movie streaming sites or with alteration it could also be similar to YouTube.
        This has been by far the most challenging project I have created to date but also the most rewarding as I can see an immense progression in my understanding of how to plan and create larger, more complex applications. There are still many more things that need to be added, fixed, or improved
        but I feel like I could spend an infinite amount of time on this project and still find things to change, add, improve etc. I have enjoyed immensely creating this project and I'm proud of the harsh learning curve I managed to overcome and the problems I managed to solve. I also feel like equally as important (or more important) as my successes during the building of this project were the things that didnt go to plan... at all. I soon found that I had a severe lack of understanding 
        as to how some aspects of the app would function correctly. There are too many to list but here's just one example, I soon realised that it would be useless to have a user upload a 2gb movie file in one piece, this made loading time for playing the movie or any fast forwarding etc, intolerably long, so during some research I came across 'HLS' or 'HTTP Live Streaming', which can play video files in smaller segments each only a few seconds long, I then learnt how to use FFmpeg in order
        to segment the video files, modify the quality/size of the video, convert them to the right format and importantly, create a .m3u8 file which lists all the segments (addresses of where they are located in the S3 bucket) in the correct order and acts as a playlist. As if this wasnt enough of an issue to overcome, imagine previously I had the settings on my S3 Bucket set to strict, I didnt want unauthorised access
        to my videos. I used signed URL's to allow limited access to the files without making the bucket public. This wasnt an issue when my video had been in one piece but now there were over 700, 10 second segments. I'm not completely happy with my solution to this but I created an array of all the segments from the .m3u8 file, then I created a function 
        to loop through the array and generate a signed URL for each segment. Initially I assumed that this would take far too much time, generating 700 signed URL's, 700 requests to the S3 before it would start playing the video, but it actually only took a few seconds to generate all the signed URL's, add them back into a list (a .m3u8 file) and start the video playing.
        This issue went on for longer than this with the next issue being my player on the front end not recognising the .m3u8, still having short videos that werent HLS that needed to play.. The point is I could reel off numerous other issues i had like this, I (for the most part) enjoyed the challenge and being able to persevere and at the end of it I have something I am truly proud of, 
        I feel like I levelled up hugelt during this project. Now I have the problem of wanting to go back to older projects and redo large pieces I now know how to improve, starting a new project (I again want to use tech and skills i've never used before, I have a couple of interesting ideas) or i still have a lot to fix on Luluflix.. I have another issue right now that im working on in fact, maybe the last thing before I move on. I'd only ever tested uploading large files from my local server, with no issues, however when testing a large upload from
        my deployed backend I get an OOM (out of memory) error, my service only has 512MB of memory. I'm now researching a couple of options to solve this. I'd rather see if I can send the file from the client in small batches of maybe 50 or 100 segments at a time, process them on the backend: store in the S3 and the database, then call global.GC to clear the memory before responding to the client, triggering another batch to be sent.
        The other option is streaming the file instead of uploading in batches, this is something I have never done and seems complex. I gather that I loop the segments on the client side, sending one at a time and on the backend I change the storage settings for Multer and store the file in the S3 bucketso in theory it barely affects the memory of the server. The first option requires 
        a lot less changes to my code and a lot less research but the second option seems like the more efficient, more widely used approach and it definitely looks a better way of doing it so I will be looking into both.`,
        stages: [
                    {
                        photo: login,
                        description: "The first screen that you see will be the login screen, there is also the option to navigate to the register page if you dont have an account. The user details are stored in a database and authenticated using JWT tokens. I didn't want to use Auth0 or another similar service because I needed it all to be very secure in that each registration would need to be verified by myself, it's only a personal project and only to showcase my ability, not for commercial use. Once logged in the user can access the dashboard where all movies are listed and can be searched through. Once a new user registers using their name and email, I am sent an email with their details and a link to verify the account, once I click the link the user is sent an email to confirm their registration and give them a GUID they can use to log in, this GUID can be changed to a password of their choosing from the dropdown menu. This was all created using Nodemailer and JWT tokens for security. Once registered I (or another admin account) can alter their permissions and either delete their account, upgrade the account to admin or I can unverify the account if I have any doubts about the legitimacy of the user. The login and register forms are both responsive and use the same CSS styles as the rest of the app, after login the user details are stored in session storage so the data persists even after refresh."
                    },
                    {
                        photo: register,
                        description: "The register form is kept simple as I wanted to verify each user myself, so I just ask for a name and email, then I can verify the account and send them a GUID to log in with."
                    },
                    {
                        photo: dashboardPhoto,
                        description: "This is the main dashboard for the app where users can view movies that are available, send messages in the message board and select from various options in the dropdown menu. Although the menu options have been fleshed out for admin accounts, a standard account as yet only have limited options, including 'change password' and 'logout'. The style of the dashboard is kept fairly simple and easy to navigate."
                    },
                    {
                        photo: dashboardMessage,
                        description: "I included the message board as a way for users to interact with each other, share movie recommendations, ask for certain movies to be added etc. The messages are stored in the database and retrieved when the user logs in, they can also be posted and deleted (from an admin account) at will."
                    },
                    {
                        photo: responsiveMessage,
                        description: "I wanted to keep the message board from taking over too much of the screen space from the movie list, so i made it expandable from the right side of the screen and collapsable back to just a small column when not in use. It is responsive to screen size so if the user has a monitor or a tablet, it will expand out just a short distance, however if the page is being viewed on mobile, it will expand to cover the width of the screen."
                    },
                    {
                        photo: responsiveMovieOpen,
                        description: ""
                    },
                    {
                        photo: uploadForm,
                        description: ""
                    },
                    {
                        photo: editMovieForm,
                        description: ""
                    },
                    {
                        photo: editUserForm,
                        description: ""
                    },
                    {
                        photo: moviePlayer,
                        description: ""
                    }
                ]
    }
]
/*
import login from '../data/login.png';
import register from '../data/register.png';
import dashboardPhoto from '../data/dashboard.png';
import dashboardMessage from '../data/dashboard_message.png';
import responsiveMessage from '../data/responsive_message.png';
import responsiveMovieOpen from '../data/responsive_movie_open.png';
import uploadForm from '../data/upload_form.png';
import editMovieForm from '../data/edit_movie_form.png';
import editUserForm from '../data/edit_user_form.png';
import moviePlayer from '../data/movie_player.png';
*/
// TODO: - could i make the stages of creation with pagination? Have the photos imported along with details about what it does.
// Or could import the images seperately and have an array of notes to list alongside?
// Can maybe try to import the projects similar to how i imported the cv pdf in recycle bin?

// Have an array of objects, each with a photo and details. Then each item of the array can be mapped to a 'Stages' component.