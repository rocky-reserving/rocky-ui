```jsx
const ResizableWindowHeader = ({ width, height, fillColor }) => {
  return (
    <div
      className={`border-2 border-black bg-[${fillColor} w-[${width}px] h-[${height}px]`}
    >
      <h1>ResizableWindowHeader</h1>
    </div>
  );
};
```

```jsx
const ResizableEdge = ({ onDrag }) => {
  const onMouseDown = (event) => {
    event.stopPropagation();
    onDrag(event);
  };

  return (
    <div
      className="right-0 bottom-0 w-4 h-4 cursor-se-resize flex items-center justify-center"
      onMouseDown={onMouseDown}
    >
      <div className="w-[3px] h-[3px] rounded-full bg-slate-500 backdrop-blur-md hover:bg-red-500"></div>
    </div>
  );
};
```

```jsx
const ResizableWindowContents = ({ width, height }) => {
  return (
    <div
      className={`border-black border-2 w-[${width}] h-[${height}] backdrop-blur-md`}
    >
      This is my resizable window.
    </div>
  );
};
```

```jsx
import { useState, useEffect } from 'react';

import ResizableWindowHeader from './ResizableWindowHeader.component';
import ResizableWindowContents from './ResizableWindowContents.component';
import ResizableEdge from './ResizableEdge.component';

const ResizableWindow = ({ initialWidth, initialHeight, fillColor }) => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const onMouseDown = (event) => {
    setDragging(true);
    setX(event.clientX);
    setY(event.clientY);
  };

  const onEdgeDrag = (event) => {
    setDragging(false);
    setResizing(true);
    setX(event.clientX);
    setY(event.clientY);
  };

  const onMouseMove = (event) => {
    if (!dragging && !resizing) {
      return;
    }

    if (dragging) {
      const dx = event.clientX - x;
      const dy = event.clientY - y;
      setX(event.clientX);
      setY(event.clientY);
      setTop(Math.max(0, Math.min(window.innerHeight - height, top + dy)));
      setLeft(Math.max(0, Math.min(window.innerWidth - width, left + dx)));
    } else if (resizing) {
      const dx = event.clientX - x;
      const dy = event.clientY - y;
      setX(event.clientX);
      setY(event.clientY);
      setWidth(Math.max(100, width + dx));
      setHeight(Math.max(100, height + dy));
    } else {
      return;
    }
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      onMouseMove(event);
    };

    const handleMouseUp = () => {
      onMouseUp();
    };

    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, onMouseMove, onMouseUp]);

  return (
    <div
      className={`flex flex-col border-2 border-black rounded-md w-[${width}px] h-[${height}px] absolute select-none`}
      style={{ left: `${left}px`, top: `${top}px` }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <ResizableWindowHeader
        width={width}
        height={height}
        fillColor={fillColor}
      />
      <ResizableWindowContents width={width} height={height} />
      <ResizableEdge onDrag={onEdgeDrag} />
    </div>
  );
};

export default ResizableWindow;
```

# original request

I am trying to create a react component to use in a modeling app.The goal is to have a dragable, resizable,
minimizable, and maximizable window that holds individual aspects of the modeling workflow(eg the data, model
parameters, etc)

I am using tailwind css and react (javascript not typescript)

Here is a step - by - step process for completing this task:

## Step 1: Draggable Functionality

You'll need to add mouse event handlers to make the window draggable. Specifically, you'll need to handle the `onMouseDown`, `onMouseMove`, and `onMouseUp` events.

`onMouseDown`: When the user presses the mouse button, start dragging the window. Save the current mouse position.
`onMouseMove`: When the user moves the mouse, if the window is being dragged, calculate the new position of the window based on the change in the mouse's position.
`onMouseUp`: When the user releases the mouse button, stop dragging the window.

## Step 2: Resizable Functionality

Making the window resizable is similar to making it draggable, but instead of moving the window, you'll be changing its size. You'll need to add event handlers for the same set of mouse events.

`onMouseDown`: When the user presses the mouse button on the edge of the window, start resizing the window. Save the current mouse position and the current window size.
`onMouseMove`: When the user moves the mouse, if the window is being resized, calculate the new size of the window based on the change in the mouse's position.
`onMouseUp`: When the user releases the mouse button, stop resizing the window.

## Step 3: Minimizable Functionality

Add a "minimize" button to the window. When this button is clicked, change the state of the window to "minimized", and adjust its size and position accordingly.

## Step 4: Maximizable Functionality

Add a "maximize" button to the window. When this button is clicked, change the state of the window to "maximized", and adjust its size and position to fill the screen.

## Step 5: Auto-Fit to Content Functionality

Add a "fit to content" button to the window. When this button is clicked, resize the window so it's just large enough to fit its content, but not any larger. You will need to determine the size of the content, which may involve calculating the size of child elements or using React Refs to measure the rendered size of the content.

MY QUESTION: can you see why I am unable to resize the window?
