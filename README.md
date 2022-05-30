STILL TO DO
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

--- we’d also find it useful
to see some TypeScript utilised as well as utilising global state management such as
Redux or the Context API. For example:
➔ Testimonials could be data that’s accessed from an external API (in normal
circumstances) and you could use Redux to fetch these with async actions
and store to/retrieve from state. As there is no external API in this case, this
could be data fetched from a JSON file elsewhere in the app.

MY APPROACH

1. Set out component tree to plan what information would be stored where & what components would need access to props
2. Created Navbar and utilised Link component from React Scroll to create references links on the DOM
3. Knew we needed a hamburger menu for mobile viewing. Opted for a FontAwesome icon and used the documentation to implement it. Added event listener to a button which changes isNavbarOpen state and only renders the JSX if it's activated (using ternary operator)
4. Created header section.
5. Created About section. This needed to recognise a user hovering on a title so I used a mouseover event listener. This changed state which prompted the generation of JSX. This takes parameters to determine what text is shown. This section could definitely be refactored with a map/loop but works for now. I felt the code was cleaner by storing Data in an array of objects separately. \*Still to add little arrow icon when element is activated with hover.
6. I've not created a scroll bar which sticks and disappears before, so decided to utilise useState and then looked online for a solution involving window.scrollY. This looks at user's scroll position & remembers it, and if they scroll up then the navbar is hidden, otherwise it stays at the top of the screen.
7. I started the Project/Work section, again knew I wanted to store data separately (data file for now) and keep it in state. when the user selects a category to filter on a click event changes state and filters the data. A card is then rendered and shown in the grid.
8. For the pink underline I decided to create an object and store it as state. If one of the values it true then it gets added to the className as "active" and class attributes are applied.

   \*This section is work in progress, currently the mouseover text to display isn't linked to the card and doesn't have the correct styling inheritance. It also needs a mouseOver event listener applying.

STYLING
BEM naming system to keep it tidier
SASS
Variables file
Kept media queries within component styling files

MY NOTES TO REMOVE
Sass - use \_ for varaibles to make sure it isn't compiled and instead is imported
no ITC avant guard font on google, used Poppins
Learnt about NavLink hook, pulls in from react-router-dom
REM - relative to font size of html doc, em relative to parent font size, both better for responsive sites. % more effective for margins and repsonsiveness

Redux
