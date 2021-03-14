# Console Drawing Program

A JavaScript program that lets the users draw a limited number of shapes/figures on their console by taking a pre-defined set of commands as input.

### Rules

```
Command 		Description
C w h           Should create a new canvas of width w and height h.

L x1 y1 x2 y2   Should create a new line from (x1,y1) to (x2,y2). Currently, only supports 
                horizontal or vertical lines. Lines are drawn using the 'X' character.

R x1 y1 x2 y2   Should create a new rectangle, (x1,y1) is upper left corner & (x2,y2) is 
                lower right corner.

B x y c         Fill the entire area connected to (x,y) with "colour" c.
                Same as that of the "bucket fill" tool in paint programs.

Q               Quit the program.
``` 

### Demo

```
enter command:
C 20 6
```

```
enter command:
L 2 4 6 4
```

```
enter command:
R 8 2 10 4
```

```
enter command:
B 13 5 c
```

```
enter command:
Q   // quits the program 
```

### Installation and Usage

This program requires a Node runtime environment to run.

Install the dependencies and run the program using the application entry point, `index.js`.

```bash
(according to your package manager)

$ yarn
$ node index.js
```

### Testing

The program tests are written using Jest. All the tests are written in the `__tests__` folder in the root of the project.

```bash
$ yarn run test
```

### Assumptions

- The discerning alphabet of the commands cannot be a lowercase character.
- Drawing a new canvas resets the layout.
- Most recently drawn shapes will be overlaid over the previous ones.
- Shapes cannot go out of bounds of the canvas.
