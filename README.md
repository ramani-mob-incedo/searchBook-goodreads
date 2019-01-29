# searchBook-goodreads
Search Books from Goodread Api integrated in ReactJs


# **Search Books**

Search Books integrated with goodread api and can be searched by title, author or isbn code.

# Installation Process

**Required Softwares and frameworks:** 

Install Node.js from https://nodejs.org/en/ 

**Create Environment Variable to get Goodreads api:**

`GOOD_READS_API_REACT` : Good reacts api can be create from  [here](https://www.goodreads.com/api/keys).

Copy the keys from Good Reads and add the security key in
BookDetails.js : line no. 5 
and
Search.js : line no. 6

Note: If you are using localhost for eg: http://localhost:3000

Change The path to http:// from https://
in BookDetails and Search.js as
const requestUri =
      `https://cors-anywhere.herokuapp.com/` +
      `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;


**Clone the repo:**

    git clone https://github.com/ramani-mob-incedo/goodreads-react.git

**Install dependencies:**

**Dependencies are added in Package.json file.**

    npm install

**Starting the application in development mode:**

    npm start

# Building the application:

To build the production assets, run

    npm run build

# Testing the App:

Right now there is only one test suite. (renders without crashing)

    npm test

# Features In Current Version:

1. Search for books by title, author, or ISBN.
2. Displays upto 20 search results in bootstrap cards.
3. Displays only title, author, and link to goodreads page.
4. See the description and rating, and other details by clicking on individual result.

# Future Implementation:

Some of the things that I want to implement in the future version are:

1. Ability to see others' reviews.
2. Improved UI/UX with LESS/SASS framework.
3. Ability to see user comments.
4. Search Typeahead Dropdown.


