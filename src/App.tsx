import './app.scss';
import Home from './pages/home/Home';
import styled from 'styled-components';
import './assets/fonts/Montserrat-Light.ttf';
import './assets/fonts/Montserrat-Bold.ttf';
import './assets/fonts/Montserrat-SemiBold.ttf';
import './assets/fonts/Montserrat-Regular.ttf';

const App = () => {

  const Wrapper = styled.section`
      width: 100%;
      height: auto;
  `;
  return (
    <Wrapper>
      <Home></Home>
    </Wrapper>
  )
}

export default App
