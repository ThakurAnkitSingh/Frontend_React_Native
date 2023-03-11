import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { app, db } from './firebase'


export default function Tab2() {

    const [cameraImage, setCameraImage] = useState(null);
    const [galleryImage, setGalleryImage] = useState(null);
    const [photos, setPhotos] = useState([]);


    const options = {
        mediaType: 'photo',
        saveToPhotos: true,
        title: 'Select Photo',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    }


    useEffect(() => {
        const unsubscribe = db.collection('photos').onSnapshot((snapshot) => {
            const photos = snapshot.docs.map((doc) => doc.data());
            setPhotos(photos);
        });
        return () => unsubscribe();
    }, []);


    const openCamera = async () => {

        if (Platform.OS === 'android') {

            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                )

                if (granted == PermissionsAndroid.RESULTS.GRANTED) {

                    await launchCamera(options, (response) => {
                        setCameraImage(response.uri);
                        if (response.didCancel) {
                            console.log('User cancelled photo picker');
                        } else if (response.error) {
                            console.log('ImagePicker Error: ', response.error);
                        } else {
                            const { uri } = response;
                            const name = uri.split('/').pop();
                            // const ref = app.db.ref().child(`photos/${name}`);
                            // const task = ref.putFile(uri);
                            // task.then(() => {
                            //     ref.getDownloadURL().then((url) => {
                            //         db.collection('photos').add({ url });
                            //     });
                            // });
                        }
                    })
                }
            } catch (err) {
                console.log(err, "Error Occurred")
            }
        }
    }

    const openGallery = async () => {

        await launchImageLibrary(options, (response) => {
            setGalleryImage(response.uri);
        })

    }




    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Image style={style.image} source={{ uri: cameraImage }} />

            <TouchableOpacity style={{ width: 200, height: 50, borderWidth: .5, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }} onPress={openCamera}>
                <Text>Open Camera</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ width: 200, height: 50, borderWidth: .5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10 }} onPress={openGallery}>
                <Text>Open Gallery</Text>
            </TouchableOpacity>

            <Image style={style.image} source={{ uri: galleryImage }} />


        </View>
    )
}





const style = StyleSheet.create({
    image: {
        width: 90,
        height: 90,
        marginBottom: 10,
        marginTop: 10
    },
});

