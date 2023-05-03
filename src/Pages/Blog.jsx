import React from "react";

function Blog() {
  return (
    <div className="container px-4 mx-auto mt-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Blogs</h2>
      </div>
      <div className="w-full lg:w-3/4 mx-auto shadow-lg p-6 my-6">
        <h2 className="text-2xl text-black">
          Tell us the differences between uncontrolled and controlled
          components.
        </h2>
        <p className="mt-4">
          In React, controlled components are those whose values are controlled
          by React state, while uncontrolled components manage their own state
          internally. Controlled components provide a centralized way to manage
          state, while uncontrolled components are simpler to use but offer less
          control over state.
        </p>
      </div>
      <div className="w-full lg:w-3/4 mx-auto shadow-lg p-6 my-6">
        <h2 className="text-2xl text-black">
          How to validate React props using PropTypes
        </h2>
        <p className="mt-4">
          To validate React props using PropTypes, you can import the PropTypes
          library from the 'prop-types' package. Then, add a PropTypes object to
          your component and define the expected type and shape of each prop.
          For example, to ensure a prop is a string, you can use
          PropTypes.string. PropTypes will then throw a warning in the console
          if an invalid prop is passed to the component.
        </p>
      </div>
      <div className="w-full lg:w-3/4 mx-auto shadow-lg p-6 my-6">
        <h2 className="text-2xl text-black">
          Tell us the difference between nodejs and express js.
        </h2>
        <p className="mt-4">
          Node.js is a JavaScript runtime environment that allows you to execute
          JavaScript code outside of a web browser. Express.js is a popular web
          framework for Node.js that simplifies the process of building web
          applications. While Node.js provides the runtime environment,
          Express.js provides the tools and structure needed to create web
          applications in Node.js.
        </p>
      </div>
      <div className="w-full lg:w-3/4 mx-auto shadow-lg p-6 my-6">
        <h2 className="text-2xl text-black">
          What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className="mt-4">
          A custom hook is a function in React that allows you to reuse stateful
          logic across multiple components. You would create a custom hook to
          avoid duplicating code across components and improve code
          maintainability. Custom hooks can also help abstract complex logic,
          making it easier to understand and write code. Overall, custom hooks
          are a powerful tool that can help you write cleaner, more efficient
          code in React.
        </p>
      </div>
    </div>
  );
}

export default Blog;
