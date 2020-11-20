import { makeStyles } from '@material-ui/core'

const CovidInfoStyle = makeStyles( theme => ({
    mainContainer : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        height : '42em',
        overflow : 'scroll',
        overflowX : 'hidden',
        overflowY : 'hidden',
        scrollBehavior : 'smooth',
        borderTop : '5px solid #202954',
        "&::-webkit-scrollbar" : {
            width: '5px'
        },
        "&::-webkit-scrollbar-track" : {
            background: '#f1f1f1',
            
        },
        "&::-webkit-scrollbar-thumb" : {
            background: '#8887',
            borderRadius : '2px'
        },
        "&::-webkit-scrollbar-thumb:hover" : {
            background: '#888'
        }
    },
    titles : {
        fontWeight : '700',
        fontSize : '17pt',
        marginBottom : '0.5em',
        color : '#202954',
        borderLeft : '5px solid #202954',
        borderRadius : '0.2em',
        paddingLeft : '0.5em',
        marginLeft : '-1em'

    },
    description : {
        //color : '#42444F',
        fontSize : '11pt'
    },
    sectionContainer : {
        margin : '2em 0 0.5em 0',
        //backgroundColor : 'yellow',
        width : '48em',
        padding : '2em 2em 0.5em 2em',
        borderTop : '1px solid #D8D8D8',
        '&:nth-child(1)' : {
            border : 'none'
        }
    },
    FAQNav : {
        width : '30em',
        height : 'auto',
        padding : '2em',
        margin : '1em',
        //position : 'fixed'
    },
    FAQLinks : {
        //backgroundColor : 'green',
        textDecoration : 'none',
        margin : '0.1em 0 0.2em 0',
        //color:'black',
        '&:hover' : {
            fontWeight : '500',
            //fontSize : '11pt',
            transition : '1s'
        }
    }
})
)

export default CovidInfoStyle
