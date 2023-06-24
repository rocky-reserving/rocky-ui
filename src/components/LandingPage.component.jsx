// next components
import Image from 'next/image';

// components
import OldButton from './OldButton.component.jsx';
import ResizableWindow from './resizable-window/ResizableWindow.component.jsx';

const LandingPage = ({
  isNewModelLoading,
  isLoadModelLoading,
  isReadDocsLoading,
  handleNewModelButtonClick,
  handleLoadModelButtonClick,
  handleReadDocsButtonClick,
}) => {
  // styling common to the three buttons
  const buttonStyle =
    'grid grid-cols-load-button border-black border-2 rounded-lg p-2 mb-3 min-h-50 w-150 hover:bg-gray-200 hover:shadow-md hover:animated-shadow';

  return (
    <header id="landing-page" className="grid grid-cols-2 p-10 max-h-[75vh]">
      <section id="rocky-logo" className="flex flex-col min-h-fit">
        <div className="flex flex-col items-center p-24 ">
          <div className="relative flex flex-col justify-end before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            {/*<Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />*/}
            <h1 className="font-family-[PressStart2P-Regular] text-5xl p-0 m-0">
              rocky
            </h1>
            <ResizableWindow
              initialWidth={1000}
              initialHeight={750}
              fillColor={`red-500`}
            />
          </div>
        </div>
      </section>
      <section
        id="rocky-cta"
        className="flex flex-col min-h-fit justify-items-end justify-end pb-20"
      >
        <div
          id="rocky-cta-button-container"
          className="flex flex-col w-1/2 p-3 border-black border-2 rounded-lg justify-items-center"
        >
          <h3 className="text-xl mb-3 p-2 border-black border-2 rounded-lg">
            Get started
          </h3>
          <div id="row-1" className="grid grid-cols-2 gap-2 backdrop-blur-xl">
            <OldButton
              id="new-model-button"
              altText="new model button"
              className={buttonStyle + ' col-span-1'}
              onClick={handleNewModelButtonClick}
              buttonText="New Model"
              isLoading={isNewModelLoading}
            />
            <OldButton
              id="load-model-button"
              altText="load model button"
              className={buttonStyle + ' col-span-1'}
              onClick={handleLoadModelButtonClick}
              buttonText="Load Model"
              isLoading={isLoadModelLoading}
            />
          </div>
          <div id="row-2" className="grid grid-cols-1 gap-2">
            <OldButton
              id="read-docs-button"
              altText="read documentation button"
              className={buttonStyle}
              onClick={handleReadDocsButtonClick}
              buttonText="Documentation"
              isLoading={isReadDocsLoading}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default LandingPage;
