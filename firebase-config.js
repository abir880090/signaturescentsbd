// firebase-config.js e erokom thakte hobe:
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAf1OrMuwbGJRDbY8LFi1fwlXZsfawwRI",
  authDomain: "signature-scents-bd-fa4f9.firebaseapp.com",
  databaseURL: "https://signature-scents-bd-fa4f9-default-rtdb.firebaseio.com",
  projectId: "signature-scents-bd-fa4f9",
  storageBucket: "signature-scents-bd-fa4f9.firebasestorage.app",
  messagingSenderId: "690465209021",
  appId: "1:690465209021:web:a5bbde32d6360aeed515d4"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push };
