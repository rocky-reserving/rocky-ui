import { RiFileAddLine, RiFolderDownloadLine } from "react-icons/ri";

// in this file, we will define the data for the sidebar list
// data will be rendered in the sidebar in the order given below

// the color of the icons:
const iconColor = "black";

const SidebarListData = [
  {
    type: "list",
    data: {
            name: "New Model",
            alt: "New Model",
            icon: <RiFileAddLine color={iconColor} fontSize="1.5em" className="pl-1" />,
            args: {
              click: "new-model"
            }
          }
  },
  {
    type: "list",
    data: {
            name: "Load Model",
            alt: "Load Model",
            icon: <RiFolderDownloadLine  color={iconColor} fontSize="1.5em" />,
            args: {
              click: "load-model"
            }
          }
  },
  {
    type: "divider"
  },
  {
    type: "list",
    data: {
            name: "Documentation",
            alt: "Documentation",
            icon: "NONE",
            args: {
              click: "read-docs"
            }
          }
  }
];

export default SidebarListData;