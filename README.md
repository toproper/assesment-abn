# abn-amro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

Unfortunately I’m working full-time at the moment and I have children so the time I could spend was very limited. I would have prefered to spend a bit more time to make a proper first release, the state of the app right now is still very much a work in progress. Following is a minimal todo list of items that I would want to fix for a real first release.

## Todos

### Tests
Unfortunately I ran out of time before I could add proper tests. Had to remove some tests at the last moment because they were breaking the build. Specifically more tests for the API call(s) with proper Axios mocks and more unit tests, for the getters etc.

### More typing
More typescript, type everything. Ran into some issues with Typescript and VUEX that I didn't have time to sort out, so I cheated a bit with implicit typing.

### (Re)organize the css
I’ve added some basic shared vars but the css should be cleaned up. I would get rid of all magic numbers from the components. And either use more shared vars, mixins/placeholders or maybe  switch to a Tailwind-like utility classes style. 

### (Re)organize the store
Group store in modules, move getters/actions etc. to seperate files.

### add more components
Some components have elements that could be extracted as separate components. I prefer simple composed components over more complex, polymorphic, components, they’re some improvements to be made in this regard. 

### Add shared services etc. 
Move shared functionality to services/helpers (for example: the API calls) in a shared service.

### Improve the loading from the API
Right now the app loads the first page of the shows to the store. All data is derived from that state. Could probably do some smarter lazy loading by exploring the API better. For instance, I couldn’t find an endpoint to get a list of genres. 

### Various bugs/improvements
- Show the rating in the Show teaser to make the sorting by rating more clear.
- Change all references to “movies” to “shows”. I was so fixated on the functionality  that I missed that we were working with shows, not movies. 
- Better error handling, particulary of the API call(s)
- Add search feature, didn’t have time to finish this so I had to leave it out, unfortunately. 
- Use Pinia instead of Vuex. 
- Clicking outside movie details modal closes it
- Make modal work with scrolling 
- Display genre row with just a few movies better
- Improve responsiveness, right now the mobile few is not great. Would probably add one or two mobile first breakpoints
