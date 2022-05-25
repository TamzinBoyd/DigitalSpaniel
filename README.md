➔ We look for quality over quantity, so don't worry about getting it all done, just
ensure that what is completed is of great quality.
Specification:
➔ The top navigation section should be sticky but also hide when the user scrolls down and reappear if the user scrolls up
➔ The "Services" menu item shows the hover/active state of each menu item for the header
➔ The header area (nav?) should be full screen on desktop and collapse to a hamburger style menu on tablet and mobile viewports which slides in/out of view when clicked/tapped

➔ For links (e.g. "Lets talk") add a hover animation of your choosing
➔ The "What are we capable of" shows the hover state on "Brand Strategy"
➔ "Some of our recent projects" shows a tabbed slider action. Animation for slider
and tabs of your choosing. Image hover state shown on "Make Ideas Happen"
project.
➔ "Case Studies" slider section shows an active Case Study and two further Case
Studies to the left and right which are accessed using the arrow buttons
➔ "What are we all about?" section shows a masonry gallery - final image layout
can be adjusted
➔ The testimonial slider section shows the active slide, with further slides
accessed using the circle buttons
➔ All links and buttons should have an hover/active/visited state where
appropriate
➔ No tablet or mobile visuals are provided, so stack, reduce content where
appropriate inline with best practice
It would be great to demonstrate any knowledge you have of React & Javascript
overall on the frontend using the latest standards - i.e. ES6+ - we’d also find it useful
to see some TypeScript utilised as well as utilising global state management such as
Redux or the Context API. For example:
➔ Testimonials could be data that’s accessed from an external API (in normal
circumstances) and you could use Redux to fetch these with async actions
and store to/retrieve from state. As there is no external API in this case, this
could be data fetched from a JSON file elsewhere in the app.

MY APPROACH

2. Set out component tree to plan what information would be stored where & what components needed access to certain props
3. Considered where useState might be used to render appropriate elements on the virtual DOM
4. Looked online for a suitable React based hamburger menu but decided to make my own. Opted for a hidden button and onClick event on the hamburger menu. on click it changes the state which generate the HTML for a drop down list
5.

MY NOTES TO REMOVE
Sass - use \_ for varaibles to make sure it isn'r compiled and instead is imported
no ITC avant guard font on google
Learnt about NavLink hook, pulls in from react-router-dom
