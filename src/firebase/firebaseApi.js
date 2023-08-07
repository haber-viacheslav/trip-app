// import { getFirestore, doc, addDoc } from 'firebase/firestore/lite';
// import { auth } from 'components/App';
// const firestore = getFirestore();

// const specDoc = doc(firestore, 'users');
// const tripsDoc = doc(specDoc, 'trips');

// export const addTrip = async data => {
//   try {
//     const newTrip = await addDoc(tripsDoc, data);
//     console.log(newTrip);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// export const getAllTrips = async user => {
//   try {
//     const currentUserId = getCurrentUser().uid;
//     if (!currentUserId) {
//       return;
//     }
//     const AllTrips = await query(tripsDoc, user);
//     console.log(newTrip);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// export const getCurrentUser = () => {
//   const user = auth.currentUser;
//   if (user !== null) {
//     return user;
//   }
//   return false;
// };
