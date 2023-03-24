import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid, Platform, ScrollView } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CameraImage from './CameraImage';
import { db } from './firebase';




export default function Tab2() {

    const [cameraImage, setCameraImage] = useState(null);
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

    const imageUrlsCollection = db.collection('imageUrls');

    useEffect(() => {
        // Add a new document to the collection with a URL field
        imageUrlsCollection.add({
            url: cameraImage
        }).then((docRef) => {
        }).catch((error) => {
            console.error('Error adding document: ', error);
        });
        setCameraImage(null);
    }, [cameraImage]);


    useEffect(() => {
        imageUrlsCollection.onSnapshot(snapshot => {
            setPhotos(snapshot.docs.map(doc => ({ id: doc.id, url: doc.data().url })))
        })
    }, []);









    const openCamera = async () => {

        if (Platform.OS === 'android') {

            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                )

                if (granted == PermissionsAndroid.RESULTS.GRANTED) {

                    await launchCamera(options, (res) => {

                        if (res.uri != null || undefined) {
                            setCameraImage(res.uri)
                        }

                    })



                }
            } catch (err) {
                console.log(err, "Error Occurred")
            }
        }
    }

    const openGallery = async () => {

        await launchImageLibrary(options, (res) => {
            if (res.uri != null || undefined) {
                setCameraImage(res.uri)
            }
        })

    }




    return (
        <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', }}>


            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>

                    {photos.map(photo => (
                        <CameraImage key={photo.id} photo={photo} options={options} />
                    ))}

                </View>
            </ScrollView>


            <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', alignItems: 'center', marginTop: 485 }}>



                <TouchableOpacity style={{ width: 100, height: 40, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', margin: 20, backgroundColor: '#b0e0e6', borderColor: 'blue' }} onPress={openCamera}>
                    <Text style={{ color: 'black' }}>Open Camera</Text>
                </TouchableOpacity>




                <TouchableOpacity style={{ width: 100, height: 40, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center', margin: 20, backgroundColor: '#b0e0e6', borderColor: 'blue' }} onPress={openGallery}>
                    <Text style={{ color: 'black' }}>Open Gallery</Text>
                </TouchableOpacity>

            </View>




        </View>
    )
}


