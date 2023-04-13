import createTripForm from '../data/travel_herd/create_trip_form.png';
import dashboard from '../data/travel_herd/dashboard.png';
import getStarted from '../data/travel_herd/get_started_page.png';


export const projects = [
    {
        title: "School Of Code Across The Globe",
        links: ["https://github.com/L-E-W-1-5/Week_9_Project"],
        details: "A group project created with a team of my peers over a weeklong period",
        photos: [
                    createTripForm
                ],
        stages: [
                    {
                        photo: createTripForm,
                        description: "This is a multipage form created with a custom hook which takes in 5 separate forms and adds them each into an array, the index of which is what gets incrimented to move to the next page/form. The useForm hook was used along with the useFieldArray hook, making it possible to create forms with a user defined amount of entries for specific fields. This is for the user to create for example, 3 possible destinations for the group to later vote on. A challenge faced with the form was needing to create a variable number of items on the itinerary each with a variable number of possible activities, so you could create 5 outings to restaurants, each with 5 choices for the group to vote on. Arrays within arrays with buttons to add/remove fields. It became quite complicated!"
                    },
                    {
                        photo: dashboard,
                        description: "This is the main dashboard for the app, the screen you reach after logging in. This shows the 3 main functions of the app, creating a new trip, joining a trip and viewing trips you have already joined"
                    }
                ]
    },
    {
        title: "Travel Herd",
        links: ["https://github.com/L-E-W-1-5/travel_herd_frontend", "https://github.com/L-E-W-1-5/travel_herd_backend"],
        details: "A four week project created with five other students as our final project. We worked as an Agile team with daily standups and retros, we worked in pairs which we were constantly changing so that everybody understood each part of the code. It was created using a React frontend and an Express backend which was accessing data we had created in a relational PostgreSQL database. The idea we had was to create a group travel app where a user can create a trip including destination, itinerary, dates, members etc. To make this more useful we included the option for the user to create multiple entries for any field, any field with multiple entries would be voted on by the rest of the group. The group members added are each sent an email inviting them to join the trip. Each user has their own account which they need to log into, giving them access to any trips they are a part of and allowing them to cast votes where needed. This was accomplished using Auth0.",
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
                    }
                    
                ]
    },
    {
        title: "C# WPF Games",
        links: ["https://github.com/L-E-W-1-5/hangman_tetris"],
        details: "A WPF application created as a way to learn more about the C# language, how to create WPF applications and how XAML is written.",
        photos: [
                    createTripForm
                ],
        stages: [
                    {
                        photo: createTripForm,
                        description: "This is a multipage form created with a custom hook which takes in 5 separate forms and adds them each into an array, the index of which is what gets incrimented to move to the next page/form. The useForm hook was used along with the useFieldArray hook, making it possible to create forms with a user defined amount of entries for specific fields. This is for the user to create for example, 3 possible destinations for the group to later vote on. A challenge faced with the form was needing to create a variable number of items on the itinerary each with a variable number of possible activities, so you could create 5 outings to restaurants, each with 5 choices for the group to vote on. Arrays within arrays with buttons to add/remove fields. It became quite complicated!"
                    },
                    {
                        photo: dashboard,
                        description: "This is the main dashboard for the app, the screen you reach after logging in. This shows the 3 main functions of the app, creating a new trip, joining a trip and viewing trips you have already joined"
                    }
                ]
    }
]

// TODO: - could i make the stages of creation with pagination? Have the photos imported along with details about what it does.
// Or could import the images seperately and have an array of notes to list alongside?
// Can maybe try to import the projects similar to how i imported the cv pdf in recycle bin?

// Have an array of objects, each with a photo and details. Then each item of the array can be mapped to a 'Stages' component.