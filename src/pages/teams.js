import React from 'react'
import TeamMember from '../components/teammember'
import { graphql }  from 'gatsby'

import SEO from '../components/seo'
import gilberto from '../../static/Members/resized_members/gilberto.jpg'
import thomas from '../../static/Members/resized_members/thomas.jpg'
import aaron from '../../static/Members/resized_members/aaron.jpg'
import albert from '../../static/Members/resized_members/Albert.jpg'
import bchan from '../../static/Members/resized_members/BrandonCHan.jpg'
import bwong from '../../static/Members/resized_members/Brandon Wong.jpg'
import emanuel from '../../static/Members/resized_members/emanuel.jpg'
import erin from '../../static/Members/resized_members/erin.jpg'
import karen from '../../static/Members/resized_members/Karen.jpg'
import saing from '../../static/Members/resized_members/Saing.jpg'
import jigar from '../../static/Members/resized_members/jigar1.jpg'
import paulo from '../../static/Members/resized_members/paulogarci.jpg'
import lizette from '../../static/Members/resized_members/lizzette_n.jpg'
import samin from '../../static/Members/resized_members/samin.jpg'
import kelly from '../../static/Members/resized_members/kelly_l.jpg'
import tritai from '../../static/Members/resized_members/tritai_n.jpg'
import wesley from '../../static/Members/resized_members/wesley.jpg'
import drake from '../../static/Members/resized_members/drake_b.jpg'
import tylerw from '../../static/Members/resized_members/tyler_w.jpg'
import rahul from '../../static/Members/resized_members/rahul_p.jpg'
import elena from '../../static/Members/resized_members/elena_m.jpg'
import subin from '../../static/Members/resized_members/subin_s.jpg'
import khai from '../../static/Members/resized_members/khai_n.jpg'
import keith from '../../static/Members/resized_members/keith_t.jpg'

