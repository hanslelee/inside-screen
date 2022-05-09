import logo from './google_logo.svg';
import { faMagnifyingGlass, faKeyboard, faMicrophone, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const onClickLogo = () => {
    window.location.href = "/";
  }

  const htmlCode = 'import logo from\'./google_logo.svg\'; import{faMagnifyingGlass,faKeyboard,faMicrophone,faBars}from\'@fortawesome/free-solid-svg-icons\'; import{FontAwesomeIcon}from"@fortawesome/react-fontawesome";import{motion}from\'framer-motion\';import\'./App.css\';function App(){const onClickLogo=()=>{window.location.href="/"}const htmlCode=\'\'return(<div className="google_page"><div className=\'top_bar\'><div className=\'top_bar-left\'><h6>Google정보</h6><h6>스토어</h6></div><div className=\'top_bar-right\'><h6>Gmail</h6><h6>이미지</h6><h6><FontAwesomeIcon className="fa faBars"icon={faBars}/></h6><button className=\'login_btn\'>로그인</button></div></div><div className=\'center_wrap\'><div className=\'google_logo pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.img whileHover={{opacity:0}}src={logo}className="google_logo-image pos_abs z1"alt="logo"onClick={onClickLogo}/></div><div className=\'search_bar pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.div whileHover={{opacity:0}}className=\'search_bar-outside pos_abs z1\'><FontAwesomeIcon className="fa faMagnifyingGlass"icon={faMagnifyingGlass}/><input className=\'search_textfield\'></input><div className=\'search_right_buttons\'><FontAwesomeIcon className="fa faKeyboard"icon={faKeyboard}/><FontAwesomeIcon className="fa faMicrophone"icon={faMicrophone}/></div></motion.div></div><div className=\'search_buttons\'><button className="googleSearchBtn">Google검색</button><button className="feelingLuckyBtn">I\'m Feeling Lucky</button></div>{}</div><div className=\'bottom_bar\'><div className=\'bottom_bar-upper\'><h6>대한민국</h6></div><div className=\'bottom_bar-lower\'><div className=\'bottom_bar-lower-left\'><h6>광고</h6><h6>비즈니스</h6><h6>검색의원리</h6></div><div className=\'bottom_bar-lower-right\'><h6>개인정보처리방침</h6><h6>약관</h6><h6>설정</h6></div></div></div></div>)}export default App;'

  return (
    <div className="google_page">
      <div className='top_bar'>
          <div className='top_bar-left'>
            <h6>Google 정보</h6>
            <h6>스토어</h6>
          </div>
          <div className='top_bar-right'>
            <h6>Gmail</h6>
            <h6>이미지</h6>
            <h6><FontAwesomeIcon className = "fa faBars" icon={faBars} /></h6>
            <button className='login_btn'>로그인</button>
          </div>
        </div>

      <div className='center_wrap'>
        <div className='google_logo pos_rel overflow_hid'>
          <div className='code pos_abs'>{htmlCode}</div>
          <motion.img whileHover={{opacity: 0}}
            src={logo} className="google_logo-image pos_abs z1" alt="logo" onClick={onClickLogo}/>
        </div>
        <div className='search_bar pos_rel overflow_hid'>
          <div className='code pos_abs'>{htmlCode}</div>
          <motion.div whileHover={{opacity: 0}} className='search_bar-outside--wrap pos_abs z1'>
            <motion.div whileHover={{opacity: 0}} className='search_bar-outside pos_abs z1'>
              <FontAwesomeIcon className = "fa faMagnifyingGlass" icon={faMagnifyingGlass} />
              <input className='search_textfield'></input>
              <div className='search_right_buttons'>
                <FontAwesomeIcon className = "fa faKeyboard" icon={faKeyboard} />
                <FontAwesomeIcon className = "fa faMicrophone" icon={faMicrophone} />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className='search_buttons'>
          <button className="googleSearchBtn">Google 검색</button>
          <button className="feelingLuckyBtn">I'm Feeling Lucky</button>            
        </div>
        {/* <div className='search_services'>
          <h6>Google 제공 서비스: </h6>
          <h6 style={{color: `blue`}}>English</h6>
        </div> */}
      </div>
      <div className='bottom_bar'>
        <div className='bottom_bar-upper'>
          <h6>대한민국</h6>
        </div>
        <div className='bottom_bar-lower'>
          <div className='bottom_bar-lower-left'>
            <h6>광고</h6>
            <h6>비즈니스</h6>
            <h6>검색의 원리</h6>
          </div>
          <div className='bottom_bar-lower-right'>
            <h6>개인정보처리방침</h6>
            <h6>약관</h6>
            <h6>설정</h6>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
