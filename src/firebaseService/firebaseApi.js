import { database } from './initFirebase';
import { ref, set, get, push } from 'firebase/database';

export const addNewUser = async (uid, displayName, email, photoUrl) => {
  try {
    const userRef = ref(database, `users/${uid}/trips`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return;
    }
    set(ref(database, `users/${uid}`), {
      uid,
      displayName,
      email,
      photoUrl,
    });
  } catch (e) {
    console.log(e.errorCode, e.errorMessage);
  }
};

export const addNewTrip = async (uid, newTrip) => {
  try {
    const postListRef = ref(database, `users/${uid}/trips`);
    const newPostRef = push(postListRef);
    await set(newPostRef, newTrip);
  } catch (e) {
    console.error('Error added trip:', e);
  }
};

export const getUserTrips = async uid => {
  try {
    const tripsRef = ref(database, `users/${uid}/trips`);
    const snapshot = await get(tripsRef);
    if (snapshot.exists()) {
      const tripsArray = Object.values(snapshot.val());
      tripsArray.sort((a, b) => {
        if (a.startTime && b.startTime) {
          return a.startTime - b.startTime;
        }
        return 0;
      });

      return tripsArray;
    } else {
      console.log('No trips found for the user.');
      return [];
    }
  } catch (e) {
    console.error('Error getting user trips:', e);
    return [];
  }
};
