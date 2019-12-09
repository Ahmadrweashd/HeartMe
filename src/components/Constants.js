/// constants is a json param , will contains every data that we need (image path , Code ,status ...)
const constants = {
    RESULT_STATUS: {
        BAD: {
            CODE: -1,
            IMAGE_SRC: require('../../assets/bad_face.png')
        },
        GOOD:  {
            CODE: 1,
            IMAGE_SRC: require('../../assets/smiling_face1.png')
        },
        UNKNOWN:  {
            CODE: 0,
            IMAGE_SRC: {uri: ''}
        },
    }
}

export default constants;