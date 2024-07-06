import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValue,
} from "recoil";
// import { totalnotificationSelector, notifications } from "./atoms";
import axios from "axios";
import { todosAtomsFamily } from "./atoms";
import Skeleton from "@mui/material/Button";
//for the todos
import { TODOS } from "./todos";

function App() {
  return (
    <RecoilRoot>
      {/* <MainApp /> */}
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

// const todoAtom = atom({
//   key: "todoAtom",
//   default:
// });

function Todo({ id }) {
  // const [currentTodo, setCurrentTodo] = useRecoilState(todosAtomsFamily(id));

  const [currentTodo, setCurrentTodo] = useRecoilStateLoadable(
    todosAtomsFamily(id)
  );
  if (currentTodo.state == "loading") {
    return (
      <div>
        <Skeleton variant="circular">loading</Skeleton>
      </div>
    );
  } else if (currentTodo.state == "hasValue") {
    return (
      <>
        {currentTodo.id}
        <br /> {currentTodo.contents.title}
        <br /> {currentTodo.contents.description}
        <br />
        <br />
      </>
    );
  }
}
//for recoil selector async selectors
// function MainApp() {
//   const [networkCount, setNetworkCount] = useRecoilState(notifications);
//   const totalNotificationCount = useRecoilValue(totalnotificationSelector);

//   // useEffect(() => {
//   //   //fetch

//   //   axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
//   //     setNetworkCount(res.data);
//   //   });
//   // }, []);

//   return (
//     <>
//       <button>Home</button>

//       <button>
//         My Network ({networkCount.network >= 100 ? "99+" : networkCount.network}
//         )
//       </button>
//       <button>Jobs {networkCount.jobs}</button>
//       <button>Messaging {networkCount.messaging}</button>
//       <button>Notifications {networkCount.notifications}</button>

//       <button>Me ({totalNotificationCount})</button>
//     </>
//   );
// }

export default App;
