import Header from './header'
import styled from 'styled-components';
import { Layout } from 'antd';
import { memo } from 'react';

const { Content } = Layout;
const AppContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    z-index: 0;
    height: 100vh;
`;
const MainContent = styled(Content)`
    height: ${(props) => {
        const isheader = props?.isheader ? 8 : 0;
        return `calc(100vh - ${isheader}%); `;
    }};
    width: 100%;
    overflow-y: scroll;
`

// eslint-disable-next-line react/display-name
const MainLayout = memo(({ children, header }) => {
    return (
        <AppContainer>
            {header && <Header {...header} />}
            <MainContent isheader={header ? 'true' : 'false'}> {children}</MainContent>
        </AppContainer>
    );
});

export default MainLayout;