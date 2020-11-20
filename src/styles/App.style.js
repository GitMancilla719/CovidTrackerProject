import { makeStyles } from '@material-ui/core'

const AppStyle = makeStyles( theme => ({
    container : {
        width : '90%',
        //backgroundColor : 'yellow',
        [theme.breakpoints.down('sm')]: {
            width : '100%',
        }
    },
    Nav : {
        borderRadius : '0',
        marginBottom : '1em',
        //position : 'fixed',
    },
})
)

export default AppStyle