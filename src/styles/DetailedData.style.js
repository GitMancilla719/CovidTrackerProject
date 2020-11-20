import { makeStyles } from '@material-ui/core'

const DDStyle = makeStyles( theme => ({
    container : {
        width : '100%',
        //backgroundColor : 'yellow',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginTop : '2em',
        [theme.breakpoints.down('xs')]: {         
            flexDirection : 'column',
        }

    },
    graphContainer : {
        //backgroundColor : 'yellow',
        //width : '40%',
        height : 'auto',
        [theme.breakpoints.down('xs')]: {
            width : '100%',
        }
    },
    cardContainer : {
        //backgroundColor : 'red',
        width : 'auto',
        //margin : 'auto'
    },
    LineGraph : {
        width : '100%'
    },
    cardBoxMain : {
        //width : '90%',
        margin : '0.2em',
        padding : '0.5em 1em 0.5em 1em',
        backgroundColor : '#3C467D',
        color : 'white',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems :'center'
    },
    cardBoxPercentage : {
        //width : '90%',
        padding : '0.5em 1em 0.5em 1em',
        color : 'white',
        margin : '0.2em',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems :'center',
        '&:nth-child(1)' : {
            backgroundColor : '#C76F00', 
        },
        '&:nth-child(2)' : {
            backgroundColor : '#B30909',
        },
        '&:nth-child(3)' : {
            backgroundColor : 'green',
        }
    },
    cardBoxTextHightlight: {
        fontSize : '25pt',
        fontWeight : '500',
        lineHeight : '1em'
    },
    cardBoxTextSmall : {
        fontSize : '11pt',
        fontWeight : '400'
    }
})
)

export default DDStyle