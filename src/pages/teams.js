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
        <div className="columns">
          <div className="column" />
           <div className="column">
            <h1 className="title is-1 has-text-centered">Leadership</h1>
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
        <br></br>
        <h1 className="title is-1 has-text-centered">Electrical</h1>
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-third">
            <TeamMember
              name="Gilberto Garcia"
              description="Electrical Lead"
              userlink="https://www.linkedin.com/in/gilberto-garcia-56aa7513a?trk=pub-pbmap"
              useremail="gilbermg@uci.edu"
              imglink="https://tinyurl.com/yhvaxjbl"
              blurb="Leg day is my favorite gym day."
            />
            <TeamMember
              name="Jigar Hira"
              description="Battery Lead"
              userlink="https://www.linkedin.com/in/jigarhira"
              useremail="hiraj@uci.edu"
              imglink="https://tinyurl.com/yf2yo5wu"
            />
            <TeamMember
              name="Keiser Ruiz"
              description="Telemetry Lead"
              userlink="https://www.linkedin.com/in/keiser-ruiz"
              useremail="ruizkf@uci.edu"
              imglink=""
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
              name="Samin Riazi"
              description="Solar Array Lead"
              useremail="riazis@uci.edu"
              userlink="https://www.linkedin.com/in/samin-riazi-abb780179"
              imglink="https://tinyurl.com/ygycuanh"
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Andrew Brown"
              description="Solar Array Team"
              useremail="andreb1@uci.edu"
              userlink="http://www.linkedin.com/in/andreb1"
              imglink=""
              blurb="I have made 2 fiberglass reinforced wooden kayaks and a wood ribbed canvas canoe!"
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
              name="Thomas Slagle"
              description="Mechanical Lead"
              userlink="https://www.linkedin.com/in/thomasslagle99/"
              blurb="My beard is red but my hair isn't."
              useremail="tslagle@uci.edu"
              imglink="https://tinyurl.com/yjbzzn5f"
            />
            <TeamMember
              name="Paulo Garcia"
              description="Manufacturing Team"
              useremail="paulocg@uci.edu"
              userlink="https://www.linkedin.com/in/paulo-garcia-2448b0196"
              imglink="https://tinyurl.com/yfwstxod"
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
              name="Drake Baldwin"
              description="Manufacturing Team"
              userlink="https://www.linkedin.com/in/drake-baldwin-20a739a6"
              useremail="ddbaldwi@uci.edu"
              imglink="https://tinyurl.com/yffuusad"
            />
            <TeamMember
              name="Asem Alkhatib"
              description="Chassis Team"
              userlink="https://www.linkedin.com/in/mohammad-asem-alkhatib"
              useremail="malkhat1@uci.edu"
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Rahul Patel"
              description="Suspension Lead"
              userlink="https://www.linkedin.com/in/rpatel528/"
              useremail="rahulup@uci.edu"
              imglink="https://tinyurl.com/yeg67rjk"
              blurb="I’ve never eaten a frozen pizza."
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
        <h1 className="title is-1 has-text-centered">Operations</h1>
        <div class="columns is-multiline is-mobile">
          <div className="column is-half">
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
