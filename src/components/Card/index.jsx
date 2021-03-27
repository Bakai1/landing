import React from 'react'
import { HelpCard, HelpCardTree, HelpCardTwo, HelpCardFour} from '../../components/HelpCard'
import css from './Card.module.css'
import img3 from './image/img3.png'
import img4 from './image/img4.png'
import img5 from './image/img5.png'


const Card = (props) => {

  const data = [
    {
        title: "Weight Lifting",
        bg: "#FFE2DE",
    },
    {
        title: "Running  & Spinning",
        bg:" #C4E769",
    },
    {
       title: "Pumping Iron",
       bg: "#62D0DF",
   },
   {
       title: "Pumping Iron",
       bg: "#0052C1",
   },
]

  const data2 = [
    {
      title: "Physical Health",
      bg:"#22356F",
    },
    {
      title: "Mental Health",
      bg:"#0052C1",
    },    {
      title: "Nutrition",
      bg:"#62D0DF",
    },    {
      title: "",
      bg:"#62D0DF",
    },    {
      title: "Crossfit",
      bg:"#DEE1FF",
    },    {
      title: "Aerobics",
      bg:"#8F00FF",
    },
  ]
  const data3 = [
    {
      h3: "Nutrition Plans",
      title: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
    },
    {
      h3: "Weight Loss",
      title: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
    }, 
    {
      h3: "Mental Peace",
      title: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
    }, 
    {
      h3: "Home Training",
      title: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
    }, 
    {
      h3: "Work/life Balance",
      title: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
    },
     {
      h3: "Cardio",
      title: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
    },
  ]
  const data4 = [
    {
      h2: "SOME INFO",
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."
    },
    {
      h2: "ENFOLD HEALTH",
      title2: "office@enfold-health.com",
      title: "Main Street 1, Olcott Buffalo, United States +555 283 784 333 "
    }, 
    {
      h2: "OFFICE HOURS",
      title: "Mo-Fr: 8:00-19:00 Sa: 8:00-14:00 Su: closed"
    },
  ]

    return (
        <div className={css.oneBlock}>
           <div className={css.header}>
             <h2 className={css.logoName}>Thrivetalk</h2>
             <nav className={css.navigator}>
               <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Serveces</li>
                   <li>Blog</li>
              </ul>
            </nav> 
             <button className={css.button}>CONTACT US</button>
           </div>
        <h2 className={css.logoName2}>Thrivetalk</h2>
        <h1 className={css.title}>HELPING YOU THRIVE  <br></br>
             IN ALLAREAS OF LIFE
        </h1>
        <div className={css.aClass}>
            <ul>
             <li><a>Our highly talented therapists can help you</a></li>
             <li><a> with a range of issues including relationships,</a></li> 
             <li><a> sex, PTSD, depression, social anxiety, or even</a></li> 
             <li><a> just caring for yourself more.</a></li> 
          </ul>
       </div>
       <div>
       <button className={css.button2}><a>WHO AM !</a></button>
       <button className={css.button3}><a>WHAT DO I DO</a></button>
        </div>
        {/* 2-block */}
        <div className={css.twoBlock}>
            <div className={css.titleTwo}> 
             <ul>
               <h2>Why Thrive?</h2>
               <li className={css.titleOneBlock}>Want to improve your well-being from the comfort</li>
                  <li className={css.titleOneBlock}>of your own couch? Are you having trouble finding</li>
                  <li className={css.titleOneBlock}>the right therapist? <a className={css.titleOneBlock2}>Here at ThriveTalk, our licensed</a></li>
                    <li className={css.titleOneBlock2}><a>therapists provide the same quality care you would get in office</a></li> 
                    <li className={css.titleOneBlock2}> <a> from anywhere you can access your laptop or mobile phone.</a></li>
                    <li className={css.titleOneBlock2}><a>Become your best self with ThriveTalk.  Start therapy now with a</a></li>
                    <li className={css.titleOneBlock2}><a>licensed therapist!</a></li>
             </ul>
             <img className={css.img2}></img>
           </div>
        </div>
        {/* 3-block */}
        <div className={css.threeBlock}>
          <span>ABOUT US</span>
    <ul>
          <li>We want to help you thrive! Whether you are just</li>
          <li>looking for someone to talk to, or are struggling with a</li>
          <li>mental wellness issue we’re here to help. Our highly</li>
          <li>talented therapists can help you with a range of issues</li>
          <li> including relationships, sex, PTSD, depression, social</li>
          <li> anxiety, or even just caring for yourself more.</li>
    </ul>
      </div>
     <div className={css.titleEnd}>WE CAN HELP YOU WITH</div>
      {/* 4-block */}
       <div className={css.fourBlock}>
    {
        data.map((el, id) => {
           return <HelpCard
           bg={el.bg}
           title={el.title}
           key={id}
           />
         })
         }
       </div>
       <div style={{height:120 }}></div>
      {/* 5-block */}
      <div className={css.fiveBlock}>
         {
          data2.map((el,id) => {
            return <HelpCardTwo
            bg={el.bg}
            title={el.title}
            key={id}
            />
          })
         }
      </div>
      {/* 6-block */}
      <div className={css.sixBlock} >
        {
          data3.map((el, id) => {
            return <HelpCardTree 
            h3={el.h3}
            title={el.title}
            key={id}
            />
          })
        }
      </div>
      {/* 7-block */}
       <div style={{display:'flex', background:'#fff', marginTop:60}}>
          <img src={img3}/>
          <div className={css.sevenBlock}>
          <p className={css.topTitle}>YOU SHOULD ALSO KNOW</p>
          <h1 className={css.centerTitle}>MDD affects more than 16.1 million
             American adults, or about 6.7%of the U.S. 
             population age 18 and older in a given year.
            We at <span>ThriveTalk</span> can help you.</h1>
            <p className={css.endTitle}>GET HELP NOW</p>
       </div>
       </div>
       {/* 8-block */}
       <div className={css.eightBlock}>
         <div className={css.titleEightBlock}>
            <p>CONTACT US</p>
            <h1>Ready. Set. Smile</h1>
            <h2>Take the free online assessment to
               see if you are a candidate and get
                started on your journey.</h2>
            <div>GET HELP NOW</div>
         </div>
           <img src={img4}/>
       </div>
       {/* 9-block */}
       <div className={css.nineBlock} >
          <img src={img5}/>
          {
            data4.map((el,id) => {
              return <HelpCardFour
               h2={el.h2}
               title={el.title}
               title2={el.title2}
               key={id}
              />
            })
          }
        </div>
        <div className={css.endBlock}>
            <p>© Copyright - ThriveTalk  2017</p>
        </div>
  </div>
    )
}
export {Card}