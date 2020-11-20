import { makeStyles } from '@material-ui/core'

const NavStyle = makeStyles( theme => ({
    container : {
        width : '90%',
        backgroundColor : '#181B29',
        padding : '0.2em 1em 0.1em 1em',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        position : 'fixed',
        zIndex : '20',
        [theme.breakpoints.down('sm')]: {         
            width : '100%',
        }
    },
    Logo : {
        width : '17em',
        cursor: 'pointer',
        transition : '0.2s',
        [theme.breakpoints.down('sm')]: {         
            width : '14em',
        },
        '&:hover' : {
            width : '17.2em',
            transition : '0.2s'
        }
    },
    sections : {
        color : '#FFFFFF',
        display : 'flex',
        flexDirection : 'row',
        [theme.breakpoints.down('xs')]: {         
            display : 'none',
        }
    },
    sectionText : {
        margin : '0 1em 0 1em'
    },
    TabContainerOne : {
        display : 'flex',
        flexDirection : 'row',
        [theme.breakpoints.down('sm')]: {         
            flexDirection : 'column',
        }
    },
    TabContainerOneItem : {
        width : '100%', 
        marginRight : '0.5em',
        '&:nth-child(2)' : {
            [theme.breakpoints.down('sm')]: {         
                display : 'none'
            }
        },
    },
    hamburger : {
        [theme.breakpoints.up('sm')]: {         
            display : 'none'
        }
    },
    TopCountryMobile : {
        [theme.breakpoints.up('md')]: {         
            display : 'none'
        }
    }
        
    
})
)

export default NavStyle