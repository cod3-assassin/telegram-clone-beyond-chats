import React from "react";

const ChatWindow = () => {
  return <div>ChatWindow</div>;
};

export default ChatWindow;

// ChatWindow.jsx:13 All Chats: Object
// ChatWindow.jsx:17 Status: success
// ChatWindow.jsx:18 Status Code: 200
// ChatWindow.jsx:19 Message: Chats fetched successfully!
// ChatWindow.jsx:29 Pagination: Object
// ChatWindow.jsx:70 Chat Messages for chat_id 3888: Object
// 2ChatWindow.jsx:102 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
//     at ChatWindow (ChatWindow.jsx:102:23)
//     at renderWithHooks (chunk-6BKLQ22S.js?v=8ba1aff2:11548:26)
//     at updateFunctionComponent (chunk-6BKLQ22S.js?v=8ba1aff2:14582:28)
//     at beginWork (chunk-6BKLQ22S.js?v=8ba1aff2:15924:22)
//     at HTMLUnknownElement.callCallback2 (chunk-6BKLQ22S.js?v=8ba1aff2:3674:22)
//     at Object.invokeGuardedCallbackDev (chunk-6BKLQ22S.js?v=8ba1aff2:3699:24)
//     at invokeGuardedCallback (chunk-6BKLQ22S.js?v=8ba1aff2:3733:39)
//     at beginWork$1 (chunk-6BKLQ22S.js?v=8ba1aff2:19765:15)
//     at performUnitOfWork (chunk-6BKLQ22S.js?v=8ba1aff2:19198:20)
//     at workLoopSync (chunk-6BKLQ22S.js?v=8ba1aff2:19137:13)Understand this error
// chunk-6BKLQ22S.js?v=8ba1aff2:14032 The above error occurred in the <ChatWindow> component:

//     at ChatWindow (http://localhost:5173/src/components/ChatWindow.jsx?t=1720967251072:22:29)
//     at div
//     at Home (http://localhost:5173/src/pages/Home.jsx?t=1720968676028:19:17)
//     at RenderedRoute (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=8ba1aff2:4007:5)
//     at Routes (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=8ba1aff2:4441:5)
//     at div
//     at main
//     at div
//     at div
//     at div
//     at Router (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=8ba1aff2:4384:15)
//     at BrowserRouter (http://localhost:5173/node_modules/.vite/deps/react-router-dom.js?v=8ba1aff2:5127:5)
//     at App (http://localhost:5173/src/App.jsx?t=1720968704675:27:45)

// Consider adding an error boundary to your tree to customize error handling behavior.
// Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
// logCapturedError @ chunk-6BKLQ22S.js?v=8ba1aff2:14032
// Show 1 more frame
// Show lessUnderstand this error
// chunk-6BKLQ22S.js?v=8ba1aff2:19413 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
//     at ChatWindow (ChatWindow.jsx:102:23)
//     at renderWithHooks (chunk-6BKLQ22S.js?v=8ba1aff2:11548:26)
//     at updateFunctionComponent (chunk-6BKLQ22S.js?v=8ba1aff2:14582:28)
//     at beginWork (chunk-6BKLQ22S.js?v=8ba1aff2:15924:22)
//     at beginWork$1 (chunk-6BKLQ22S.js?v=8ba1aff2:19753:22)
//     at performUnitOfWork (chunk-6BKLQ22S.js?v=8ba1aff2:19198:20)
//     at workLoopSync (chunk-6BKLQ22S.js?v=8ba1aff2:19137:13)
//     at renderRootSync (chunk-6BKLQ22S.js?v=8ba1aff2:19116:15)
//     at recoverFromConcurrentError (chunk-6BKLQ22S.js?v=8ba1aff2:18736:28)
//     at performConcurrentWorkOnRoot (chunk-6BKLQ22S.js?v=8ba1aff2:18684:30)Understand this error
// ChatWindow.jsx:13 All Chats: Object
// ChatWindow.jsx:17 Status: success
// ChatWindow.jsx:18 Status Code: 200
// ChatWindow.jsx:19 Message: Chats fetched successfully!
// ChatWindow.jsx:29 Pagination: Object
// ChatWindow.jsx:70 Chat Messages for chat_id 3888: Object
// ChatWindow.jsx:13 All Chats: Object
// ChatWindow.jsx:17 Status: success
// ChatWindow.jsx:18 Status Code: 200
// ChatWindow.jsx:19 Message: Chats fetched successfully!
// ChatWindow.jsx:29 Pagination: Object
// ChatWindow.jsx:13 All Chats: Object
// ChatWindow.jsx:17 Status: success
// ChatWindow.jsx:18 Status Code: 200
// ChatWindow.jsx:19 Message: Chats fetched successfully!
// ChatWindow.jsx:29 Pagination: Object
// ChatWindow.jsx:70 Chat Messages for chat_id 3888: Object
// ChatWindow.jsx:70 Chat Messages for chat_id 3888: Object
// solve this and then it will show the comp
