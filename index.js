import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, Switch, FlatList } from 'react-native'; 
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class Lista extends Component{

    constructor(props){
        super(props);
        this.state ={
            feed: this.props.data
        };

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }

    carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    like(){
        let feed = this.state.feed;
        
        if(feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
        }

        else{
            this.setState({
                feed:{
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            });
        }

    }

    mostraLikes(likers){
        let feed = this.state.feed;

        if(feed.likers <= 0){
            return;
        }
        return(
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? 'Curtidas' : 'curtida'}
            </Text>
        );
    }


    render(){
        return(
            <View style={styles.areaFeed}>
                
                <View style= {styles.viewPerfil}>
                    <Image source={{uri: this.state.feed.imgperfil}} style={styles.fotoPerfil}/>

                    <Text style={styles.nomeUsuario}>
                        {this.state.feed.nome}

                    </Text>

                </View>

                <Image
                source={{uri: this.state.feed.imgPublicacao}} style={styles.fotoFeed}
                resizeMode ='cover'/>

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image style={styles.iconeImg} source={this.carregaIcone(this.state.feed.likeada)}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sendBtn}>
                        <Image style={styles.iconeCImg} source={require('../img/comment.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sendBtn}>
                        <Image style={styles.iconeImg} source={require('../img/send.png')}/>
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>

                    <Text style={styles.descRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    feed:{

    },
    nomeUsuario:{
        fontSize:18,
        textAlign:'left',
        color:'#000000',
        marginLeft:8
    },
    fotoPerfil:{
        width:40,
        height:40,
        borderRadius:25
    },
    fotoFeed:{
        flex:1,
        height:400
    },
    viewPerfil:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        padding:8
    },
    areaBtn:{
        flex:1,
        flexDirection:'row',
        padding:5
    },
    iconeImg:{
        width:28,
        height:28
    },
    sendBtn:{
        paddingLeft:28
    },
    viewRodape:{
        flexDirection:'row',
        alignItems:'center'
    },
    descRodape:{
        paddingLeft:5,
        fontSize:15,
        color:'#000'
    },
    nomeRodape:{
        fontWeight:'bold',
        paddingLeft:5,
        fontSize:18,
        color:'#000'
    },
    iconeCImg:{
        width:43,
        height:28
    },
    likes:{
        fontWeight:'bold',
        marginLeft:5,
        fontSize:15
    }
});

export default Lista;