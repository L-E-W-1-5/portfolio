import createTripForm from '../data/travel_herd/create_trip_form.png';
import dashboard from '../data/travel_herd/dashboard.png';


export const projects = [
    {
        title: "School Of Code Across The Globe",
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
        details: "A four week project created with five other students as our final project",
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
        title: "C# WPF Games",
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