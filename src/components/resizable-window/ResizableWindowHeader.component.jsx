const ResizableWindowHeader = ({ width, height, fillColor }) => {
  return (
    <div
      className={`bg-[${fillColor}] w-[${width}px] h-[${height}px] border-b-2 border-b-black`}
    >
      <h1>ResizableWindowHeader</h1>
    </div>
  );
};

export default ResizableWindowHeader;
