// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { launchImageLibrary } from 'react-native-image-picker';
// import { db } from './firebase';

// export default function CameraImage(props) {
//     const { photo, options } = props;


//     const [replaceImages, setReplaceImages] = useState(null);
//     const [replaceImagesID, setReplaceImagesID] = useState(null);
//     const [turn, setTurn] = useState(true);



//     useEffect(() => {
//         console.log("It is turning to ", turn);
//     }, [turn])



//     useEffect(() => {
        
//     }, [turn])

//     console.log(turn, "Outside")





//     const replaceImage = async (photo) => {

//         setReplaceImagesID(photo.id);
//         setTurn(false);



//         console.log(turn, "Inside")

//         await launchImageLibrary(options, (res) => {
//             setReplaceImages(res.uri);

//             db.collection('imageUrls').onSnapshot((snapShot) => {
//                 snapShot.docs.map((doc) => {
//                     if (doc.data().url !== null) {
//                         if (doc.id == replaceImagesID) {
//                             db.collection('imageUrls').doc(replaceImagesID).update({
//                                 url: replaceImages
//                             }, { merge: true })
//                         }
//                     }
//                 });
//             });

//         })

//         setTurn(true);

//     }


//     return (
//         <View>

//             {photo.url !== null && (
//                 <View>
//                     < Image key={photo.id} style={style.image} source={{ uri: photo.url }} />
//                     < TouchableOpacity style={{ width: 60, height: 23, borderWidth: .5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft: 35, backgroundColor: '#ff0000', marginBottom: 65 }} >
//                         <Text onPress={() => {
//                             replaceImage(photo);
//                         }}>Replace</Text>
//                     </TouchableOpacity >
//                 </View>
//             )}



//         </View>
//     )
// }




// const style = StyleSheet.create({
//     image: {
//         width: 100,
//         height: 100,
//         marginLeft: 10,
//         marginTop: 10
//     },
// });