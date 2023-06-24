import {useState} from 'react'
import ResizableIframe from 'resizable-iframe';

const MainWorkspace = () => {
  const [windows, setWindows] = useState([]);

  const addWindow = (window) => {
    setWindows([...windows, window]);
  }

  const removeWindow = (window) => {
    setWindows(windows.filter(w => w !== window));
  }

  return (
    <section className="main-workspace">
      Section

    </section>
  )
}

export default MainWorkspace