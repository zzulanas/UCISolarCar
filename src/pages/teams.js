import React from 'react'
import posed from 'react-pose'
import TeamMember from '../components/teammember'

import Layout from '../components/layout'
import SEO from '../components/seo'
import gilberto from '../../static/Members/Gilbert/gilberto.jpg'
import thomas from '../../static/Members/Thomas/thomas.jpg'
import aaron from '../../static/Members/Aaron/aaron.jpg'
import albert from '../../static/Members/Albert/Albert.png'
import bchan from '../../static/Members/BrandonChan/Brandon Chan.jpg'
import bwong from '../../static/Members/BrandonWong/Brandon Wong.jpg'
import emanuel from '../../static/Members/Emanuel/emanuel.jpg'
import erin from  '../../static/Members/Erin/erin.jpg'
import karen from '../../static/Members/Karen/Karen.jpg'
import saing from '../../static/Members/Saing/Saing.jpg'
import jigar from '../../static/Members/jigar/jigar.jpg'
import paulo from '../../static/Members/Paulo/paulogarcia.jpg'
const Container = posed.div({
  enter: { staggerChildren: 50 },
})

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
})

const commit = "this change is poop"

const Teams = () => (
  <Layout>
    <SEO title="Our Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">Our Team</h1>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column" />
          <div className="column">
            <TeamMember
              name="Lizette Nguyen"
              description="Project Manager"
              userlink="https://www.linkedin.com/in/lizette-nguyen-537831126/"
              useremail="lizetten@uci.edu"
              userig="https://www.instagram.com/lize_ette"
              imglink="https://media.licdn.com/dms/image/C5603AQGcCVgVl6x24w/profile-displayphoto-shrink_800_800/0?e=1556150400&amp;v=beta&amp;t=9LIhdhno_wGQurAXkfaFOk03q7Dho8qb5H_t2mG4jk8"
            />
          </div>
          <div className="column" />
        </div>
        <div className="columns">
          <div className="column">
            <h1 className="title is-3 has-text-centered">Electrical</h1>
            <TeamMember
              name="Gilberto Garcia"
              description="Electrical Lead"
              imglink={gilberto}
              blurb="Leg day is my favorite gym day"
            />
            <TeamMember
              name="Jigar Hira"
              description="Battery Lead"
              imglink={jigar}
            />
            <TeamMember
              name="Albert Lorenzana"
              description="Battery Team"
              imglink={albert}
              blurb="A biomedical engineering student in the battery subteam interested in cutting edge technologies in mechatronics, MEMS, sustainable energy, and machine learning. Enjoys playing guitar on his free time :)"
            />
            <TeamMember
              name="Samin Riazi"
              description="Solar Array Lead"
              useremail="riazis@uci.edu"
              userig="https://www.instagram.com/_.ssri._"
              userlink="https://www.linkedin.com/in/samin-riazi-abb780179"
              imglink=""
            />
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
              imglink=""
              blurb="I can flick a frisbee better than I can throw a backhand"
            />
            <TeamMember
              name="Keiser Ruiz"
              description="Telemetry Lead"
              imglink=""
            />
            <TeamMember
              name="Tritai Nguyen"
              description="Telemetry Team"
              imglink=""
            />
            <TeamMember
              name="Wesley Bellin"
              description="Motor Lead"
              imglink=""
            />
          </div>
          <div className="column">
            <h1 className="title is-3 has-text-centered">Mechanical</h1>
            <TeamMember
              name="Thomas Slagle"
              description="Mechanical &amp; Suspension Lead"
              userlink="https://www.linkedin.com/in/thomasslagle99/"
              blurb="My beard is red but my hair isn't"
              userig="https://www.instagram.com/slagletommy/"
              useremail="tslagle@uci.edu"
              imglink={thomas}
            />
            <TeamMember
              name="Paulo Garcia"
              description="Aerodynamics Lead"
              userlink=""
              imglink={paulo}
            />
            <TeamMember
              name="Brandon Chan"
              description="Aerodynamics Team"
              imglink={bchan}
              userlink=""
              blurb="I’m Brandon Chan, Aerospace Engineer who digs model rockets"
            />
            <TeamMember
              name="Abudllah Jawhar"
              description="Aerodynamics Team"
              useremail="ajawhar@uci.edu"
              userlink="http://www.linkedin.com/in/abdullah-jawhar-4777a6172"
              userig="https://www.instagram.com/kb24jawhar"
              blurb="6 eggs for breakfast. Whole chicken for lunch. 20 oz salmon for dinner"
            />
            <TeamMember
              name="Drake Baldwin"
              description="Chassis Lead"
              userlink=""
              userig=""
              useremail=""
            />
            <TeamMember
              name="Emanuel Lopez"
              description="Chassis Team"
              userlink="https://www.linkedin.com/in/emanuel-lopez-2106b3159/"
              userig=""
              useremail=""
              blurb="Ambidextrous, finds creative/weird solutions to things, learned to weld at 10 years old"
              imglink={emanuel}
            />
            <TeamMember
              name="Asem Alkhatib"
              description="Chassis Team"
              userlink=""
              userig=""
              useremail=""
            />
            <TeamMember
              name="Tyler Wong"
              description="Suspension Team"
              userlink=""
              userig=""
              useremail=""
              blurb="Dragonboat 🛶"
            />
            <TeamMember
              name="Brandon Wong"
              description="Suspension Team"
              userlink=""
              userig=""
              useremail=""
              imglink={bwong}
              blurb="I am a second year Mechanical Engineer student from San Diego who enjoys swimming and hiking"
            />
            <TeamMember
              name="Rahul Patel"
              description="Suspension Team"
              userlink="https://www.linkedin.com/in/rpatel528/"
              userig="https://www.instagram/com/Rpatel528"
              useremail=""
              blurb="I’ve never eaten a frozen pizza."
            />
            <TeamMember
              name="Saingyou Eung"
              description="Suspension Team"
              userlink="https://www.linkedin.com/in/saingyou-eung-612ab1175/"
              userig="https://www.instagram.com/saing.e"
              useremail="seung@uci.edu"
              blurb="I can do a back flip. I'm also a good liar, but I enjoy telling the truth"
              imglink={saing}
            />
            <TeamMember
              name="Elena McConnell"
              description="Steering Lead"
              userlink="https://www.linkedin.com/in/elena-mc/"
            />
            <TeamMember
              name="Karen Roman"
              description="Steering Team"
              userlink=""
              userig=""
              useremail=""
              imglink={karen}
              blurb="I like to volunteer and Educate young girls in stem"
            />
            <TeamMember
              name="Kristopher Kuan"
              description="Human Interface Lead"
              userlink=""
              userig=""
              useremail=""
            />
            <TeamMember
              name="Erin Mahan"
              description="Human Interface Team"
              userlink=""
              userig=""
              useremail=""
              blurb="One of my dogs likes to be carried in my sweatshirt when we go on walks"
              imglink={erin}
            />
            <TeamMember
              name="Aaron Villanueva"
              description="Human Interface Team"
              userlink=""
              userig=""
              useremail=""
              blurb="I can improvise a jazz solo on the trumpet"
              imglink={aaron}
            />
          </div>
          <div className="column">
            <h1 className="title is-3 has-text-centered">Business</h1>
            <TeamMember
              name="Subin Shresta"
              description="Business Lead"
              blurb="My roommate be slaying"
              userig="https://www.instagram.com/trailokyasshrestha/"
              userlink="https://www.linkedin.com/in/trayshres"
              useremail="tshresth@uci.edu"
              imglink="https://media.licdn.com/dms/image/C5603AQGZiSydJTRKMg/profile-displayphoto-shrink_800_800/0?e=1556150400&amp;v=beta&amp;t=wtCThIqJCbhEeCrbvhP-KGobziv5DMDqGKPUGZRiPno"
            />
            <TeamMember name="Khai Nguyen" description="Business Team" />
            <TeamMember name="Keith Tran" description="Business Team" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Teams
