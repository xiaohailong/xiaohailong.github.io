import React from 'react';
import dayjs from 'dayjs'
import './App.css';
import './index.less'
import Hello from './components/hello';
import p1 from '../static/20240510_164748.jpeg';


const App = () => {
  React.useEffect(()=>{
    initSwiper()
  },[])

  const initSwiper = () => {
    let d = document.querySelector("#swiper")
    console.log(d)
    let swiper = new (window as any).Swiper('.mySwiper',{
      effect: "cards",
      // cardsEffect: {
      //   slideShadows: true,
      //   //transformEl:'.text',
      // },
      grabCursor: true,
      on: {
        slideChange: function(e:any){
          console.log('改变了，activeIndex为'+e.activeIndex);
        },
      },
    })
  }

  return (
    <div className="swiper mySwiper">
      {/* <Hello></Hello> */}
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <Hello></Hello>
        </div>
        <div className="swiper-slide">
          <img src={p1} style={{
            height:'100%',
            width:'100%'
          }}/>
        </div>
        <div className="swiper-slide">
          <div className="swiper-slide-container">
            四月记录（待补充）
          </div>  
        </div>
        <div className="swiper-slide"> 
          <div className="swiper-slide-container">
            这里准备给老婆做个礼物清单，敬请期待
            </div>
        </div>
        <div className="swiper-slide"> 
          <div className="swiper-slide-container">
            这里准备给老婆做个相册，敬请期待
          </div>
        </div>
        <div className="swiper-slide"> 
          <div className="swiper-slide-container">
            这里准备给老婆做个抽奖转盘，敬请期待
          </div>
        </div>
        <div className="swiper-slide"> 
          <div className="swiper-slide-container">
            还有很多，敬请期待
          </div>
        </div>
        {/* <div className="swiper-slide"> 敬请期待</div>
        <div className="swiper-slide"> 敬请期待</div> */}
      </div>
    </div>
  );
};

export default App;
