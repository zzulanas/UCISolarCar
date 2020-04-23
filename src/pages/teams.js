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
              name="Thomas Slagle"
              description="Mechanical Lead"
              userlink="https://www.linkedin.com/in/thomasslagle99/"
              blurb="My beard is red but my hair isn't."
              useremail="tslagle@uci.edu"
              imglink="https://tinyurl.com/yjbzzn5f"
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Kelly Lue"
              description="Electrical Co-Lead"
              userlink="https://www.linkedin.com/in/kelly-lue-988447155"
              useremail="lueka@uci.edu"
              imglink="https://tinyurl.com/yeawn8uo"
              blurb="I can flick a frisbee better than I can throw a backhand."
            />
          </div>
          <div class="column is-one-third">
          <TeamMember
              name="Albert Lorenzana"
              description="Electrical Co-Lead"
              userlink="https://www.linkedin.com/in/albert-lorenzana-a0954b130"
              useremail="lorenza2@uci.edu"
              imglink="https://tinyurl.com/yg2oyge4"
              blurb="A biomedical engineering student interested in mechatronics, MEMS, sustainable energy, and machine learning. Enjoys playing guitar on his free time :)"
            />
          </div>
        </div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-third">
          <TeamMember
              name="Nathan Trudeau"
              description="Telemetry Team"
              userlink="https://www.linkedin.com/in/nathan-trudeau-571863187/"
              useremail="ntrudeau@uci.edu"
              imglink="https://tinyurl.com/yg7d4q47"
            />
            <TeamMember
              name="Benjamin Lam"
              description="Battery Lead"
              userlink="https://www.linkedin.com/in/benjamin-lam-70a80216b"
              useremail="bxlam@uci.edu"
              imglink="https://tinyurl.com/yd6km5ah"
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
              name="Andrew Brown"
              description="Solar Array Lead"
              useremail="andreb1@uci.edu"
              userlink="http://www.linkedin.com/in/andreb1"
              imglink="https://tinyurl.com/yflaw7wo"
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
              name="Christian Mast"
              description="Motor Lead"
              userlink="https://www.linkedin.com/in/mst1010"
              useremail="cmast@uci.edu"
              imglink="https://tinyurl.com/yz8f3u5u"
              blurb="Catch me playing and watching soccer in my free time!"
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
              imglink="https://tinyurl.com/yczlau2x"
            />
            <TeamMember
              name="Henry Gip"
              description="Telemetry Team"
              userlink="https://www.linkedin.com/in/henry--gip/"
              useremail="hgip@uci.edu"
              imglink="https://tinyurl.com/y7trfyrj"
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="Andres Cervantes"
              description="Low-Voltage Team"
              userlink="https://www.linkedin.com/in/andres-cervantes-2ba1801a3/"
              useremail="andresc6@uci.edu"
              imglink="https://tinyurl.com/ydgxc578"
            />
            <TeamMember
              name="Alexis Infante"
              description="Solar Team"
              userlink=""
              useremail="asinfant@uci.edu"
              imglink=""
            />
          </div>
          <div class="column is-one-third">
            <TeamMember
              name="April Soares"
              description="Motor Team"
              userlink="https://uci.joinhandshake.com/users/6449824"
              useremail="aprilns@uci.edu"
              imglink="https://tinyurl.com/y89g8ql5"
            />
            <TeamMember
              name="Amanda Tan"
              description="Solar/High Voltage Team"
              userlink="https://www.linkedin.com/in/amanda-tan-3a3bb9172/"
              useremail="amandajt@uci.edu"
              imglink="https://tinyurl.com/ybzjwkst"
            />
          </div>
        </div>
        <br></br>
        <h1 className="title is-1 has-text-centered">Mechanical</h1>
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-third">
            <TeamMember
              name="Matthew Stewart"
              description="Suspension Team"
              useremail="mtstewar@uci.edu"
              userlink="https://www.linkedin.com/in/matthew-stewart68"
              imglink="https://tinyurl.com/y7j2nd2r"
            />
            <TeamMember
              name="Jason Lin"
              description="Suspension Team"
              userlink=""
              useremail="jasol28@uci.edu"
              imglink=""
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
            <TeamMember
              name="Kevin Dang"
              description="Human Interface Team"
              userlink="https://www.linkedin.com/in/kevindang223/"
              useremail="dangkh1@uci.edu"
              imglink="https://tinyurl.com/y7gn9lmr"
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
