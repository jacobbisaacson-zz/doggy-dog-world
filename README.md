# doggy-dog-world-backend
This Project is Deployed at https://its-a-doggy-dog-world.herokuapp.com/

## Wireframes
Purpose / Notes
![Purpose / Notes](https://i.imgur.com/iiANu6z.jpg)

Login / Register
![Login / Register](https://i.imgur.com/RQL9jm0.jpg)

Add / Edit Dog
![Add / Edit Dog](https://i.imgur.com/Okj4R33.jpg)

All Dogs
![All Dogs](https://i.imgur.com/6nr1w42.jpg)

Map / Home
![Map / Home](https://i.imgur.com/SjRDyt7.jpg)

OR

MapShowPage / Home(UserPage) (better version)
![MapShowPage / Home(UserPage) (better version)](https://i.imgur.com/vhpRonQ.jpg)

Add / Edit Profile / Preferences
![Add / Edit Profile / Preferences](https://i.imgur.com/vhpRonQ.jpg)

Models chicken scratch
![Models chicken scratch](https://i.imgur.com/dJt1Us0.jpg)

User Preferences / Dog Profile (version 1)
![User Preferences / Dog Profile (version 1)](https://i.imgur.com/l3Ukqb0.jpg)


## User Stories

- User can REGISTER, LOGIN, LOGOUT
- User can CREATE their dog
- User can EDIT/UPDATE/DELETE their dog
- User can DELETE their dog
- User can VIEW all dogs
- User can VIEW the map
- User can CREATE a profile (preferences)
- User can EDIT/UPDATE/DELETE their profile (preferences)
- User can VIEW all parks ??
- User can see which parks are Green, Yellow, or Red light
- User can select park to see that park's details:
	- including name, location, clean, big, fenced, busy
- User can CRUD Parks

## Models

- Dog
	- name
	- owner (FK)
	- breed
	- image

- User
	- username
	- email
	- password
	- ? current location ? (Geospatial)

- Park
	- name
	- location (Geospatial)
	- isClean (bool)
	- isFenced (bool)
	- isBusy (bool)
	- isBig (bool)

- UserPref (or maybe call it Profile, or UserProfile)
	- clean
	- fenced
	- busy
	- big

## Routes (-- all /api/v1 --)

- /users/register (register) POST
- /users/login (login) POST
- /users/edit (edit/update) PUT
- /users/delete (delete/destroy) DELETE
- /users/all (show/index) GET

- /dogs (show/index user's dogs) GET
- /dogs/all (show/index all dogs) GET
- /dogs/ (create) POST
- /dogs/id (delete) DELETE
- /dogs/id (edit/update) PUT

- /parks (show/index) GET
- /parks/ (create) POST
- /parks/id (delete) DELETE
- /parks/id (edit/update) PUT


## Tech Used

- React front
- Flask back
- SQL DB
- Google Maps / Mapbox API ??


## Other Notes
- Can the User add comments / posts to the park

- Does the park data (related to User Preferences) revert to Default at 12AM daily? (user is going to cruyd the parks)

- Should the home page be the Map, or the list of parks with the User's profile side by side?
	- where the User could select a park, or edit/update their profile/preferences
- Can Users chat? (socket.io)

- Can user "check-in" to say they are currently at a park?

- Is there any social element whatsoever?
- 

## Questions for TS, RA or DB
- How can I assign values to the importance of each preference a User selects from the options? (later 5.10)
- Am I setting up models correctly? (good)

- Route for creating user profile?  dog profile?  or should those fields be a part of the models?

- registering (sign up here to register) -- 

		Warning: Failed prop type: Invalid prop `children` supplied to `Form`, expected a ReactNode.
    in Form (at LoginRegisterForm/index.js:44)
    in LoginRegisterForm (at App.js:95)
    in div (at App.js:86)
    in App (at src/index.js:9)
// dont worry about this for now //

# NEED TO UPDATE THIS ( THE NEW USER MODEL INFO (PREFS) ) IN THE USER STUFF!!!!

- FOR scoring system (preferences) use 1, 2, and 3
- Get mapbox token
- integerfield for perferences
- making both parks and user pref's integers, 


NEW Q for TS -- 

-- TS said to put the user prefs int he user model, 
but that was not working, so i made a new model... is that going to screw me? see next... 

-- if i DONT wanna create multiple user_prefs... need help with conditional (if already have user prefs created, dont create, etc... )

-- what to do for the User Profile Show / addform / edit/update? all messed up

-- able to add new park, edit and delete it,
BUT IT DOESN'T STAY IN DB (when logging out and back in)

-- only adds a park if all the checkboxs are checked .. why?  boolean should be checkbox?  or something else?

--why isnt addnew park form working right?  edit worksm but crete doesnt,,, how is that even possible



TODO's
- set up parks container, parks list, addpark form, edit park modal
-- ask RA for help on the login / registration switch form stuff, or a way to make that make sense


-- why does the page render at the bottom when loggin in?


-- make list of messages, where to display them, and when


-- FRIDAY

-- making newly added park show immediately after creation
-- need to see the username's name next to logout link in the header
-- edit user modal has an error, but loks like its getting the info from the clicks. submitting issue
-- 

NEEDS --
1. user needs to be able to edit/update the parks they add

2. user needs to be able to edit/update the preferences they created for themselves

3. Messages -- user needs to see messages for:
	- "you can't edit this park (or dog)"
	- "congrats on registering and setting up your profile!  check out the parks, add your own, add your dogs, etc."

4. DEPLOYMENT -- can't register or login!

5. The correct color for the park card needs to show up when the park is created (not by logging out and back in)

6. DONT EVEN BOTHER WITH EDITING/UPDAING the user's preferences}
7. DONT EVEN BOTHER WITH EDITING/UPDATING the park info


Stuff for this weekend -- 
1. more styling
2. flash messages
3. user needs to see their username in the header next to logout
4. would love to get MAP container (if possible)
5. make user profile card look better
6. make the modals for showing the park look better (GET COLORS IN THERE REFERRING TO THE MATCH WITH THEIR USER SETTINGS)













