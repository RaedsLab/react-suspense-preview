# react-suspense-preview

A working demo of React Suspense and axios data fetching.

### Instructions

#### Install dependencies 

`$ yarn install`

`$ cd front && yarn install`

#### Run projects

`$ yarn dev`

This will run both the Node (Expess) project (Port 5000) and the React app (Port 3000).

The Node services are slow on purpose as both API calls will be delayed by 2 to 3 seconds which gives the time to see Suspense in action.

On call will fail (404) on purpose to show how the error boundery would work. There is an [ErrorBoundary class component](https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks) that should help catch the error.
