// "use client";
// import { useState } from "react";
// import { useRef, useEffect } from "react";


// export default function ChatPage() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [open, setOpen] = useState(false);
//     const [menuOpen, setMenuOpen] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMsg = { role: "user", content: input };
//     setMessages([...messages, userMsg]);
//     setInput("");

//     const res = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: input }),
//     });
//     const data = await res.json();

//     const botMsg = { role: "bot", content: data.reply };
//     setMessages((prev) => [...prev, botMsg]);
//   };

//   return (
//     <div className="relative">
//       {/* Chat toggle button */}
//       {!open && (
// <button
//   onClick={() => setOpen(true)}
//   className="bg-white rounded-full shadow-lg hover:scale-110 hover:shadow-gray-400 transition-transform duration-300"
// >
//   <img
//     src="/I_will_design_your_creative_logo_in_24hrs-removebg-preview.png"
//     alt="Chat"
//     className="w-12 h-12 object-cover rounded-full "
//   />
// </button>


//       )}

//       {/* Chat window */}
//       {open && (
//         <div className="fixed bottom-20 right-4 w-80 bg-white shadow-2xl rounded-xl border flex flex-col h-[400px]">
// <div className="flex items-center justify-between bg-[#1E1E1E] text-white px-3 py-2 rounded-t-xl mb-2">
//   {/* Left side */}
//   <div className="flex items-center space-x-2">
//     <button
//      onClick={() => setOpen(false)}
//     className="text-gray-300 hover:text-white text-lg">←</button>
//     <img
//       src="/I_will_design_your_creative_logo_in_24hrs-removebg-preview.png"
//       alt="Bot"
//       className="w-8 h-8 bg-white rounded-full"
//     />
//     <div>
//       <h3 className="font-semibold text-white text-sm">SAM Bot</h3>
//       <p className="text-xs text-gray-400">AI Assistant</p>
//     </div>
//   </div>

//   {/* Right side */}
//     <div className="relative">
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="text-gray-300 hover:text-white text-lg"
//       >
//         ⋮
//       </button>

//       {menuOpen && (
//         <div className="absolute right-0 mt-2 w-28 bg-white text-gray-800 shadow-lg rounded-md text-sm">
//           <button
//             onClick={() => {
//               onClear();
//               setMenuOpen(false);
//             }}
//             className="block w-full text-left px-3 py-2 hover:bg-gray-100"
//           >
//             Clear
//           </button>
//           <button
//             onClick={() => {
//               alert("Reported! (You can connect this to backend later)");
//               setMenuOpen(false);
//             }}
//             className="block w-full text-left px-3 py-2 hover:bg-gray-100"
//           >
//              Report
//           </button>
//         </div>
//       )}
//     </div>
// </div>
//           <div className="flex-1 p-1 overflow-y-auto mb-2">
//   {messages.length === 0 ? (
//     <p className="flex item-center text-gray-400 justify-center mt-4 text-sm">No messages yet 👋</p>
//   ) : (
//     messages.map((m, i) => (
//       <p
//         key={i}
//         className={`mb-2 p-2 rounded-lg ${
//           m.role === "user"
//             ? "bg-gray-400 text-white text-right ml-auto max-w-[75%]"
//             : "bg-gray-200 text-black text-left mr-auto max-w-[75%]"
//         }`}
//       >
//         {m.content}
//       </p>
//     ))
//   )}
// </div>


//           <div className=" p-3 flex">
//             {/* <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type a message..."
//               className="flex-1 border rounded-lg px-3 py-1 text-sm"
//             /> */}

//             <input
//   type="text"
//   value={input}
//   onChange={(e) => setInput(e.target.value)}
//   onKeyDown={(e) => {
//     if (e.key === "Enter") sendMessage(); // 👈 this sends message when Enter is pressed
//   }}
//   placeholder="Type a message..."
//   className="flex-1 border rounded-lg px-3 py-1 text-sm"
// />

