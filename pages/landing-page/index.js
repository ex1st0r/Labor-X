import { Link, Carousel, Button } from 'components/common'
import { LoginOptions } from 'components/Login'
import withRedux from 'next-redux-wrapper'
import React from 'react'
import initialStore from 'store'
import { bootstrap } from 'store/bootstrap'
import 'styles/globals/globals.scss'
import css from './index.scss'

class Index extends React.Component {
  static getInitialProps ({ store }) {
    store.dispatch(bootstrap())
  }
  
  constructor (){
    super()
    
    this.state = {
      activeIndex: 0,
    }
  }
  
  goToNextSlide (){
    this.setState({ activeIndex: this.state.activeIndex })
  }
  
  render () {
    return (
      <div className={css.root}>
        <div className={css.navWrapper}>
          <Button
            label='New account'
            onClick={() => {}}
            className={css.createButton}
          />
          <Button
            label='Login'
            onClick={() => {}}
            className={css.loginButton}
          />
        </div>
        <div className={css.sliderContainer}>
          <div className={css.logo}>
            <Link href='/'>
              <img src='/static/images/laborx-promo-head.jpg' className={css.logoImg} />
            </Link>
          </div>
          <Carousel>
            <a href='/'>
              <img src='/static/images/laborx-promo-slider-01_together-tobetter-future.jpg' />
            </a>
            <a href='/'>
              <img src='/static/images/laborx-promo-slider-02_work.jpg' />
            </a>
            <a href='/'>
              <img src='/static/images/laborx-promo-slider-03_labor-hour.jpg' />
            </a>
          </Carousel>
        </div>
        <div className={css.benefitsBlock}>
          <h1 className={css.benefitsHeader}>Our Network Benefits</h1>
          <p className={css.benefitsText}>
            We took the most secure technology
            <br/>
            and have built this global, autonomous and versatile platform.
            <br/>
            We aim to make short-term employment as accessible and rewarding<br/>as long-term employment.
          </p>
        </div>
        <div className={css.advantageBlockWrapper}>
          <img className={css.advantageBlockImage} src='/static/images/laborx-promo-woman-watching-time-1.jpg' />
          <div className={css.advantageCounts}>
            <div className={css.advantageCountBlock}>
              <div className={css.advantageCountBlockHeader}>
                1,250 Recruiters
              </div>
              <div className={css.advantageCountBlockText}>
                are already using LaborX
              </div>
            </div>
            <div className={css.advantageCountBlock}>
              <div className={css.advantageCountBlockHeader}>
                USD 50,945
              </div>
              <div className={css.advantageCountBlockText}>
                earned by Recruiters in September 2018
              </div>
            </div>
          </div>
          <div className={css.advantageContent}>
            <div className={css.advantageTitle}>
              <span className={css.advantageTitleFirstWord}>for</span>
              Recruiters
            </div>
            <div className={css.advantageContentBlock}>
              <div className={css.advantageContentBlockTitle}>
                Earn
              </div>
              <div className={css.advantageContentBlockText}>
                Create and manage your Job Boards and get paid for your work.
              </div>
              <div className={css.advantageContentBlockTitle}>
                Save Time
              </div>
              <div className={css.advantageContentBlockText}>
                Our smart automated technologies will save your time removing<br/>
                big portion of paperwork and routines.
              </div>
              <div className={css.advantageContentBlockTitle}>
                Trust
              </div>
              <div className={css.advantageContentBlockText}>
                Get access to our reliable database of Workers and Clients<br/>
                verified by out professional team. LaborX is using an innovative<br/>
                technology and guarantees reliable contacts reputation.
              </div>
      
            </div>
          </div>
        </div>
        <div className={css.advantageBlockWrapper}>
          <img className={css.advantageBlockImage} src='/static/images/laborx-promo-hero-2.jpg' />
          <div className={css.advantageCounts}>
            <div className={css.advantageCountBlock}>
              <div className={css.advantageCountBlockHeader}>
                USD 8,000
              </div>
              <div className={css.advantageCountBlockText}>
                Earned by Workers in past 24h
              </div>
            </div>
            <div className={css.advantageCountBlock}>
              <div className={css.advantageCountBlockHeader}>
                5,001 Clients
              </div>
              <div className={css.advantageCountBlockText}>
                posted their jobs
        
              </div>
            </div>
          </div>
          <div className={css.advantageContent}>
            <div className={css.advantageTitle}>
              <span className={css.advantageTitleFirstWord}>for</span>
              Workers
            </div>
            <div className={css.advantageContentBlock}>
              <div className={css.advantageContentBlockTitle}>
                Payment
              </div>
              <div className={css.advantageContentBlockText}>
                Our automated digital contracts guarantees real-time payment. Your high skills, responsibility and rating can demand higher hourly fee.
              </div>
              <div className={css.advantageContentBlockTitle}>
                Inflation Resistance
              </div>
              <div className={css.advantageContentBlockText}>
                Our LaborHour digital currency is linked to 1 hour average earning in your location which keeps the currency stable.
              </div>
              <div className={css.advantageContentBlockTitle}>
                Scheduling
              </div>
              <div className={css.advantageContentBlockText}>
                LaborX is a fully automated solution with ability to track you time, view reports and plan your schedule.
              </div>
      
            </div>
          </div>
        </div>
        <div className={css.advantageBlockWrapper}>
          <img className={css.advantageBlockImage} src='/static/images/laborx-promo-client-3.jpg' />
          <div className={css.advantageCounts}>
            <div className={css.advantageCountBlock}>
              <div className={css.advantageCountBlockHeader}>
                10,250 Workers
              </div>
              <div className={css.advantageCountBlockText}>
                are already using LaborX
              </div>
            </div>
            <div className={css.advantageCountBlock}>
              <div className={css.advantageCountBlockHeader}>
                1,450 Jobs
              </div>
              <div className={css.advantageCountBlockText}>
                had been done in September 2018
              </div>
            </div>
          </div>
          <div className={css.advantageContent}>
            <div className={css.advantageTitle}>
              <span className={css.advantageTitleFirstWord}>for</span>
              Clients
            </div>
            <div className={css.advantageContentBlock}>
              <div className={css.advantageContentBlockTitle}>
                Spend Less
              </div>
              <div className={css.advantageContentBlockText}>
                Our solution allows us to reduce recruitment fees compared with traditional recruitment industry.
              </div>
              <div className={css.advantageContentBlockTitle}>
                Get Your Job Done
              </div>
              <div className={css.advantageContentBlockText}>
                Public Worker Rating System is reliable and contains real people profiles, histories and ratings which make your choice easier.
              </div>
              <div className={css.advantageContentBlockTitle}>
                Access Immediate
              </div>
              <div className={css.advantageContentBlockText}>
                Our solution is fast, reliable, secure, and permanently available. The ability to pay with a variety of digital tokens makes the system universal and not tied to any particular country or region.
              </div>
      
            </div>
          </div>
        </div>
        <div className={css.footer}>
          <div className={css.footerLogo}>
              <img src='/static/images/labor-x-logo.svg' />
          </div>
          <div className={css.footerMenu}>
            <ul>
              <li><a href='/'>LaborX Whitepaper</a></li>
              <li><a href='/'>Chronobank Whitepaper</a></li>
              <li><a href='/'>Q&A</a></li>
              <li><a href='/'>Privacy Policy</a></li>
              <li><a href='/'>Terms of Use</a></li>
            </ul>
          </div>
          <div className={css.footerCopyright}>© 2018 LaborX</div>
        </div>
      </div>
    )
  }
}

export default withRedux(initialStore)(Index)