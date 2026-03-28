// ১. Firebase SDK (সব পেজের মাথায় দিতে হবে)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// ২. আপনার কনফিগারেশন (Firebase Console থেকে পাবেন)
const firebaseConfig = {
    apiKey: "AIzaSyAf1OrMuwbGJRDByY8LFi1fwlXZsfawwRI",
    authDomain: "https://signature-scents-bd-fa4f9-default-rtdb.firebaseio.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com",
    projectId: "signature-scents-bd-fa4f9",
    storageBucket: "signature-scents-bd-fa4f9.firebasestorage.app",
    messagingSenderId: "690465209021",
    appId: "1:690465209021:web:a5bbde32d6360aeed515d4"
};
   
// ৩. ইনিশিয়ালাইজ
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);