import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import Axios from 'axios';

const AlbumList = (props) => {
    const [albums, setAlbums] = useState([]);
    const [isAlbumLoading, setIsAlbumLoading] = useState(true);

    useEffect(() => {

        Axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                setAlbums(response.data);
                setIsAlbumLoading(false);
            });

    }, []);

    const openAlubmUrl = async (url) =>{
        const supported = await Linking.canOpenURL(url);
        supported ? Linking.openURL(url) : Alert.alert(`Don't know how to open this URL: ${url}`);
    }

    const renderAlbums = ({ item }) => {
        return (
            <ScrollView>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View>
                            <Image style={styles.cardHeaderThumnail} source={{ uri: item.thumbnail_image }} />
                        </View>
                        <View>
                            <Text style={styles.cardHeaderTitle}>{item.title}</Text>
                            <Text style={styles.cardHeaderText}>{item.artist}</Text>
                        </View>
                    </View>

                    <View style={styles.cardBody}>
                        <Image style={styles.cardBodyImage} source={{ uri: item.image }} />
                    </View>
                    <View style={styles.cardFooter}>
                       <TouchableOpacity style={styles.cardFooterButton} onPress={() => openAlubmUrl(item.url)}>
                           <Text style={styles.cardFooterButtonText}> Buy Now !!</Text>
                       </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
    return (
        <View style={styles.albumsContainer}>
            <FlatList
                data={albums}
                renderItem={renderAlbums}
                keyExtractor={(item, index) => index.toString()}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    albumsContainer: {
        marginBottom:60,
        position:'relative'
    },

    card: {
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: "#F8F8F8",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 5,
        elevation: 3,
        position: "relative",
        borderRadius:4,
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    cardHeaderThumnail: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 10,
        marginLeft:5
    },
    cardHeaderTitle: {
        fontSize: 18,
    },
    cardHeaderText: {
        fontSize: 13,
        lineHeight: 15,
        color:'#2d2d2d'
    },
    cardBody: {
        marginTop: 5
    },
    cardBodyImage: {
        flex: 1,
        height: 400
    },
    cardFooter: {
        margin:4,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    cardFooterButton:{
        backgroundColor:'#fff',
        alignSelf:'stretch',
        flex:1,
        borderColor:'#007aff',
        marginHorizontal:5,
        borderRadius:5,
        borderWidth:1
    },
    cardFooterButtonText:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'600',
        paddingVertical:10,
        color:'#007aff'
    }


})

export default AlbumList;