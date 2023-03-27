* [Description](#Sushi-Sake-Tapp)
* [Functionality](#Functionality)
* [Future-Development](#Future-Development)
* [Installation](#Technologies-Used)
* [Features](#Features)
* [Demo](#Demo)


# Sushi-Sake-Tapp
This is a restaurant table seating app that allows hostess' and managers to keep track of the number of guests that each server has per shift as well as the sections they've previously been assigned.

## Functionality
Sushi Sake Tapp was created with the purpose of giving servers at a restaurant the greatest possibility of making as much money as every other server. It gives much needed organization to hostesses while seating customers and also ensures servers feel that they are having a fair shift.
## Future-Development
The data sets for this application are currently held within this project but future development will integrate them into Mongodb.

## Technologies-Used
Vue.js
Node.js
Express.js
MongoDB

## API Endpoints:

GET /api/sections
Returns an array of all previous server sections on busy days. 

GET /api/parties
Returns an array of all current and past party reservations.

POST /api/sections
Creates a new section.

POST /api/parties
Creates a new party.

DELETE /api/sections/:id
Deletes sections with the specified ID.

DELETE /api/parties/:id
Deletes sections with the specified ID.


## Features
- Hostess' can easily view available tables and assign a server accordingly.
- Restaurant staff can manage and update table availability in real-time
- Servers can now be sure that they're getting the same amount of customers per shift as other servers. 
- Restaurant staff can view all current and past parties.
- Shift Leaders can now keep track of previous and current table sections for fair distribution. 

## Future-Development
- Sign-In page will be created 
- More table layouts created for other locations
- Bug-fix in parties calender view



# Demo


https://user-images.githubusercontent.com/93490778/227911183-32acf885-a7e2-4770-a7ff-6fefa1e2d9c8.mp4




*** Deployment - www.sushisaketapp.com


