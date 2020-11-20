import { makeStyles } from '@material-ui/core'

const OverviewStyle = makeStyles( theme => ({
    containerMain : {
        width : '100%'
    },
    container : {
        width : '100%',
        paddingTop : '1em'
    },
    cardContainer : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        [theme.breakpoints.down('xs')]: {
            alignItems : 'center',
            flexDirection : 'column',
        },
    },
    Cards : {
        width : '15em',
        textAlign : 'center',
        margin : '1em 0.5em 1em 0.5em',
        '&:nth-child(1)' : {
            color : '#3580FF'
        },
        '&:nth-child(2)' : {
            color : '#FF3535'
        },
        '&:nth-child(3)' : {
            color : '#6DED64'
        }
    },
    countryName : {
        fontWeight : '700',
        fontSize : '15pt',
        [theme.breakpoints.down('xs')]: {
            fontSize : '15pt',
        },
        
    },
    GlobalStats : {
        color : '#787878',
        textAlign : 'center',
        fontWeight : '700',
        fontSize : '15pt',
        lineHeight : '0.5em',
    },
    subText : {
        color : '#787878',
        lineHeight : '0.5em',
        [theme.breakpoints.down('xs')]: {
            fontSize : '11pt',
        },
    },
    upperPopup : {
        display : 'flex',
        flexDirection : 'row',
        alignContent : 'center',
        //justifyContent : 'center',
        //backgroundColor : '#fff123'
        
    },
    flag : {
        display : 'flex',
        alignSelf : 'center',
        height : '100%',
        width : 'auto',
        marginRight : '0.2em'
    },
    selection : {
        position : 'absolute',
        zIndex : '10',
        margin : '1em 0 0 1em',
        backgroundColor : '#ffffff',
        width : '20em',
        padding : '1em',
        borderRadius : '0.2em',

        [theme.breakpoints.down('xs')]: {
            position : 'relative',
            margin : '0',
        }
    },
    popupStats : {
        padding : '0.5em',
        
        '&:nth-child(2)' : {
            color : '#3580FF'
        },
        '&:nth-child(3)' : {
            color : '#FF3535'
        },
        '&:nth-child(4)' : {
            color : '#6DED64'
        }
    },
    total : {
        fontWeight : '700',
        fontSize : '20pt',
        [theme.breakpoints.down('xs')]: {
            fontSize : '15pt',
        }
        
    }

})
)

export default OverviewStyle