

import {Container, HeadWrap,  Logo, Navlink} from './Header.styled'
export const Header = () => {
    return (
        <HeadWrap>
            <Container>
            <Logo>
                <Navlink to={'/' }> Coose your Camper</Navlink> 
            </Logo>
            <Navlink to={'/campers'}>Campers</Navlink>
            <Navlink to={'/favourite'}>My Favourite</Navlink>
             </Container>
        </HeadWrap>
    )
}