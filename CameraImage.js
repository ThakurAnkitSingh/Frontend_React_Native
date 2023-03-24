import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';
import { db } from './firebase';

export default function CameraImage(props) {
    const { photo, options } = props;

    const [replaceImages, setReplaceImages] = useState(null);
    const [replaceImagesID, setReplaceImagesID] = useState(null);
    const [deleteReplaceImageID, setDeleteReplaceImageID] = useState(null);


    useEffect(() => {

        db.collection('imageUrls').onSnapshot((snapShot) => {
            snapShot.docs.map((doc) => {
                if (doc.data().url !== null) {
                    if (doc.id == deleteReplaceImageID) {
                        db.collection('imageUrls').doc(deleteReplaceImageID).delete();
                    }
                }
            });
        });

    }, [deleteReplaceImageID])



    const replaceImage = async (photo) => {

        setReplaceImagesID(photo.id);

        await launchImageLibrary(options, (res) => {
            setReplaceImages(res.uri);

            db.collection('imageUrls').onSnapshot((snapShot) => {
                snapShot.docs.map((doc) => {
                    if ((doc.data().url !== null) || (doc.data().url !== undefined)) {
                        if ((doc.id == replaceImagesID) && (doc.id !== (undefined && null))) {
                            db.collection('imageUrls').doc(replaceImagesID).update({
                                url: replaceImages
                            }, { merge: true });
                        }
                    }
                });
            });

        })


    }



    const deleteImage = (photo) => {

        setDeleteReplaceImageID(photo.id);

        db.collection('imageUrls').onSnapshot((snapShot) => {
            snapShot.docs.map((doc) => {
                if ((doc.data().url !== null) && (doc.data().url !== undefined)) {
                    if (doc.id == deleteReplaceImageID && doc.id != undefined) {
                        db.collection('imageUrls').doc(deleteReplaceImageID).delete();
                    }
                }
            });
        });

    }



    return (
        <View>

            {photo.url !== (null && undefined) && (
                <View >
                    < Image key={photo.id} style={style.image} source={{ uri: photo.url }} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        < TouchableOpacity style={{ width: 60, height: 23, borderWidth: .5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft: 10, backgroundColor: 'grey', marginBottom: 65 }} >
                            <Text style={{ color: 'black' }} onPress={() => {
                                replaceImage(photo);
                            }}>Replace</Text>
                        </TouchableOpacity >

                        < TouchableOpacity style={{ width: 60, height: 23, borderWidth: .5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft: 15, marginRight: 25, backgroundColor: 'red', marginBottom: 65 }} >
                            <Text style={{ color: 'white' }} onPress={() => {
                                deleteImage(photo);
                            }}>Delete</Text>
                        </TouchableOpacity >
                    </View>

                </View>
            )}

        </View>
    )
}




const style = StyleSheet.create({
    image: {
        flex: 1,
        width: 130,
        height: 130,
        marginLeft: 10,
        marginTop: 10,
    },
});