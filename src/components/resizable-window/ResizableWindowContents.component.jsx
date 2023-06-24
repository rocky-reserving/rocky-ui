const ResizableWindowContents = ({ width, height }) => {
  return (
    <div className={`w-[${width}] h-[${height}] backdrop-blur-md`}>
      This is my resizable window.
    </div>
  );
};

export default ResizableWindowContents;
