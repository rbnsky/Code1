#

*17.06.2023*

*DAY ONE*

## Descriptions for Software

**Git**

Git is a free, open source and easy to learn distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Allows Users to code together.

**Node.js**

Node.js JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

**Visual Studio**

Visual Studio is a Coding GUI that helps users understanding and reading code.

**TypeScript**

TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript           applications for any browser, for any host, on any OS. 
TypeScript compiles to readable, standards-based JavaScript.

## What we learned

We learned:
- how to create and share repositories.
- how to write in Markdown.
- how to link and display images in Gitub/Markdown.
- how to Clone repositories to a local computer.
- how to push local repositories to GitHub.
- how to create new branches
- how to merge branches
- how we exclude files being tracked by git
  

## Vocabulary

**stage** - Look at your code before committing. Only staged code is committed.

**commit** - Finishes the changes to a file.

**fetch** - Downloads a file version and stores it in an alternate branch.

**pull** - Fetches and merges with current Version.

**push** - Uploads committed code.

#
 
*18.06.2023*

*DAY TWO*

## Remove uncommitted changes in Git

- The git stash command, which saves uncommitted changes and reset your workspace.
- The git reset command, which only touches tracked files.
- The git clean command, that deletes every untracked file (May require -f to force the action).

## Removing Untracked Files
- Run git clean -n to see a dry run.
- Run git clean -f to force untracked file deletion.
- Use git clean -f -d to remove untracked directories.
- Use git clean -f -x to remove untracked . gitignore files.
- Add the -i switch to do an interactive git clean.

## Merge Strategies

**Merge**

    Creates a merge commit that combines changes from one branch into another.
  
    Retains all individual commits from both branches in the commit history.
  
    Provides clear information about the branch history.
  
    Useful for integrating feature branches into the main branch.

**Rebase**

    Moves the head of the current branch to the last commit of the target branch.
  
    Produces a more linear commit history.
  
    Replays the changes from the feature branch on top of the target branch.
  
    Useful for keeping a clean, linear history and avoiding unnecessary merge commits.

**Squash**

    Combines all commits from a feature branch into a single squashed commit.
  
    Creates a clean linear history but provides less information about individual commits.
  
    Useful when you want to simplify the commit history and discard the source branch.

## What does VisualStudio mean by "Sync Changes"?

Synchronize Changes will pull remote changes down to your local repository and then push local commits to the upstream branch.

If there is no upstream branch configured and the Git repository has remotes set up, the Publish action is enabled.

This will let you publish the current branch to a remote.

## What does the .git Folder do?
  
The Git directory is where Git stores the metadata and object database for your project. 
This is the most important part of Git, and it is what is copied when you clone a repository from another computer.

## HTML

We proceeded to make our own Websites using HTML which, in my case, can be found [here](https://rbnsky.github.io/Code1/).

It contains Links to this Diary, a HTML we used to try out different tags aswell as one that leads to a screenshot of a website I tampered with using HTML.

This Website will be updated with more content as the Code1 Block continues.

#

*19.06.2023*

*DAY THREE*

## Budimir's Gate

Using HTML and the Image editing Software Paint.NET we made a small game with many branching storypaths and called it Budimir's Gate.

To start the game, press [play](https://matbudimir.github.io/0Sugar/Branchgame/index.html).

## CSS

Here are some basic Properties that can be changed in CSS:

**background** - A shorthand for background properties like color, image, and position.

**border** - A shorthand for border width, style, and color.

**animation** - Controls animation properties like duration, timing function, and iteration count.

**font** - Sets font properties such as family, size, weight, and style.

**margin** - and padding: Define spacing around elements.

**color** - Specifies text color.

**display** - Determines how an element is displayed (e.g., block, inline, flex).

**position** - Positions elements (relative, absolute, fixed).

**width, height, and max-width** - Control dimensions.

**text-align** - Aligns text (left, right, center).

## What does "cascading" mean in CSS?

The “cascading” in CSS refers to the fact that styling rules “cascade” down from several sources. 

This means that CSS has an inherent hierarchy and styles of a higher precedence will overwrite rules of a lower precedence.

## Selectors in CSS

- Tag
- Id
- Class

- Pseudo
- Universal
- Hierarchy
- Attributes

## Updates to my Repository Website

I updated my Code1 Repository Website with a completely new design using css.

As always, it can be found [here](https://rbnsky.github.io/Code1/).

#

20.06.2024*

*DAY FOUR*

## Creating a Web-based Game using Typescript

Today we started creating another branching story game, this time using Typescrpit.

While it isn't fully finished, the project can be found [here](https://matbudimir.github.io/0Sugar/Robjoern/index.html).

#

*24.06.2024*

*DAY FIVE*

## Typescript Code Review

We reviewed the progress we made on our Typescript-based branching story game, learning about arrays in the process.

Using arrays, we separated the text content from our code (which we haven't quite finshed yet).

#

*25.06.2024*

*DAY SIX*

## TypeScript Event Commands

**Mouse Events**

**click** - Fired when a pointing device button is pressed and released on an element.

**dblclick** - Fired when a pointing device button is clicked twice on an element.

**mousedown** - Fired when a pointing device button is pressed on an element.

**mouseuop** - Fired when a pointing device button is released over an element.

**mouseover** - Fired when a pointing device is moved onto an element.

**mouseout** - Fired when a pointing device is moved off an element.

**mousemove** - Fired when a pointing device is moved while over an element.

**Keyboard Events**

**keydown** - Fired when a key is pressed.

**keyup** - Fired when a key is released.

**keypress** - Fired when a key is pressed down and released.

**Form Events**

**submit** - Fired when a form is submitted.

**change** - Fired when the value of an element has been changed.

**focus** - Fired when an element has received focus.

**blur** - Fired when an element has lost focus.

**input** - Fired when the value of an `<input>`, `<textarea>`, or `<select>` element is changed.

**Touch Events** for touch-enabled devices

**touchstart** - Fired when a touch point is placed on the touch surface.

**touchend** - Fired when a touch point is removed from the touch surface.

**touchmove** - Fired when a touch point is moved along the touch surface.

**touchcancel** - Fired when a touch point has been disrupted in some way.

**Window Events**

**load** - Fired when the whole page has loaded.

**resize** - Fired when the document view is resized.

**scroll** - Fired when the document view or an element is scrolled.

**unload** - Fired when the document or a child resource is being unloaded.

**Clipboard Events**

**copy** - Fired when a copy action is initiated.

**cut** - Fired when a cut action is initiated.

**paste** - Fired when a paste action is initiated.

**Drag and Drop Events**

**drag** - Fired when an element or text selection is being dragged.

**dragend** - Fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key).

**dragenter** - Fired when a dragged element or text selection enters a valid drop target.

**dragover** - Fired when an element or text selection is being dragged over a valid drop target.

**dragleave** - Fired when a dragged element or text selection leaves a valid drop target.

**drop** - Fired when an element or text selection is dropped on a valid drop target.

## Example of Adding Event Listeners in TypeScript

**An example demonstrating how to add event listeners for events in TypeScript**

```typescript
let button = document.querySelector<HTMLButtonElement>('#myButton')!;
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

let input = document.querySelector<HTMLInputElement>('#myInput')!;
input.addEventListener('input', () => {
    console.log('Input changed:', input.value);
});

window.addEventListener('resize', () => {
    console.log('Window resized!');
});











