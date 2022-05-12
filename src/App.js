import React, {useState} from 'react';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
const App = () =>{
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
    <React.Fragment>
       {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
    <Meals />
      </main>
    </React.Fragment>
  )
}



// 장바구니 렌더링을 App.js 내에서 하기 때문에, state를 App.js 컴포넌트 함수에서 관리함


export default App;

      
