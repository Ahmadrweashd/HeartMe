/// includ all pages styles. 

import {
    StyleSheet
} from 'react-native'
export default StyleSheet.create({

    registerPageContainer: {
        padding: 20,
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'stretch'
    },
    registerPageinput: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 20,
        color: '#34495e',
        margin: 10,

    },
    registerPageButtonContainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1abc9c',
        paddingVertical: 10,
        margin: 10,
    },
    registerPageButtonText: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20,

    },
    logincontainer: {
        marginTop:50,
        padding: 20,
        flex: 1,
      // backgroundColor: '#ecf0f1',
      //  alignItems: 'stretch'
    },

    homecontainer: {
        marginTop:10,
        padding: 20,
        flex: 1,
      // backgroundColor: '#ecf0f1',
      //  alignItems: 'stretch'
    },
    logininput: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 20,
        color: '#34495e'
    },
    loginbuttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1abc9c',
        paddingVertical: 10,
    },
    loginbuttontext: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20,


    },
    homePageinput: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 12,
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        color: '#34495e'
    },

    rowStyles : {
            flex: 1, 
            flexDirection: 'row'
        },

    textHomePage: {
        height:50,
        fontSize:35,
        fontStyle:"italic",
        textAlign: 'center',

    },
    LogoImage: {
        width: 250,
        height: 50,
        marginLeft: 30,
       marginBottom :20 ,
    },
    smileImage: {
        width: 130,
        height: 130,
        marginTop: 10,
        marginLeft: 100
    },
    modal: {
        height: 50,
        width: 50,
        color: 'red'
    },
    containerResultsPage: {
        flex: 1,
        marginTop: 30,
      },
    
      itemResultsPage: {
        backgroundColor: '#1abc9c',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 80,
      },
      titleResultsPage: {
        fontSize: 20,
        textAlign: 'center',
    
      },
      resultPageTextResultsPage:{
        marginTop:'3%',
        textAlign: 'center',
        fontSize: 25,
        fontStyle :'italic',
      },
    
       goodBackgroundResultsPage:{
         backgroundColor:'green',
         borderRadius: 80,
    
       },
       badBackgroundResultsPage:{
        backgroundColor:'red',
        borderRadius: 80,
    
      } ,
      dateResultsPage :{
        fontSize: 30 ,
        fontStyle :'italic',
        marginLeft:'5%',
        textAlign: 'center',
        color:'#1abc9c'
    
    
      }

});