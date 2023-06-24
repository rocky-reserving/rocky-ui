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
    if (event.target.classList.contains('resizable-edge')) {
      onEdgeDrag(event);
    } else {
      setDragging(true);
      setX(event.clientX);
      setY(event.clientY);
    }
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
    setResizing(false);
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