//             <button
//               onClick={sendMessage}
//               className="ml-2 bg-black text-white px-3 py-1 rounded-lg text-sm"
//             >
//               Send
//             </button>
//           </div>


           

//         </div>
//       )}
//     </div>
//   );
// }




"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatBox() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const chatRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);


 const sendMessage = () => {
  if (!input.trim()) return;

  const userMsg = { role: "user", content: input };
  setMessages((prev) => [...prev, userMsg]);

  // Custom replies
  let reply = "Sorry, I didn't understand that 😅";

  const text = input.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    reply = "Hey there 👋! How can I help you today?";
  } else if (text.includes("who are you")) {
    reply = "I'm SAM Bot — your friendly portfolio assistant";
  } else if (text.includes("skills")) {
    reply = "I’m skilled in React, Next.js, Node.js, and AI tools ";
  } else if (text.includes("project")) {
    reply = "You can check my projects section — I’ve built some cool stuff ";
  } else if (text.includes("contact")) {
    reply = "You can reach out via email or LinkedIn 📧";
  }

  setTimeout(() => {
    setMessages((prev) => [...prev, { role: "bot", content: reply }]);
  }, 500); // adds a small delay to feel more natural

  setInput("");
};


  const onClear = () => setMessages([]);

  // 👇 Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 👇 Close menu when clicking outside
  useEffect(() => {
    const handleMenuClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleMenuClick);
    return () => document.removeEventListener("mousedown", handleMenuClick);
  }, []);

  return (
    <div>
      {/* Floating chat button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-white rounded-full shadow-lg hover:scale-110 hover:shadow-gray-400 transition-transform duration-300 fixed bottom-6 right-6"
        >
          <img
            src="/I_will_design_your_creative_logo_in_24hrs-removebg-preview.png"
            alt="Chat"
            className="w-12 h-12 object-cover rounded-full"
          />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          ref={chatRef}
          className="fixed bottom-20 right-4 w-80 bg-white shadow-2xl rounded-xl border flex flex-col h-[400px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#1E1E1E] text-white px-3 py-2 rounded-t-xl mb-2">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-white text-lg"
              >
                ←
              </button>
              <img
                src="/I_will_design_your_creative_logo_in_24hrs-removebg-preview.png"
                alt="Bot"
                className="w-8 h-8 bg-white rounded-full"
              />
              <div>
                <h3 className="font-semibold text-white text-sm">SAM Bot</h3>
                <p className="text-xs text-gray-400">AI Assistant</p>
              </div>
            </div>

            {/* Menu */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-300 hover:text-white text-lg"
              >
                ⋮
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white text-gray-800 shadow-lg rounded-lg text-sm">
                  <button
                    onClick={() => {
                      onClear();
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-t-lg hover:bg-gray-100"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => {
                      alert("Reported! (You can connect this to backend later)");
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-b-lg hover:bg-gray-100"
                  >
                    Report
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Messages */}


<div className="flex-1 px-5 py-2 overflow-y-auto mb-2 flex flex-col">
  {messages.length === 0 ? (
    <p className="flex items-center text-gray-400 justify-center mt-30 text-sm">
     you can ask me about
     my skills, 
     projects, or 
     how to contact me! 
    </p>
  ) : (
    messages.map((m, i) => (
      <div
        key={i}
        className={`flex ${
          m.role === "user" ? "justify-end" : "justify-start"
        }`}
      >
        <p
          className={`inline-block mb-2 px-4 py-1 text-sm rounded-lg break-words ${
            m.role === "user"
              ? "bg-gray-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          style={{ maxWidth: "80%", width: "fit-content" }}
        >
          {m.content}
        </p>
      </div>
    ))
  )}
  {/* 👇 This invisible div keeps the view at the bottom */}
  <div ref={messagesEndRef} />
</div>





          {/* Input area */}
          <div className="p-3 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-1 text-sm"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-black text-white px-3 py-1 rounded-lg text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
