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

export default ResizableEdge;
