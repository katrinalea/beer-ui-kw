# Beer UI, Oxbury assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Installed eslint and prettier packages to make development smoother.
Added Continuous integration script to ensure constant linting and formatting checks.

Notes -
Needs more testing, not sure where to implement this other than on the functions currently.

Pagenation does not update as filter function takes place, and filter only works one page per time, have to click a new page number to see filtered results there, unsure how to implement a rolling filter based off continuous fetching from API sadly, maybe to do with fetch to API? need to re-fetch data as the filtered list becomes smaller. Perhaps a get request, get beers where name.includes search term?
Don't want to store the whole API in state?

Netlify link to deployed project [Beer UI]("https://beer-ui.netlify.app") https://beer-ui.netlify.app/
