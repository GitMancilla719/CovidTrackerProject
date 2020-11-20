import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {Box, Card, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography } from '@material-ui/core'
import TopCountriesStyle from '../styles/TopCountries.style'

const TopCountries = () => {

    const [tabsSet, setTabsSet] = useState(0)

    const cls = TopCountriesStyle()
    const countriesData = useSelector(state => state.SummaryReducer.Countries)
    console.log(countriesData)
    const TopRecovery = countriesData &&
                        countriesData
                        .map(({Country, NewRecovered, TotalRecovered, CountryCode}) => ({Country, NewRecovered, TotalRecovered, CountryCode}))
                        .sort( (a,b) => b.TotalRecovered-a.TotalRecovered)
                        .slice(0,15)
    const TopConfirmed = countriesData &&
                         countriesData
                         .map(({Country, NewConfirmed, TotalConfirmed, CountryCode}) => ({Country, NewConfirmed, TotalConfirmed, CountryCode}))
                         .sort( (a,b) => b.TotalConfirmed-a.TotalConfirmed)
                         .slice(0,15)
    const TopDeaths = countriesData &&
                      countriesData
                        .map(({Country, NewDeaths, TotalDeaths, CountryCode}) => ({Country, NewDeaths, TotalDeaths, CountryCode}))
                        .sort( (a,b) => b.TotalDeaths-a.TotalDeaths)
                        .slice(0,15)

    return (
        <div>
        <Box className={cls.container} component={Card}>
            <Box component={Tabs}>
                <Button className={cls.Tabs} onClick={()=>setTabsSet(0)}>Confirmed Cases</Button>
                <Button className={cls.Tabs} onClick={()=>setTabsSet(1)}>Fatalities</Button>
                <Button className={cls.Tabs} onClick={()=>setTabsSet(2)}>Recoveries</Button>
            </Box>

            <TableContainer>
            { tabsSet === 0 &&
                <Table>
                    <TableHead>
                    <TableCell className={cls.TableHeader}>Country</TableCell>
                    <TableCell className={cls.TableHeader}>Total Cases</TableCell>
                    </TableHead>
                    <TableBody>
                        {
                            TopConfirmed &&
                            TopConfirmed.map( obj => 
                            <TableRow>
                                <TableCell className={cls.TableCell}><img className={cls.flag} src={`https://www.countryflags.io/${obj.CountryCode}/flat/24.png`} alt="flag"/>{obj.Country}</TableCell>
                                <TableCell className={cls.TableCell}>{obj.TotalConfirmed.toLocaleString()} <span className={cls.spanConfirmed}>(+{obj.NewConfirmed.toLocaleString()})</span></TableCell>
                            </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            }
            {
                tabsSet === 1 &&
                <Table>
                    <TableHead>
                    <TableCell className={cls.TableHeader}>Country</TableCell>
                    <TableCell className={cls.TableHeader}>Total Deaths</TableCell>
                    </TableHead>
                    <TableBody>
                        {
                            TopDeaths &&
                            TopDeaths.map( obj => 
                            <TableRow>
                                <TableCell className={cls.TableCell}><img className={cls.flag} src={`https://www.countryflags.io/${obj.CountryCode}/flat/24.png`} alt="flag"/>{obj.Country}</TableCell>
                                <TableCell className={cls.TableCell}>{obj.TotalDeaths.toLocaleString()} <span className={cls.spanDeaths}>(+{obj.NewDeaths.toLocaleString()})</span></TableCell>
                            </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            }
            {  
                tabsSet === 2 &&
                <Table>
                    <TableHead>
                    <TableCell className={cls.TableHeader}>Country</TableCell>
                    <TableCell className={cls.TableHeader}>Total Recoveries</TableCell>
                    </TableHead>
                    <TableBody>
                        {
                            TopRecovery &&
                            TopRecovery.map( obj => 
                            <TableRow>
                                <TableCell className={cls.TableCell}><img className={cls.flag} src={`https://www.countryflags.io/${obj.CountryCode}/flat/24.png`} alt="flag"/>{obj.Country}</TableCell>
                                <TableCell className={cls.TableCell}>{obj.TotalRecovered.toLocaleString()} <span className={cls.spanRecovered}>(+{obj.NewRecovered.toLocaleString()})</span></TableCell>
                            </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            }
            </TableContainer>
        </Box>

        
        </div>
    )
}

export default TopCountries
