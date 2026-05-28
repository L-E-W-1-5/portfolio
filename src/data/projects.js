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

import login from '../data/movie_streamer/login_screen.png';
import register from '../data/movie_streamer/register.png';
import dashboardPhoto from '../data/movie_streamer/dashboard.png';
import dashboardMessage from '../data/movie_streamer/dashboard_messagebox.png';
import responsiveMessage from '../data/movie_streamer/responsive_message.png';
import responsiveMovieOpen from '../data/movie_streamer/responsive_movie_open.png';
import uploadForm from '../data/movie_streamer/upload_form.png';
import editMovieForm from '../data/movie_streamer/edit_movie_form.png';
import editUserForm from '../data/movie_streamer/edit_user_form.png';
import moviePlayer from '../data/movie_streamer/movie_player.png'
import uploadProgress from '../data/movie_streamer/upload_progress.png'



export const projects = [
    {
        title: "Luluflix (2026)",
        links: ["https://github.com/L-E-W-1-5/movie-streamer", "https://github.com/L-E-W-1-5/movie-streamer-backend", "https://luluflix.netlify.app"],
        details: `(Demo button now added. Complete afterthought!). A web application with a front end made using React, Typescript and Bootstrap and a back end made with Node.js, Express and Postgres, along with an AWS S3 Bucket.
        This has been by far the most challenging project I have created to date but also the most rewarding as I can see good progression in my understanding of how to plan and create larger, more complex applications. There are still many more things that need to be added, fixed, or improved but I feel like overall this is a good, working MVP that im very happy with. 
        I'm proud of the harsh learning curve I managed to overcome and the problems I managed to solve. I also feel that equally as important (or more important) as the things that went right during the building of this project were the things that didnt go to plan... at all. I soon found that I had a severe lack of understanding as to how some aspects of the app would function correctly, thought it would be easy.. 
        Just as one example, I realised that it would be useless to have a user upload a 2gb movie file in one piece, this made loading time for playing the movie or any fast forwarding etc, far too long, so after some research I came across 'HLS' or 'HTTP Live Streaming', which can play video files in smaller segments each only a few seconds long, I then learnt how to use FFmpeg in order to segment the video files, modify the quality/size of the video, convert them to the right format and create a .m3u8 file which lists all the segments (addresses of where they are located in the S3 bucket) in the correct order and acts as a playlist. 
        As if this wasnt enough of a mountain to climb, imagine previously I had the settings on my S3 Bucket set to strict, I didnt want unauthorised access to my videos. I used signed URL's to allow limited access to the files without making the bucket public. This wasnt an issue when my video had been in one piece but now there were over 700, 10 second segments. I'm not completely happy with my solution to this but I created an array of all the segments from the .m3u8 file, then I created a function to loop through the array and generate a signed URL for each segment. 
        I assumed that this would take too long, generating 700 signed URL's, 700 requests to the S3 before it would start playing the video, but it actually only took a few seconds to generate all the signed URL's, add them back into a list (the .m3u8 file) and start the video playing. Not a pretty solution but it works and it was fun getting figuring it out.
        I could reel off numerous other issues I had like this but I enjoyed the challenge and was able to persevere, I can now reflect on what I would do differently next time. I look forward to starting on a fresh project bringing with me all the things I've learnt.`,
       
        
        stages: [
                    {
                        photo: login,
                        description: "The first screen that you see will be the login screen, there is also the option to navigate to the register page if you dont have an account. The user details are stored in a database and authenticated using JWT tokens. I didn't want to use Auth0 or another similar service because I needed it all to be very secure, in that each registration would need to be verified by myself, it's only a personal project and only to show where im at in my journey, it's not for commercial use. Once logged in the user can access the dashboard where all movies are listed and can be searched through. This was all created using Nodemailer and JWT tokens for security. Once registered I (or another admin account) can alter their permissions and either delete their account, upgrade the account to admin or I can unverify the account to prevent further access. The login and register forms are both responsive and use the same CSS styles as the rest of the app, after login the user details are stored in session storage so the data persists even after refresh."
                    },
                    {
                        photo: register,
                        description: "The register form is kept simple as I wanted to verify each user myself, so I just ask for a name and email, after the user clicks submit, the request hits an endpoint which sends me an email directly, telling me the name of the person requesting access. If I proceed to click on the link in the email to accept the request, this will hit another endpoint in my API and an account will be added to the database for the new user, along with an email sent to them containing a GUID to use for logging in. Once they login they can change their password from the dashboard menu at any time."
                    },
                    {
                        photo: dashboardPhoto,
                        description: "This is the main dashboard for the app where users can view movies that are available, send messages in the message board and select from various options in the dropdown menu. Although the menu options have been fleshed out for admin accounts, a standard account as yet only have limited options, including 'change password' and 'logout'. The style of the dashboard is kept fairly simple and easy to navigate."
                    },
                    {
                        photo: dashboardMessage,
                        description: "I included the message board as a way for users to interact with each other, share movie recommendations, ask for certain movies to be added etc. The messages are stored in the database and retrieved when the user logs in, they can be deleted only by an admin account, using a cross only admins are able to see."
                    },
                    {
                        photo: responsiveMessage,
                        description: "I wanted to keep the message board from taking over too much of the screen space from the movie list, so i made it expandable from the right side of the screen and collapsable back to just a small column when not in use. It is responsive to screen size so if the user has a monitor or a tablet, it will expand out just a short distance, however if the page is being viewed on mobile, it will expand to cover the width of the screen. The message board initially was permanently open but I found it not great for mobile screens especially. This was therefore only intended for mobile users but I liked it so much that I added it for all screen sizes. I recently made the expanding/collapsing an animation rather than just an immediate width change, just to make it look smoother and more modern."
                    },
                    {
                        photo: responsiveMovieOpen,
                        description: `During this project I made a conscious effort to remember to keep each component responsive to different devices and screen sizes as i went along. Previously it has been something left until the end, which i found out to be a mistake as it can cause no end of issues to go back and try to make something responsive after the app has already been built a certain way around it. This is the component which opens after a user clicks onto a movie to watch, 
                        I'd love to go back and take the time to redesign some of these components to make them look cleaner and modern but I want to focus on getting the core functionality working properly first so I have a fully working MVP to show. `
                    },
                    {
                        photo: uploadForm,
                        description: `*Update In Next Image* I have another issue right now that im working on in fact, maybe the last thing before I move on. I'd only ever tested uploading large files from my local server, with no issues, however when testing a large upload from my deployed backend I get an OOM (out of memory) error, my service only has 512MB of memory. I'm now researching a couple of options to solve this. I'd rather see if I can send the file from the client in small batches of maybe 50 or 100 segments at a time, 
                                    process them on the backend: store in the S3 and the database, then call global.GC to clear the memory before responding to the client, triggering another batch to be sent. The other option is streaming the file instead of uploading in batches, this is something I have never done and seems complex. I gather that I loop the segments on the client side, sending one at a time and on the backend I change the storage settings for Multer to store the files in the S3 bucket, so in theory it barely affects the memory of the server. The first option requires a lot less changes to my code and a lot less research but the second option seems like the more efficient, more widely used approach and it definitely looks a better way of doing it so I will be looking into both.`,
                    },
                    {
                        photo: uploadProgress,
                        description: `After the issues mentioned in the previous paragraph, I researched the options available to solve the OOM error and decided to change to 'Multer-S3' which streams the hls files directly to the s3 without taking up memory in the server, this fixed the OOM error however it was still quite slow, also I had no way of knowing if the files were actually being uploaded or not. To solve both of these issues at once, I decided to send the files in batches from the client. Before the fetch request, I separated the files into batches of 50, making sure that all the metadata, plus the playlist file and images, were in the first batch. With this setup I was able to run the bulk of the code within the route only on the first batch, this is where the database is accessed.
                                    I wanted the first batch to save to the database so that I would be able to call the delete function from the frontend if the upload was faulty for any reason, otherwise I would need to go to the AWS console each time. The rest of the batches only run through the Multer-s3 code before sending a response to say whether the batch succeeded or failed. This made the upload much faster as 700 - 1000 segments being sent at once was creating a bottleneck and the rest of the route was only running after all files were already complete. Since I uploaded in batches I was also able to keep track of progress and create a loading screen with a percentage indicating how much of the upload was complete. `,
                    },
                    {
                        photo: editMovieForm,
                        description: "The edit movie form is so that admin can change, add or delete details of the movie (or delete the whole movie), images can be added, deleted or swapped into different positions (either the dashboard card or on this component). This has helped especially when I have wanted to upload some media but not necessarily wanted to spend the time at that moment to fill out all the other information: length, genre, description etc. Since for the MPV the use of FFMPEG is local, before upload, I thought that I could have maintained the uploads and another admin could have spent the time afterwards to fill out the rest of the data. For a future iteration I would include FFMPEG into the backend to make uploads simpler and so that any admin could upload media.",
                    },
                    {
                        photo: editUserForm,
                        description: `I tried to keep the user database as simple as possible because I didn't want to cover old ground and wanted this project to be about something completely new to me. With this is mind the only data held about each user are their name, email address (needed for verification and access control), a password, a boolean for both whether the user has been verified by an admin and whether they have admin permissions. Both of these can be changed from this form. There is also a count for the amount of failed login attempts, if the number reaches a certain increment the account is blocked from logging in. The last data held is the data/time of account creation and the date/time of the last login. I stored this data for maybe a future feature to show active user metrics maybe but for now its just there as additional information.`
                    },
                    {
                        photo: moviePlayer,
                        description: "The movie player will play both HLS files and regular single files, it has all the usual functions you'd expect from a video player, all the hard work went into getting the HLS files to play correctly, with a signed URL for each 10 second segment. It took a lot of time to figure HLS out, along with storage and retreival from an S3, figuring out how to use FFMPEG. A lot of trial and error and many many iterations after finding mistake after mistake. The final piece from a functional standpoint is to get the uploads working within the limit of the server memory. I'm getting OOM errors when I try to upload large data from the live site but i'm in the process of implimenting multer to stream the segments directly to the S3 bucket which should stop the OOM errors."
                    }
                ]
    },
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
        details: `Currently refactoring large portions of the code, including making it responsive because right now its not configured for mobile use. The brief was only to create an app for a presentation on desktop so due to time constraints we ignored any responsiveness. Also needing to recreate and redeploy the database due to the hosting site changing their terms of service. A four week project created with five other students as our final project. We worked as an Agile team with daily standups and retros, we worked in pairs which we were constantly changing so that everybody understood each part of the code. It was created using a React frontend and an Express backend which was accessing data we had created in a relational PostgreSQL database. The idea we had was to create a group travel app where a user can create a trip including destination, itinerary, dates, members etc. To make this more useful we included the option for the user to create multiple entries for any field, any field with multiple entries would be voted on by the rest of the group. The group members added are each sent an email inviting them to join the trip. Each user has their own account which they need to log into, giving them access to any trips they are a part of and allowing them to cast votes where needed. This was accomplished using Auth0.`,
        photos: [
                    createTripForm
                ],
        stages: [
                    {
                        photo: getStarted,
                        description: "This is the first page you come to when navigating to the site, it gives some information as to the function of the app and allows the user to either login or continue into the site first. I have now refactored 90% of this project to make it responsive. Since it was a 4 week project, we spent almost the entire first week just on planning but it made the process so much simpler in the long run. I really learnt the value of not rushing in to start writing code, good planning is something ive taken into every project ive written since this."
                    },
                    {
                        photo: dashboard,
                        description: "This is the main dashboard for the app, the screen you reach after logging in. This shows the 3 main functions of the app, creating a new trip, joining a trip and viewing trips you have already joined. I didn't get to spend a great deal of time on the CSS of this project but i'm really happy with the designs we came up with and the colour schemes we agreed on."
                    },
                    {
                        photo: createTripForm,
                        description: "This is where i spent the bulk of my time on this project, creating this form and the backend queries to save the data in a relational Postgres database. This is a multipage form created with a custom hook which takes in 5 separate forms and adds them each into an array, the index of which is what gets incrimented to move to the next page/form. The useForm hook was used along with the useFieldArray hook, making it possible to create forms with a user defined amount of entries for specific fields. This is for the user to create for example, 3 possible destinations for the group to later vote on. A challenge faced with the form was needing to create a variable number of items on the itinerary each with a variable number of possible activities. Triple nested data and each level has a user defined quantity. This really was one of the hardest things ive written, then add in a separate voting system.. the idea is for the members you invite to vote on the options you've given them and when everyone has voted, the chosen date or activity is displayed in the View Trips page."
                    },
                    {
                        photo: createMulti,
                        description: "An example of one of the multi-option forms, the user can add and remove fields as necessary. This is the less complicated multi-option page of the form, im currently struggling with the CSS of the itinerary page but i will upload an image when its complete. The user can add and remove dates, if only 1 is added, there is no vote but any more than that and a vote is triggered which wont complete until all members of the trip have voted."
                    },
                    {
                        photo: joinTrip,
                        description: "This is where the user is directed after recieving an email inviting them to join a trip. The email includes a link, their code to join and their username. Before joining, the user will have been prompted to create an account, it is this new account that will be linked with the trip after the correct code and username is entered. Now whenever the user visits the site, their details along with any trips joined will be automatically retrieved using Auth0 to secure the information."
                    },
                    {
                        photo: viewTrips,
                        description: "After either creating or joining a trip, the trip will appear here, a custom carousel was created using ref's to navigate across the trips if the user was a part of quite a few. This is a page that could use more CSS work but it works. Once the user clicks on a trip they are shown whether any votes are outstanding or any votes that have already been calculated."
                    },
                    {
                        photo: tripDetails,
                        description: "After clicking on a trip from the View Trips page, the user is brought here. This is where the details of the trip are displayed for the user and where votes can be cast and results of votes shown. Again, it could do with some improvements, mainly CSS wise. The routes and models all work, they could do with some major refactoring but I think it best to leave it as a reminder of where I was and where I am today. I had to recreate the database recently and im proud to say that it's all working."
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