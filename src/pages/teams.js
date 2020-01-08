import React from 'react'
import TeamMember from '../components/teammember'

import SEO from '../components/seo'

/*
TODO
Make columns within 3 rows, one for each team
*/

const Teams = () => (
  <>
    <SEO title="Our Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <section className="section">
      <div className="container">
      <h1 className="title is-1 has-text-centered">Leadership</h1>
        <div className="columns">
          <div className="column" />
           <div className="column">
            <TeamMember
              name="Subin Shrestha"
              description="Project Manager"
              userlink="https://www.linkedin.com/in/trayshres"
              useremail="tshresth@uci.edu"
              imglink="https://bit.ly/33DyldH"
            /> 
          </div> 
          <div className="column" />
        </div>
        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-one-third">
            <TeamMember
              name="Gilberto Garcia"
              description="Electrical Lead"
              userlink="https://www.linkedin.com/in/gilberto-garcia-56aa7513a?trk=pub-pbmap"
              useremail="gilbermg@uci.edu"
              imglink="https://tinyurl.com/yz9zsksk"
              blurb="Leg day is my favorite gym day."
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Thomas Slagle"
              description="Mechanical Lead"
              userlink="https://www.linkedin.com/in/thomasslagle99/"
              blurb="My beard is red but my hair isn't."
              useremail="tslagle@uci.edu"
              imglink="https://tinyurl.com/yjbzzn5f"
            />
          </div>
        </div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-third">
            <TeamMember
              name="Keiser Ruiz"
              description="Telemetry Lead"
              userlink="https://www.linkedin.com/in/keiser-ruiz"
              useremail="ruizkf@uci.edu"
              imglink=""
            />
            <TeamMember
              name="Benjamin Lam"
              description="Battery Lead"
              userlink="https://www.linkedin.com/in/benjamin-lam-70a80216b"
              useremail="bxlam@uci.edu"
              imglink=""
            />
            <TeamMember
              name="Rahul Patel"
              description="Suspension Lead"
              userlink="https://www.linkedin.com/in/rpatel528/"
              useremail="rahulup@uci.edu"
              imglink="https://tinyurl.com/yeg67rjk"
              blurb="I’ve never eaten a frozen pizza."
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Samin Riazi"
              description="Solar Array Lead"
              useremail="riazis@uci.edu"
              userlink="https://www.linkedin.com/in/samin-riazi-abb780179"
              imglink="https://tinyurl.com/ygycuanh"
            />
            <TeamMember
              name="Brandon Chan"
              description="Aerodynamics Lead"
              imglink="https://tinyurl.com/yjw9qvny"
              userlink="https://www.linkedin.com/in/brandonchan77"
              useremail="chanbw1@uci.edu"
              blurb="Water is in fact wet. Change my mind."
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Kevin Kuntjoro"
              description="Motor Lead"
              userlink="https://www.linkedin.com/in/kevinkuntjoro"
              useremail="kkuntjor@uci.edu"
              imglink=""
            /> 
            <TeamMember
              name="Aaron Villanueva"
              description="Human Interface Lead"
              userlink="https://www.linkedin.com/in/manuel-aaron-villanueva-0346b1167"
              useremail="villanm2@uci.edu"
              blurb="I can improvise a jazz solo on the trumpet."
              imglink="https://tinyurl.com/yk5eddgs"
            />
          </div>
        </div>
        <br></br>
        <h1 className="title is-1 has-text-centered">Electrical</h1>
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-third">
            <TeamMember
              name="Jigar Hira"
              description="Battery Team"
              userlink="https://www.linkedin.com/in/jigarhira"
              useremail="hiraj@uci.edu"
              imglink="https://tinyurl.com/yf2yo5wu"
            />
            <TeamMember
              name="Nathan Trudeau"
              description="Telemetry Team"
              userlink="https://www.linkedin.com/in/nathan-trudeau-571863187/"
              useremail="ntrudeau@uci.edu"
              imglink="https://tinyurl.com/yg7d4q47"
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Albert Lorenzana"
              description="Battery Team"
              userlink="https://www.linkedin.com/in/albert-lorenzana-a0954b130"
              useremail="lorenza2@uci.edu"
              imglink="https://tinyurl.com/yg2oyge4"
              blurb="A biomedical engineering student interested in mechatronics, MEMS, sustainable energy, and machine learning. Enjoys playing guitar on his free time :)"
            />
            <TeamMember
              name="Christian Mast"
              description="Motor Team"
              userlink="https://www.linkedin.com/in/mst1010"
              useremail="cmast@uci.edu"
              imglink="https://tinyurl.com/yz8f3u5u"
              blurb="Catch me playing and watching soccer in my free time!"
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Andrew Brown"
              description="Solar Array Team"
              useremail="andreb1@uci.edu"
              userlink="http://www.linkedin.com/in/andreb1"
              imglink="https://tinyurl.com/yflaw7wo"
            />
            <TeamMember
              name="Kelly Lue"
              description="Solar Array Team"
              userlink="https://www.linkedin.com/in/kelly-lue-988447155"
              useremail="lueka@uci.edu"
              imglink="https://tinyurl.com/yeawn8uo"
              blurb="I can flick a frisbee better than I can throw a backhand."
            />
          </div>
        </div>
        <br></br>
        <h1 className="title is-1 has-text-centered">Mechanical</h1>
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-third">
            <TeamMember
              name="Paulo Garcia"
              description="Manufacturing Team"
              useremail="paulocg@uci.edu"
              userlink="https://www.linkedin.com/in/paulo-garcia-2448b0196"
              imglink="https://tinyurl.com/yfwstxod"
            />
            <TeamMember
              name="Drake Baldwin"
              description="Manufacturing Team"
              userlink="https://www.linkedin.com/in/drake-baldwin-20a739a6"
              useremail="ddbaldwi@uci.edu"
              imglink="https://tinyurl.com/yffuusad"
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Nicole Alvarez"
              description="Aerodynamics Team"
              userlink="http://linkedin.com/in/nicole-martinne-alvarez"
              useremail="nmalvar1@uci.edu"
              imglink="https://tinyurl.com/yzn7omb4"
              blurb="Volunteered in Marine Mammal Care Center for 7 months where I got to work with seals!"
            />
            <TeamMember
              name="Edwin Christhuraj"
              description="Aerodynamics Team"
              userlink="https://www.linkedin.com/mwlite/me"
              useremail="echristh@uci.edu"
              imglink="https://tinyurl.com/yfbap952"
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Asem Alkhatib"
              description="Chassis Team"
              userlink="https://www.linkedin.com/in/mohammad-asem-alkhatib"
              useremail="malkhat1@uci.edu"
              imglink="https://tinyurl.com/yjfspf43"
            />
          </div>
        </div>
        <br></br>
        <h1 className="title is-1 has-text-centered">Operations</h1>
        <div class="columns is-multiline is-mobile">
          <div className="column is-one-third">
            <TeamMember
              name="Colette Nguyen"
              description="Operations Team"
              userlink="https://www.linkedin.com/in/colette-nguyen-020966138"
              useremail="cwnguyen@uci.edu"
              /*blurb=""*/
              imglink=""
            />
          </div>
          </div>
        </div>
      </section>
  </>
)

export default Teams
