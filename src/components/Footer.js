import React from 'react'
import { makeStyles, Card, Box, Typography } from '@material-ui/core'

const FooterStyle = makeStyles( theme => ({
    container : {
        backgroundColor : '#181B29',
        width : '100%',
        color : 'white',
        [theme.breakpoints.down('xs')]: {
            width : '100%',
        }
    }
})
)

const Footer = () => {
    const cls = FooterStyle()

    return (
        <Box component={Card} className={cls.container}>
            
        </Box>
    )
}

export default Footer
