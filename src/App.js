import logo from './google_logo.svg';
import { faMagnifyingGlass, faKeyboard, faMicrophone, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';
import './App.css';

function App() {

  // const htmlCode = 'import logo from\'./google_logo.svg\'; import{faMagnifyingGlass,faKeyboard,faMicrophone,faBars}from\'@fortawesome/free-solid-svg-icons\'; import{FontAwesomeIcon}from"@fortawesome/react-fontawesome";import{motion}from\'framer-motion\';import\'./App.css\';function App(){const onClickLogo=()=>{window.location.href="/"}const htmlCode=\'\'return(<div className="google_page"><div className=\'top_bar\'><div className=\'top_bar-left\'><h6>Google정보</h6><h6>스토어</h6></div><div className=\'top_bar-right\'><h6>Gmail</h6><h6>이미지</h6><h6><FontAwesomeIcon className="fa faBars"icon={faBars}/></h6><button className=\'login_btn\'>로그인</button></div></div><div className=\'center_wrap\'><div className=\'google_logo pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.img whileHover={{opacity:0}}src={logo}className="google_logo-image pos_abs z1"alt="logo"onClick={onClickLogo}/></div><div className=\'search_bar pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.div whileHover={{opacity:0}}className=\'search_bar-outside pos_abs z1\'><FontAwesomeIcon className="fa faMagnifyingGlass"icon={faMagnifyingGlass}/><input className=\'search_textfield\'></input><div className=\'search_right_buttons\'><FontAwesomeIcon className="fa faKeyboard"icon={faKeyboard}/><FontAwesomeIcon className="fa faMicrophone"icon={faMicrophone}/></div></motion.div></div><div className=\'search_buttons\'><button className="googleSearchBtn">Google검색</button><button className="feelingLuckyBtn">I\'m Feeling Lucky</button></div>{}</div><div className=\'bottom_bar\'><div className=\'bottom_bar-upper\'><h6>대한민국</h6></div><div className=\'bottom_bar-lower\'><div className=\'bottom_bar-lower-left\'><h6>광고</h6><h6>비즈니스</h6><h6>검색의원리</h6></div><div className=\'bottom_bar-lower-right\'><h6>개인정보처리방침</h6><h6>약관</h6><h6>설정</h6></div></div></div></div>)}export default App;'
  const htmlCode1 = 'import logo from\'./google_logo.svg\';import{faMagnifyingGlass,faKeyboard,faMicrophone,faBars}from\'@fortawesome/free-solid-svg-icons\';import{FontAwesomeIcon}from"@fortawesome/react-fontawesome";import{motion}from\'framer-motion\';import\'./App.css\';function App(){'
  const htmlCode2 = '<div className=\'top_bar-left-store pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.h6 className=\'pos_abs z1 backWhite\'whileHover={{opacity:0}}>스토어</motion.h6></div>'
  const htmlCode3 = '<div className=\'top_bar-right-gmail pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.h6 className=\'outside backwhite\'whileHover={{opacity:0}}>Gmail</motion.h6></div>'
  const htmlCode4 = '<div className=\'top_bar-right-image pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.h6 className=\'outside backWhite\'whileHover={{opacity:0}}>이미지</motion.h6></div>'
  const htmlCode5 = '<div className=\'top_bar-right-faBars pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.h6 className=\'outside backWhite\'whileHover={{opacity:0}}><FontAwesomeIcon className="fa faBars"icon={faBars}/></motion.h6></div>'
  const htmlCode6 = '<motion.div whileHover={{opacity: 0}} className=\'outside backWhite\'><motion.button className=\'login_btn outside\' whileHover={{opacity: 0}}>로그인</motion.button></motion.div>'
  const htmlCode7 = 'import logo from\'./google_logo.svg\';import{faMagnifyingGlass,faKeyboard,faMicrophone,faBars}from\'@fortawesome/free-solid-svg-icons\';import{FontAwesomeIcon}from"@fortawesome/react-fontawesome";import{motion}from\'framer-motion\';import\'./App.css\';<div className=\'center_wrap\'><div className=\'google_logo pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.img whileHover={{opacity:0}}src={logo}className="google_logo-image pos_abs z1"alt="logo"/></div>'
  const htmlCode8 = '<div className=\'search_bar pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.div whileHover={{opacity:0}}className=\'search_bar-outside--wrap pos_abs z1\'><motion.div whileHover={{opacity:0}}className=\'search_bar-outside pos_abs z1\'><FontAwesomeIcon className="fa faMagnifyingGlass"icon={faMagnifyingGlass}/><input disabled className=\'search_textfield\'></input><div className=\'search_right_buttons\'><FontAwesomeIcon className="fa faKeyboard"icon={faKeyboard}/><FontAwesomeIcon className="fa faMicrophone"icon={faMicrophone}/></div></motion.div></motion.div></div>'
  const htmlCode9 = '<motion.div whileHover={{opacity: 0}} className=\'outside backWhite\'><motion.button whileHover={{opacity: 0}} className="googleSearchBtn outside">Google 검색</motion.button></motion.div>'
  const htmlCode10 = '<div className=\'code pos_abs\'>{htmlCode}</div><motion.div whileHover={{opacity: 0}} className=\'outside backWhite\'><motion.button whileHover={{opacity: 0}} className="feelingLuckyBtn outside">I\'m Feeling Lucky</motion.button></motion.div>'
  const htmlCode11 = 'import logo from\'./google_logo.svg\';import{faMagnifyingGlass,faKeyboard,faMicrophone,faBars}from\'@fortawesome/free-solid-svg-icons\';import{FontAwesomeIcon}from"@fortawesome/react-fontawesome";import{motion}from\'framer-motion\';import\'./App.css\';<div className=\'bottom_bar\'><div className=\'bottom_bar-upper-wrap pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.div whileHover={{opacity:0}}className=\'bottom_bar-upper outside\'><h6>대한민국</h6></motion.div></div>.bottom_bar-lower-wrap{width:100vw;height:49px}.bottom_bar-upper{width:100vw;padding:16px;border-bottom:1px solid#dadce0;background-color:rgb(242,242,242)}.bottom_bar{width:100vw;display:block;align-items:center;justify-content:space-between}.bottom_bar-upper-wrap{width:100vw;height:49px;border-bottom:1px solid#dadce0}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}'
  const htmlCode12 = 'import logo from\'./google_logo.svg\';import{faMagnifyingGlass,faKeyboard,faMicrophone,faBars}from\'@fortawesome/free-solid-svg-icons\';import{FontAwesomeIcon}from"@fortawesome/react-fontawesome";import{motion}from\'framer-motion\';import\'./App.css\';<div className=\'bottom_bar-lower-wrap pos_rel overflow_hid\'><div className=\'code pos_abs\'>{htmlCode}</div><motion.div whileHover={{opacity:0}}className=\'bottom_bar-lower outside\'><div className=\'bottom_bar-lower-left\'><h6>광고</h6><h6>비즈니스</h6><h6>검색의원리</h6></div><div className=\'bottom_bar-lower-right\'><h6>개인정보처리방침</h6><h6>약관</h6><h6>설정</h6></div></motion.div></div>.bottom_bar-lower{width:100vw;display:flex;flex-direction:row;align-items:stretch;justify-content:space-between;background-color:rgb(242,242,242)}.bottom_bar-lower-left{margin:16px;display:flex;justify-content:space-between;align-items:center}.bottom_bar-lower-right{margin:16px;display:flex;justify-content:space-between;align-items:center}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none}table{border-collapse:collapse;border-spacing:0}'

  return (
    <div className="google_page">
      <div className='top_bar'>
          <div className='top_bar-left'>
            <div className='top_bar-left-google_info pos_rel overflow_hid'>
              <div className='code pos_abs'>{htmlCode1}</div>
              <motion.h6 className='pos_abs z1 backWhite' whileHover={{opacity: 0}}>Google 정보</motion.h6>
            </div>
            <div className='top_bar-left-store pos_rel overflow_hid'>
              <div className='code pos_abs'>{htmlCode2}</div>
              <motion.h6 className='pos_abs z1 backWhite' whileHover={{opacity: 0}}> 스토어</motion.h6>
            </div>
          </div>
          <div className='top_bar-right'>
            <div className='top_bar-right-gmail pos_rel overflow_hid'>
              <div className='code pos_abs'>{htmlCode3}</div>
              <motion.h6 className='outside backwhite' whileHover={{opacity: 0}}>Gmail</motion.h6>
            </div>
            <div className='top_bar-right-image pos_rel overflow_hid'>
              <div className='code pos_abs'>{htmlCode4}</div>
              <motion.h6 className='outside backWhite' whileHover={{opacity: 0}}>이미지</motion.h6>
            </div>
            <div className='top_bar-right-faBars pos_rel overflow_hid'>
              <div className='code pos_abs'>{htmlCode5}</div>
              <motion.h6 className='outside backWhite' whileHover={{opacity: 0}}><FontAwesomeIcon className = "fa faBars" icon={faBars} /></motion.h6>
            </div>
            <div className='top_bar-right-login_btn pos_rel overflow_hid'>
              <div className='code pos_abs'>{htmlCode6}</div>
              <motion.div whileHover={{opacity: 0}} className='outside backWhite'>
                <motion.button className='login_btn outside' whileHover={{opacity: 0}}>로그인</motion.button>
              </motion.div>
            </div>
          </div>
        </div>

      <div className='center_wrap'>
        <div className='google_logo pos_rel overflow_hid'>
          <div className='code pos_abs'>{htmlCode7}</div>
          <motion.img whileHover={{opacity: 0}}
            src={logo} className="google_logo-image pos_abs z1" alt="logo"/>
        </div>
        <div className='search_bar pos_rel overflow_hid'>
          <div className='code pos_abs'>{htmlCode8}</div>
          <motion.div whileHover={{opacity: 0}} className='search_bar-outside--wrap pos_abs z1'>
            <motion.div whileHover={{opacity: 0}} className='search_bar-outside pos_abs z1'>
              <FontAwesomeIcon className = "fa faMagnifyingGlass" icon={faMagnifyingGlass} />
              <input disabled className='search_textfield'></input>
              <div className='search_right_buttons'>
                <FontAwesomeIcon className = "fa faKeyboard" icon={faKeyboard} />
                <FontAwesomeIcon className = "fa faMicrophone" icon={faMicrophone} />
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className='search_buttons'>
          <div className='search_buttons-googleSearchBtn pos_rel overflow_hid'> 
            <div className='code pos_abs'>{htmlCode9}</div>
            <motion.div whileHover={{opacity: 0}} className='outside backWhite'>
              <motion.button whileHover={{opacity: 0}} className="googleSearchBtn outside">Google 검색</motion.button>
            </motion.div>
          </div>
          <div className='search_buttons-feelingLuckyBtn pos_rel overflow_hid'>
            <div className='code pos_abs'>{htmlCode10}</div>
            <motion.div whileHover={{opacity: 0}} className='outside backWhite'>
              <motion.button whileHover={{opacity: 0}} className="feelingLuckyBtn outside">I'm Feeling Lucky</motion.button>            
            </motion.div>
          </div>
          
          
        </div>
      </div>
      <div className='bottom_bar'>
        <div className='bottom_bar-upper-wrap pos_rel overflow_hid'>
          <div className='code pos_abs'>{htmlCode11}</div>
          <motion.div whileHover={{opacity: 0}} className='bottom_bar-upper outside'><h6>대한민국</h6></motion.div>
        </div>
        <div className='bottom_bar-lower-wrap pos_rel overflow_hid'>
          <div className='code pos_abs'>{htmlCode12}</div>
          <motion.div whileHover={{opacity: 0}} className='bottom_bar-lower outside'><div className='bottom_bar-lower-left'><h6>광고</h6><h6>비즈니스</h6><h6>검색의 원리</h6></div><div className='bottom_bar-lower-right'><h6>개인정보처리방침</h6><h6>약관</h6><h6>설정</h6></div></motion.div> 
        </div>
        

      </div>
    </div>
  );
}

export default App;
