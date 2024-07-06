import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import axios from "axios";
//normal atomsfamily with asynchrounous funciotn
// export const todosAtomsFamily = atomFamily({
//   key: "todosAtomsFamily",
//   default: (id) => {
//     return TODOS.find((x) => x.id == id);
//   },
// });

export const todosAtomsFamily = atomFamily({
  key: "todoAtomsFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return res.data.todo;
      },
  }),
});

// import { atom, selector } from "recoil";
// import axios from "axios";
// export const notifications = atom({
//   key: "networkAtom",
//   default: selector({
//     // network: 0,
//     // jobs: 0,
//     // notifications: 0,
//     // messaging: 0,
//     key: "networkAtomSelector",
//     get: async () => {
//       const res = await axios.get(
//         "https://sum-server.100xdevs.com/notifications"
//       );
//       return res.data;
//     },
//   }),
// });

// // export const networkAtom = atom({
// //   key: "networkAtom",
// //   default: 0,
// // });

// // export const notificationAtom = atom({
// //   key: "notificationAtom",
// //   default: 0,
// // });

// // export const messagingAtom = atom({
// //   key: "messagingAtom",
// //   default: 0,
// // });

// export const totalnotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: ({ get }) => {
//     const allNotifications = get(notifications);
//     return (
//       allNotifications.network +
//       allNotifications.jobs +
//       allNotifications.notifications +
//       allNotifications.messaging
//     );
//   },
// });
