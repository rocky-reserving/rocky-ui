const ResizableEdge = ({ onDrag }) => {
  const onMouseDown = (event) => {
    event.stopPropagation();
    onDrag(event);
  };

  return (
    <div
      className="right-0 bottom-0 w-4 h-4 cursor-se-resize flex items-center justify-center resizable-edge"
      onMouseDown={onMouseDown}
    >
      <div className="w-[10px] h-[10px] rounded-full bg-slate-500 bg-opacity-60 backdrop-blur-md hover:shadow-xl hover:shadow-inner"></div>
    </div>
  );
};

export default ResizableEdge;