/*
TODO
Make images load faster with graphql and gatsby <Img/>
OR
Host all images outside of the website
*/
const teamStyles = {
  peopleContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  peopleItem: {
    "height": "350px",
    "flexBasis": "20%",
    "MsFlex": "auto",
    "position": "relative",
    "margin": "20px",
    "padding": "10px",
    "boxSizing": "border-box"
  }
}
const popUp = () => {

}
const Teams = ({data}) => (
  <>
    <SEO title="Our Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <section className="section">
      <div style={teamStyles.peopleContainer}>
        <h1 className="title is-1 has-text-centered">Our Team</h1>
      </div>
      <div style={teamStyles.peopleContainer}>
        <TeamMember style={teamStyles.peopleItem}
          name="Lizette Nguyen"
          description="Project Manager"
          userlink="https://www.linkedin.com/in/lizette-nguyen-537831126/"
          useremail="lizetten@uci.edu"
          userig="https://www.instagram.com/lize_ette"
          imglink={lizette}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Gilberto Garcia"
          description="Electrical Lead"
          imglink={gilberto}
          blurb="Leg day is my favorite gym day"
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Jigar Hira"
          description="Battery Lead"
          imglink={jigar}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Albert Lorenzana"
          description="Battery Team"
          imglink={albert}
          blurb="A biomedical engineering student in the battery subteam interested in cutting edge technologies in mechatronics, MEMS, sustainable energy, and machine learning. Enjoys playing guitar on his free time :)"
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Samin Riazi"
          description="Solar Array Lead"
          useremail="riazis@uci.edu"
          userig="https://www.instagram.com/_.ssri._"
          userlink="https://www.linkedin.com/in/samin-riazi-abb780179"
          imglink={samin}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Andrew Brown"
          description="Solar Array Team"
          useremail="andreb1@uci.edu"
          userlink="http://www.linkedin.com/in/andreb1"
          imglink=""
          blurb="I have made 2 fiberglass reinforced wooden kayaks and a wood ribbed canvas canoe!"
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Kelly Lue"
          description="Solar Array Team"
          imglink={kelly}
          blurb="I can flick a frisbee better than I can throw a backhand"
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Keiser Ruiz"
          description="Telemetry Lead"
          imglink=""
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Tritai Nguyen"
          description="Telemetry Team"
          imglink={tritai}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Wesley Bellin"
          description="Motor Lead"
          imglink={wesley}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Thomas Slagle"
          description="Mechanical &amp; Suspension Lead"
          userlink="https://www.linkedin.com/in/thomasslagle99/"
          blurb="My beard is red but my hair isn't"
          userig="https://www.instagram.com/slagletommy/"
          useremail="tslagle@uci.edu"
          imglink={thomas}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Paulo Garcia"
          description="Aerodynamics Lead"
          userlink=""
          imglink={paulo}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Brandon Chan"
          description="Aerodynamics Team"
          imglink={bchan}
          userig="https://www.instagram.com/b_chanchilla/"
          userlink="https://www.linkedin.com/in/brandonchan77"
          useremail="chanbw1@uci.edu"
          blurb="Water is in fact wet. Change my mind."
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Abudllah Jawhar"
          description="Aerodynamics Team"
          useremail="ajawhar@uci.edu"
          userlink="http://www.linkedin.com/in/abdullah-jawhar-4777a6172"
          userig="https://www.instagram.com/kb24jawhar"
          blurb="6 eggs for breakfast. Whole chicken for lunch. 20 oz salmon for dinner"
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Drake Baldwin"
          description="Chassis Lead"
          userlink=""
          userig=""
          useremail=""
          imglink={drake}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Emanuel Lopez"
          description="Chassis Team"
          userlink="https://www.linkedin.com/in/emanuel-lopez-2106b3159/"
          userig=""
          useremail=""
          blurb="Ambidextrous, finds creative/weird solutions to things, learned to weld at 10 years old"
          imglink={emanuel}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Asem Alkhatib"
          description="Chassis Team"
          userlink=""
          userig=""
          useremail=""
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Tyler Wong"
          description="Suspension Team"
          userlink=""
          userig=""
          useremail=""
          imglink={tylerw}
          blurb="Dragonboat 🛶"
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Brandon Wong"
          description="Suspension Team"
          userlink=""
          userig=""
          useremail=""
          imglink={bwong}
          blurb="I am a second year Mechanical Engineer student from San Diego who enjoys swimming and hiking"
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Rahul Patel"
          description="Suspension Team"
          userlink="https://www.linkedin.com/in/rpatel528/"
          userig="https://www.instagram/com/Rpatel528"
          useremail=""
          imglink={rahul}
          blurb="I’ve never eaten a frozen pizza."
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Saingyou Eung"
          description="Suspension Team"
          userlink="https://www.linkedin.com/in/saingyou-eung-612ab1175/"
          userig="https://www.instagram.com/saing.e"
          useremail="seung@uci.edu"
          blurb="I can do a back flip. I'm also a good liar, but I enjoy telling the truth"
          imglink={saing}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Elena McConnell"
          description="Steering Lead"
          userlink="https://www.linkedin.com/in/elena-mc/"
          imglink={elena}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Karen Roman"
          description="Steering Team"
          userlink=""
          userig=""
          useremail=""
          imglink={karen}
          blurb="I like to volunteer and Educate young girls in stem"
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Kristopher Kuan"
          description="Human Interface Lead"
          userlink=""
          userig=""
          useremail=""
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Erin Mahan"
          description="Human Interface Team"
          userlink=""
          userig=""
          useremail=""
          blurb="One of my dogs likes to be carried in my sweatshirt when we go on walks"
          imglink={erin}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Aaron Villanueva"
          description="Human Interface Team"
          userlink=""
          userig=""
          useremail=""
          blurb="I can improvise a jazz solo on the trumpet"
          imglink={aaron}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Subin Shresta"
          description="Business Lead"
          userig="https://www.instagram.com/trailokyasshrestha/"
          userlink="https://www.linkedin.com/in/trayshres"
          useremail="tshresth@uci.edu"
          imglink={subin}
        />
        <TeamMember style={teamStyles.peopleItem}
          name="Khai Nguyen"
          imglink={khai}
          description="Business Team"
        />

        <TeamMember style={teamStyles.peopleItem}
          name="Keith Tran"
          imglink={keith}
          description="Business Team"
        />
      </div>
    </section>
  </>
)

//GraphQL Queries for team images
export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fixed(width: 200, height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query TeamPageQuery{
    file(relativePath: { eq: "static/Members/Gilbert/gilberto.jpg" }) {
      ...squareImage
    }
  }
`

export default Teams
