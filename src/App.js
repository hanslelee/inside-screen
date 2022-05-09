import logo from './google_logo.svg';
import { faMagnifyingGlass, faKeyboard, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

function App() {
  const onClickLogo = () => {
    window.location.href = "/";
  }
  return (
    <div className="google-page">
      <div className='top-bar'>
          <div className='top-bar_left'>
            <h6>Google 정보</h6>
            <h6>스토어</h6>
          </div>
          <div className='top-bar_right'>
            <h6>Gmail</h6>
            <h6>이미지</h6>
            <button>로그인</button>
          </div>
        </div>

      <div className='center-wrap'>
        <img src={logo} className="google-logo" alt="logo" onClick={onClickLogo}/>
        
        <div className='search-bar'>
          <FontAwesomeIcon className = "fa faMagnifyingGlass" icon={faMagnifyingGlass} />
          <input className='search-textfield'></input>
          <div className='search-right-buttons'>
            <FontAwesomeIcon className = "fa faKeyboard" icon={faKeyboard} />
            <FontAwesomeIcon className = "fa faMicrophone" icon={faMicrophone} />
          </div>
        
        </div>
        <div className='search-buttons'>
          <button className="googleSearchBtn">Google 검색</button>
          <button className="feelingLuckyBtn">I'm Feeling Lucky</button>            
        </div>
      </div>
      
    </div>
  );
}

export default App;
