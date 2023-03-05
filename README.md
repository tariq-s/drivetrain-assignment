## Starting the App

To get the app up and running, in the project's root directory, run the following commands:

### `npm i`

and then,

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## The Build Process

The autocomplete component has 2 state variables: the input query and the suggestions list. The component rerenders every time the input query changes.

### Debouncing

- Requests cannot be made to fetch suggestions each time the query changes. Debouncing helps to limit the rate of requsets made.

- After a request has been made, any further requests within the next 300 milliseconds are blocked. The next request can only be made after 300 milliseconds.

### Handling a Large Query Result

- The GitHub API returns a max of 30 results for a request with username as the query. Usually this number of results are not required. Optimizing on this, a max of only 10 resuls are fetched by setting the `per_page` parameter in the request API.

- If the user wishes to see more results, clicking on a button at the bottom of the resuls will fetch the next page of results and append it to the suggestions list. This operation can be repeated till all the results are exhausted. (feature not implemented yet)

- Further more, few results returned by the API do not match with the query and are filtered out.

### Loading and Error States

- Loading the avatar of the suggestions may take a while. Integrated loading spinners for a better user experience.

- If by any chance the request to the API fails, the previous state is maintained (to avoid the app breaking) and an error message is logged on the console.

### Code Structure

All the source code directories reside in the 'src' directory. The 'src' dirctory has root 'App' component, a 'components' directory and a 'utils' directory.

#### 'components' Directory

All the React components reside in the omponents folder. Each component is a directory with the component name as the directory name (in camel case). This directory has a JavaScript file and a CSS file.

#### 'utils' Directory

Contains the utility functions used in the app.

Update
