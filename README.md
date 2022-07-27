`Assignment - Crafted with Love by Mustafa Cakir`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.


## State Management

-   `redux` has been used to manage the global-level or screen-level states
-   `useState` has been used in various components to keep the state closer to where is actually being used

## Folder Structure

-   `src/app` Global app setup and configurations used by the entire app are defined in the app folder (store, routes, types, testWrapper and app container)
-   `src/features` Feature-specific components, Slice (Redux reducer logic and associated actions — [Redux Toolkit](#https://redux-toolkit.js.org/)), APIs, and their styles are placed in the features' folder.
-   `src/common` Re-usable helpers/utils, shared components, hooks, etc. are defined in the common folder
-   `src/assets` Static assets like images, files, icons are placed in the assets' directory (global stylesheet, mixins, colors and custom UI-kit etc.)
-   `src/screens` Includes the screen container of the page/routes

fyi: The `feature folder structure` is recommended by the [Redux style guide](#https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-with-single-file-logic). By using Redux Toolkit, it is now possible to avoid boilerplate code like actions and reducers.

## Tests

-   npm package `msw` has been used to mock the API requests
-   React Testing Library has been used to run the unit and integration tests

## Test Summary

    Test Suites: 27 passed, 27 total
    Tests:       81 passed, 81 total
    Snapshots:   0 total
    Time:        1.643 s, estimated 2 s

## Test Cases

`[PASS] - src/features/Products/UpdateProductModal/__tests__/UpdateProductModal.spec.tsx`
- Update Product Modal
  - ✓ should render the component properly (21 ms)
  - ✓ should handle the error case properly (8 ms)
  - ✓ should handle the success case properly (5 ms)
  - ✓ should handle the success case properly (4 ms)

`[PASS] - src/features/Products/ProductsContent/__tests__/ProductsContent.spec.tsx`
- Products Content
  - ✓ should render the component properly (23 ms)
  - ✓ should render all the available products (7 ms)
  - ✓ should handle the loading case properly (7 ms)
  - ✓ should handle the error case properly (3 ms)
  - ✓ should handle the empty state properly (1 ms)

`[PASS] - src/app/App.spec.tsx`
- App
  - ✓ should render app without any error (25 ms)

`[PASS] - src/features/user/__tests__/LoginForm.spec.tsx`
- LoginForm features
  - ✓ should render the component properly (16 ms)
  - ✓ should include the password and username fields (4 ms)
  - ✓ should include the submit button (5 ms)
  - ✓ should show the validity if the form is submitted while input fields are empty (19 ms)

`[PASS] - src/features/Products/AddProductForm/__tests__/AddProductForm.spec.tsx`
- Add product form
  - ✓ should render the component properly (20 ms)
  - ✓ should include the material, title and the checkbox fields (7 ms)
  - ✓ should show the validity if the form is submitted while input fields are empty (18 ms)
  - ✓ should handle the error case properly (4 ms)
  - ✓ should handle the success case properly (4 ms)
  - ✓ should handle the loading case properly (3 ms)

`[PASS] - src/common/components/Shimmer/__tests__/ShimmerItem.spec.tsx`
- Shimmer Common Component
  - ✓ should render shimmer items component (10 ms)
  - ✓ should reflect the className prop to shimmer items properly (1 ms)
  - ✓ should reflect the marginBottom prop to shimmer items properly (12 ms)
  - ✓ should reflect the height prop to shimmer items properly (4 ms)
  - ✓ should reflect the width prop to shimmer items properly (3 ms)

`[PASS] - src/common/components/Modal/__tests__/Modal.spec.tsx`
- Modal Common Component
  - ✓ should render modal component (12 ms)
  - ✓ should modal component display content inside the modal (3 ms)
  - ✓ should modal component reflects max-width prop (13 ms)
  - ✓ should trigger closeHandler upon clicking the close button (3 ms)

`[PASS] - src/screens/Products/ListProducts/__tests__/ListProducts.spec.tsx`
- List Products Screen
  - ✓ should render page without any error (27 ms)

`[PASS] - src/features/user/__tests__/userAPI.spec.ts`
- User Api
  - ✓ should handle login properly (9 ms)
  - ✓ should handle error during login properly (5 ms)

`[PASS] - src/features/Products/__tests__/productsAPI.spec.ts`
- Products Api
  - ✓ should fetch products properly (8 ms)
  - ✓ should add product properly (3 ms)
  - ✓ should update product properly (3 ms)
  - ✓ should delete the product properly (4 ms)

`[PASS] - src/screens/Page404/__tests__/Page404.spec.tsx`
- Page 404 Screen
  - ✓ should render page 404 screen without any error (11 ms)
  - ✓ should display the page not found error message (3 ms)

`[PASS] - src/common/components/Input/__tests__/Input.spec.tsx`
- Input Common Component
  - ✓ should render the component properly (10 ms)
  - ✓ should display the value as typing (4 ms)
  - ✓ should fire the onChange event as typing (2 ms)
  - ✓ should render the props properly (3 ms)

`[PASS] - src/common/components/Button/__tests__/Button.spec.tsx`
- Button Common Component
  - ✓ should render button component properly (9 ms)
  - ✓ should button component display children properly (2 ms)
  - ✓ should trigger onChange event once it is clicked (3 ms)
  - ✓ should display the loading animation properly (3 ms)
  - ✓ should type prop rendered properly (2 ms)
  - ✓ should ttitle attribute render properly (2 ms)

`[PASS] - src/common/components/Header/__tests__/Header.spec.tsx`
- Header Component
  - ✓ should render header component without any error (11 ms)
  - ✓ should display logo in the header (3 ms)
  - ✓ should display the logout button if user is logged in (4 ms)

`[PASS] - src/features/Products/LayoutButtons/__tests__/LayoutButtons.spec.tsx`
- Layout Buttons
  - ✓ should render the component properly (11 ms)
  - ✓ should grid active case properly (2 ms)
  - ✓ should list active case properly (2 ms)
  - ✓ should handle the changing properly (6 ms)

`[PASS] - src/common/components/Alert/__tests__/Alert.spec.tsx`
- Alert Common Component
  - ✓ should render alert component (10 ms)
  - ✓ should alert component display message prop (2 ms)
  - ✓ should alert component type set to error (2 ms)
  - ✓ should alert component type set to info (1 ms)
  - ✓ should alert component type set to success (2 ms)

`[PASS] - src/common/components/Checkbox/__tests__/Checkbox.spec.tsx`
- Checkbox Component
  - ✓ should render the component properly (10 ms)
  - ✓ should trigger the onChange event upon typing (4 ms)
  - ✓ should reflect the default value (2 ms)

`[PASS] - src/features/Products/ProductItem/__tests__/ProductItem.spec.tsx`
- Product Item
  - ✓ should render the component properly (12 ms)
  - ✓ should product properties should be rendered properly (3 ms)

`[PASS] - src/common/components/Icons/__tests__/Icons.spec.tsx`
- Icons Common Component
  - ✓ should render icons component (8 ms)
  - ✓ should icon component display icons (2 ms)

`[PASS] - src/features/Products/ListProductsLoading/__tests__/ListProductsLoading.spec.tsx`
- List Products Loading
  - ✓ should render the component properly (16 ms)

`[PASS] - src/features/user/__tests__/userSlice.spec.ts`
- User Reducer
  - ✓ should handle initial state (1 ms)
  - ✓ should setLogin set the user authenticate and set token to cookie (2 ms)
  - ✓ should handle logout action properly

`[PASS] - src/common/components/Shimmer/__tests__/Shimmer.spec.tsx`
- Shimmer Common Component
  - ✓ should render shimmer component (9 ms)

`[PASS] - src/screens/Products/AddProduct/__tests__/AddProduct.spec.tsx`
- Add Product Screen
  - ✓ should render page without any error (19 ms)

`[PASS] - src/common/components/Footer/__tests__/Footer.spec.tsx`
- Footer Component
  - ✓ should render footer component without any error (11 ms)

`[PASS] - src/features/Products/__tests__/productsSlice.spec.ts`
- Products Reducer
  - ✓ should handle initial state (1 ms)
  - ✓ should reset add state properly (1 ms)
  - ✓ should open update product modal properly
  - ✓ should close update product modal properly (1 ms)

`[PASS] - src/common/components/Loader/__tests__/Loader.spec.tsx`
- Loader Common Component
  - ✓ should render the component (8 ms)

`[PASS] - src/common/utils/__tests__/utils.spec.ts`
- Utils methods
  - ✓ should render alert component
  - ✓ should set and get the cookie works properly (1 ms)


## Getting Started

This project includes React (`/src/`) + API sever (`src/server`). They both needed to be run on the local machine.


1. To run the react app (http://localhost:3000):

    ```sh
    # install dependencies
    yarn install 
    # it will start a server instance on port 3001
    yarn dev
    ```
2. to tun the API Server (http://localhost:7001)

    ```sh
    # navigate to server's root folder
    cd server
    # install server's dependencies
    yarn install 
    # it will start a server instance on port 7001
    yarn dev
    ```

3. To run the test watcher in an interactive mode:

    ```sh
    # By default, runs tests related to files changed since the last commit.
    yarn test
    ```

4. To build the app:

    ```sh
    # it will place all files needed for deployment into the /build directory
    yarn build
    ```
