# merpay-frontend-template_J275058451 React TypeScript Shopping List Component

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Shopping List App is ready to be deployed!

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Component Details :

This Component is build on the principles of React Component based composition architecture with Hooks based pattern.

The Landing Page has three major components:

* ``` <SearchBar /> ```
* ``` <CategoryMenu /> ```
* ``` <ItemListView /> ```


Apart from this, **ItemDetail** Component will be used to display the item in isolation mode

There are two Router Links URI defined:

<li>{BASE_URL} + '/' : Navigate to Home Page [Landing Page]

<li> '/items/:id' : Navigate to ItemDetail Page.

<li> Data from API will be fetched using <i>axios</i> Library.</li>

<li> Items can also be accessed directly through the URL : {BASE_URL} + '/items/:id'</li>

<i>The internal state of Components ``` <SearchBar /> ``` and ``` <CategoryMenu /> ``` has been lifted up to Parent level to share data between them seamlessly.</i>

``` <ItemListView /> ``` will render ```<ItemView />``` List on UI on initial Load.

```<ItemView />``` will display either the Item View in List or Detail View based on the prop ```isDetailView```. The Item Detail Section makes use of the original ItemView Component to resue the basic UI structure. Emphasis has been made to adere with DRY principles for UI components and styling.

The filtering of Item List uses the React ```useMemo()``` Hook to optimize re-rendering of components after every onChange of search query and onClick of Category tabs.


Transition of initial rendering to Landing Page is done with the help of Lazy Loading of component ``` <ItemListView /> ``` which is wrapped under ```Suspense``` Component and  ```<NotificationPanel />``` as Fallback UI.


Generic components such as ```<IconPanel />``` has been used to render Icons with size and label(optional) as props.

30 tests cases has been written including snapshots testing using Jest.


