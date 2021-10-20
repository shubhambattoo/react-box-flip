# React Box Flip

React Box Flips allows you to flip boxes in your React app.

## Demo

Live demo can be viewed [here](https://react-box-flip.netlify.app/).

![](https://react-box-flip.netlify.app/flip.gif)
![](https://react-box-flip.netlify.app/flip-vertical.gif)

## Installation

To use react-box-flip, install it from NPM with npm using the command:

```bash
npm install react-box-flip
```

Or, you can also use the [yarn](https://yarnpkg.com/) package manager:

```bash
yarn add react-box-flip
```

## Usage

To use react-box-flip, you need to import it in your React app:

`import ReactBoxFlip from 'react-box-flip';`

Then to use it in your react application you need to provide two child components to the `ReactBoxFlip` component:

- `Front`: The component that will be displayed when the box is not flipped.
- `Back`: The component that will be displayed when the box is flipped.

The component only allows for a manual flip.

The flip animation is controlled by a `isFlipped` prop. There is no need to provide a default value for this prop.

```
import React from 'react';
import ReactBoxFlip from 'react-box-flip';

function App() {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    return (
        <>
        <button onClick={handleClick}> Flip </button>
            <ReactBoxFlip isFlipped={isFlipped}>
                <Front>
                    <h1>Front</h1>
                </Front>
                <Back>
                    <h1>Back</h1>
                </Back>
            </ReactBoxFlip>
        </>
    );
}

```

### Props

| Props      | Type    | Description                                                       | Default   |
| ---------- | ------- | ----------------------------------------------------------------- | --------- |
| isFlipped  | boolean | Boolean that controls the flip animation.                         | undefined |
| isVertical | boolean | Boolean that controls if the box needs to flip in which direction | false     |

## Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues](https://github.com/shubhambattoo/react-box-flip/issues) page.

## License

Copyright © 2021 shubhambattoo.
This project is [MIT](https://github.com/shubhambattoo/react-box-flip/blob/main/LICENSE) licensed.
