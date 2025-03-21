

# Dichos / Quotes App  

Dichos is an app that allows users to post, delete, edit, and read their favorite quotes and proverbs in Spanish, with English translations.  

Check out the application [here](https://dichos-e7267d865f38.herokuapp.com/)  

## Application Routes

| Action  | Route | HTTP Verb |
|---------|--------------------------------------|-----------|
| Index   | `/users/:userId/dichos`       | GET       |
| New     | `/users/:userId/dichos/new`   | GET       |
| Create  | `/users/:userId/dichos`       | POST      |
| Show    | `/users/:userId/dichos/:dichoId` | GET   |
| Edit    | `/users/:userId/dichos/:dichoId/edit` | GET  |
| Update  | `/users/:userId/dichos/:dichoId` | PUT   |
| Delete  | `/users/:userId/dichos/:dichoId` | DELETE |




| **Resource**         | **Link** |
|----------------------|------|
| **Product Canvas**   | [View Product Canvas](https://docs.google.com/document/d/1-sXK59yFZNc_QD_P5M6qApEwut9YyZf1k2RbvTNneYk/edit?tab=t.0#heading=h.yjkq4hd1mfwt) |
| **Trello Board**     | [View Trello Board](https://trello.com/b/qb8G32KS/dichos-project-unit-2) |
| **Heroku Pages**     | [View Deployed App](https://dichos-e7267d865f38.herokuapp.com/) |
| **GitHub Repo**      | [View Repository](https://github.com/paintedlbird7/Dichos) |

  
![Landing Page](assets/images/LandingPage.png)  
![Dichos Homepage](assets/images/HomePage.png)

### Key Features  

- Users can access the Dichos quotes page by logging in or signing up.  
- Users can create/add a quote.  
- Users can read their quotes displayed on the screen.  
- Users can update a quote’s name, translate a quote, or edit the author’s name.  
- Users can delete a quote.  
- Users can see other registered Users and see their quotes and the number of quotes they have.

## Tech Stack  

### Frontend built using:  
- JavaScript, EJS, CSS, Material CSS 

### Backend built using:  
- MongoDB, Express
  

### Clone this repository and navigate into it  

```git clone https://github.com/paintedlbird7/Dichos/tree/master && /Dichos/tree/master```
  

## Attributes  

- Icons: [Google Fonts](https://fonts.google.com/)  

## Next Up  

- Users can click on other people's quotes in their profile  

## Contributors  

### Rosa Perez [GitHub](https://github.com/paintedlbird7)  

| **Resource**         | **Link** |
|----------------------|------|
| **Product Canvas**   | [View Product Canvas](https://docs.google.com/document/d/1-sXK59yFZNc_QD_P5M6qApEwut9YyZf1k2RbvTNneYk/edit?tab=t.0#heading=h.yjkq4hd1mfwt) |
| **Trello Board**     | [View Trello Board](https://trello.com/b/qb8G32KS/dichos-project-unit-2) |
| **Heroku Pages**     | [View Deployed App](https://dichos-e7267d865f38.herokuapp.com/) |
| **GitHub Repo**      | [View Repository](https://github.com/paintedlbird7/Dichos) |

Check out the application [here](https://dichos-e7267d865f38.herokuapp.com/)  

#### Add Neccessary Environment Viariable

- npm i

#### Start the Application

`nodemon`

### Frameworks

Material CSS