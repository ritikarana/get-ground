To run the Project , Please follow the Instructions

For SSH setting please follow this : https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

 Clone the Repo : 
`git clone git@github.com:ritikarana/get-ground.git`

Install the Dependencies : 
`yarn install`

Build the Repo: 
`yarn build `

Run the Project :
`yarn start`

To run the test cases : 
`yarn test`

According to the Assignment , i need to cover the following points : 

Requirements: 

1. Using React, build a webapp that queries this paginated endpoint. Use Redux to save the results and then print out the results as a list on the page. 

   `Used Redux Toolkit and RTK Query for loading the data . Some of main features for RTK 

    Tracking loading state in order to show UI spinners
    Avoiding duplicate requests for the same data
    Managing cache lifetimes as the user interacts with the UI


2. The app should be paginated with the pagination reflected in the url (so when the page is refreshed, the same results are shown). - Done



3. Write at least one component as a React class based component (the rest can be functional components). 

   Class Based Component -  `src/components/BooksItem.js`

4. Write one unit test for a component and one test for the Redux reducer. 


Redux Reducer Unit Test :  `src/redux/slices/bookSlice.test.js`

5. Host your code on Github, put all the code in a Pull Request against the (probably) empty repo. Please also compile your files in a zip file and upload as well as your Github code. 

Due to High office work load i am not able to achieve one unit test case for the component and optional points. 

I tried to implemented the search navigation too , Passing params in filters `filters:[{type: "all", values: ["YOUR_SEARCH_FIELD_CONTENTS"]}] ` . It is giving me same result

