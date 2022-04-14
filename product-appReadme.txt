step 1:To create a new React project, we can use the tool npx.
          type in terminal "npx create-react-app product-app"
          Once we run this command, a folder named "product-app" 
          will be created where we specified on our computer and
          all of the packages it requires will be automatically installed.
step2: Once our project files have been created and our dependencies
         have been installed, our project structure should look like this:
                 product-app
                ├── README.md
                ├── node_modules
                ├── package.json
                ├── .gitignore
                ├── public
                └── src
          <> README.md is a markdown file that includes a lot of helpful tips
               and links that can help you while learning to use Create React App.
          <> node_modules is a folder that includes all of the dependency-related
              code that Create React App has installed. You will never need to go into this folder.
          <> package.json that manages our app dependencies and what is included in our 
              node_modules folder for our project, plus the scripts we need to run our app.
          <> .gitignore is a file that is used to exclude files and folders from being tracked 
              by Git. We don't want to include large folders such as the node_modules folder
          <> public is a folder that we can use to store our static assets, such as images, svgs,
              and fonts for our React app.
          <> src is a folder that contains our source code. It is where all of our React-related 
              code will live and is what we will primarily work in to build our app.
step 3:Once you have dragged your project into your code editor, you can open up your terminal
        (in VSCode, go to View > Terminal), and simply run
          
            "npm start"

        When we run our project, a new browser tab will automatically open on our computer's 
         default browser to view our app.
         The development server will start up on localhost:3000 and, right away, we can see the 
          starting home page for our app.