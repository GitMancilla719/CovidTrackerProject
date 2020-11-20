import { makeStyles } from '@material-ui/core'

const TopCountriesStyle = makeStyles( theme => ({ 
    container : {
        width : '100%',
        //backgroundColor : 'green'
    },
    TableCell : {
        //backgroundColor : 'yellow',
        padding : '0.3em 0.3em 0.3em 0.7em',
        textAlign : 'left',
        width : '11em',
        color : '#3A3A3A',
        fontWeight : '700',
        '&:nth-child(1)' : {
            width : '100%',
            color : 'black',
            //backgroundColor : 'yellow',
            display : 'flex',
            flexDirection : 'row',
            alignItems : 'center',
        },
    },
    TableHeader : {
        padding : '0.2em 0.2em 0.2em 0.7em',
        fontWeight : '700',
    },
    flag : {
        marginRight : '0.3em'
    },
    spanConfirmed : {
        color : '#526FB0',
        fontWeight : '400',
        fontSize : '9pt'
    },
    spanDeaths : {
        color : '#D42323',
        fontWeight : '400',
        fontSize : '9pt'
    },
    spanRecovered : {
        color : 'green',
        fontWeight : '400',
        fontSize : '9pt'
    },
    Tabs : {
        width : '100%',
        padding : '1.5em 1em 1.5em 1em',
        borderRadius : '0',
        height : '0em',
        margin : '0.3em',
        '&:nth-child(1)' : {
            color : '#00276A',
            border : '2px solid #00276A',
        },
        '&:nth-child(2)' : {
            color : '#D20000',
            border : '2px solid #D20000',
        },
        '&:nth-child(3)' : {
            color : 'green',
            border : '2px solid green',
        },
        [theme.breakpoints.down('xs')]: {
            //backgroundColor : 'yellow',
            fontSize : '7pt',
            fontWeight : '900',
            overflow : 'hidden'
        }
    }

})
)

export default TopCountriesStyle