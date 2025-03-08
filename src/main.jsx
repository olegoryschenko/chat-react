import App from './App.jsx'
import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import './index.css'
import firebase from 'firebase/compat/app';
import { API_KEY } from './api.js';

// Initialize Firebase
const app = initializeApp({
  apiKey: API_KEY,
  authDomain: "chat-react-d3e08.firebaseapp.com",
  projectId: "chat-react-d3e08",
  storageBucket: "chat-react-d3e08.firebasestorage.app",
  messagingSenderId: "513060345504",
  appId: "1:513060345504:web:f36f9a47ad2b73c8f29bc5",
  measurementId: "G-J3BF9TX7WZ"
});

export const AuthContext = createContext();
const auth = getAuth(app);
const firestore = getFirestore(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext.Provider value={{
        firestore, 
        auth,
        firebase
      }}>
        <App />
    </AuthContext.Provider>
  </StrictMode>
)
