#TechScout
##Technologies
- Node.js: an open-source, cross-platform JavaScript environment for developing applications.
- Express.js: a web application framework for Node to build APIs and web apps.
- React.js: an open-source JavaScript library for data rendered as HTML.
- PostgreSQL:  an open source relational database management system.
- Webpack: a Module bundler that takes modules with dependencies and generates static assets.
- HTML: hidden code that helps us communicate with others on the World Wide Web.
- CSS3: the language for describing web pages, including colors, layout, and font presentations.
- Javascript: an object-oriented computer programming language .

##Installation
- Terminal:

   Step 1: git clone git@github.com:tech-scout/tech-scout.git

   Step 2: npm install --save

   Step 3: PSQL
   
          Part 1: createdb <database name>

          Part 2: psql -d <database name> -f ./db/schema.sql

          Part 3: psql -d <database name> -f ./db/seeds.sql

    Step 4: touch .env

            INCLUDE:

                - DB_HOST=localhost

                - DB_PORT=5432

                - DB_NAME=<database name>

                - DB_USER=<username>

                - DB_PASS=<password>

      Step 5: npm run watch

      Step 6: nodemon

##User Stories

The user will be able to search for events without logging in, once they are logged in, they can:

  - search events

  - create events

  - view their own profile

  - view the events they created

  - view the events they are attending

  - navigate to a dashboard with event feed

  - see what friends are going to what events in the feed

##Unsolved Problems

-TO BE DETERMINED
