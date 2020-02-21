# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    - React JS manages interactions with the DOM and helps organize code into separate components.

2. What does it mean to think in react?

    - Thinking within the rules of react rather than vanilla javascript by using state, props, and components.

3. Describe state.

    - State is anything that changes within a component.

4. Describe props.

    - Props are properties that are passed into a component from its parent.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

    - Side effects are anything that affects something outside the scope of a function that is being invoked. (i.e. console.log(), axios calls, or setTimeout()). You can sync effects to state or prop changes by including an array of what you want to sync in the useEffect function parameters.