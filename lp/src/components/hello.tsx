import React from "react"
import './index.less'
import dayjs, { Dayjs } from "dayjs"

const startDate = dayjs('2024-04-10')

// 回重庆第一次聊天
const startChat = dayjs('2023-11-15')
// 宁夏羊肉汤锅
const startEat = dayjs('2023-12-20')
// 御道印象K歌 
const firstAnmo = dayjs('2024-02-25')
// 足乐有道 
const zule = dayjs('2024-03-10')
// 万盛石林 
const wansheng = dayjs('2024-03-16')
// 重庆动物园
const cqzoom = dayjs('2024-03-24')
// 
const huiyue = dayjs('2024-04-03')


const Hello = () => {
    const [title, setTitle] = React.useState<string>('')
    const [tips, setTips] = React.useState<string>('')
    const [content, setContent] = React.useState<string>('')
    React.useEffect(()=>{
        let _title = `哈喽呀，我的老婆`
        let _tips = `道路千万条，爱你第一条`
        let _content = `今天是${dayjs().startOf('day').format('YYYY/MM/DD')},是我们正式在一起的第${subDay(startDate)}。和你在一起的每一天我都很开心，我希望你也是。<br>
            在30天纪念日前夕，我在想什么礼物比较好，然后就想到我可以搞个纪念册，来记录我们在一起的时光。<br>
            ${subDay(startChat)}前，我们开始在微信上聊天。<br>
            ${subDay(startEat)}前，我们吃宁夏羊肉汤锅，在狮子坪周边散步，还做了老婆的电车，晕了。<br>
            ${subDay(firstAnmo)}前，我们去御道印象按摩，也是我第一次去你家接你，还逛了公园。<br>
            然后我们就是相见恨晚的两个人，有说不完的话。<br>
            ${subDay(zule)}前，我们去三峡广场足乐有道按摩，晚上吃了分量特别大的餐馆。<br>
            ${subDay(wansheng)}前，我们去万盛石林，那天乖乖都累惨了。<br>
            ${subDay(cqzoom)}前，我们去重庆动物园看熊猫，然后下午在渝悦按摩，你看到了我的蓝色内内。<br>
            之后的一周，我因为美甲闹的不开心，对你说了不该说的话，对不起。<br>
            ${subDay(huiyue)}前，也是清明前，我们去了圣世云津，你说是舍不得那杯奶茶。<br>
            清明回来后，我就真的离不开你了。<br>
            4月的回忆，我后面再补一下。
        `
        write(_title,(str:string)=> { setTitle(str)},()=> { 
            console.log('title done') 
            write(_tips,(str:string)=> { setTips(str)},()=> { 
                console.log('tips done') 
                write(_content,(str:string)=> { setContent(str)},()=> { 
                    console.log('content done') 
                })
            })
        })
        // setTips(_tips)
        // setTitle(_title)
        // setContent(_content)
    },[])

    function subDay(date: Dayjs) {
        const s = dayjs().startOf('day').toDate().getTime() - date.startOf('day').toDate().getTime()
        return `${s / 1000 / 60 / 60 / 24}天`
    }

    function write(str:string, fn:Function, cb?:Function)  {
        let count = 0
        let len = str.length
        let timer = setInterval(()=>{
          const domHtml = str.slice(0,count)
          fn(domHtml)
          count = count + 1
          if(count > len) {
            cb && cb()
            clearInterval(timer)
          }
        },200)
    }

    return <div className="hello-container">
        <div 
            id='title-dom'
            dangerouslySetInnerHTML={{
                __html: title
            }}
        ></div> 
        <div 
            id='tips-dom'
            dangerouslySetInnerHTML={{
                __html: tips
            }}
        ></div> 
        <div 
            id='content-dom'
            dangerouslySetInnerHTML={{
                __html: content
            }}
        ></div> 
    </div>
}

export default Hello