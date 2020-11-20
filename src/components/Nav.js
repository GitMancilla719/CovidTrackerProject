import React, {useState} from 'react'
import { Box, Card, Tabs, Tab,Menu,MenuItem,Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NavStyle from '../styles/Nav.style'
import Overview from './Overview'
import DetailedData from './DetailedData'
import Logo from '../assets/logo-white.png'
import TopCountries from './TopCountries'
import CovidInfo from './CovidInfo'
import { TrainRounded } from '@material-ui/icons'


const Nav = () => {
    const cls = NavStyle()

    const [tabSelect, setTabSelect] = useState(0)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (val) => {
        setAnchorEl(null);
        setTabSelect(val)
        //console.log('teeeest', val)
    };
    return (
        <>
        <Box className={cls.container} component={Card} elevation={2}>
            <img className={cls.Logo} src={Logo} alt="Logo" onClick={()=>setTabSelect(0)}/>
            <Box >
                <Tabs className={cls.sections}>
                    <Tab onClick={()=>setTabSelect(0)} label='COVID-19 Statistics'/>
                    <Tab onClick={()=>setTabSelect(1)} label="COVID-19 FAQ's"/>
                </Tabs>

                <Box className={cls.hamburger}>
                    <Button aria-controls="hamburger" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon style={{ color: '#FFFFFF' }}/>
                    </Button>
                    <Menu
                        id="hamburger"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={()=>handleClose(0)}>COVID-19 Statistics</MenuItem>
                        <MenuItem onClick={()=>handleClose(1)} >COVID-19 FAQ's</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
        
        <Box style={{paddingTop  : '7em'}}>
        {
                tabSelect === 0 && 
                <Box >
                    <Box className={cls.TabContainerOne}>
                        <Box className={cls.TabContainerOneItem}>
                            <Overview/>
                        </Box>
                        <Box className={cls.TabContainerOneItem}>
                            <TopCountries/>
                        </Box>
                    </Box>
                    <DetailedData/>
                    <Box className={cls.TopCountryMobile}>
                        <TopCountries/>
                    </Box>
                </Box>
        }
        {
                tabSelect === 1 &&
                <Box>
                    <CovidInfo/>
                </Box>
        }
        </Box>
        </>
    )
}

export default Nav
