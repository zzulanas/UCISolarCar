import React from 'react'
import posed from 'react-pose'
import TeamMember from '../components/teammember'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Container = posed.div({
  enter: { staggerChildren: 50 },
})

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 },
})

const Teams = () => (
  <Layout>
    <SEO title="Our Team" keywords={[`UCI`, `Solar`, `Car`]} />
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Our Team</h1>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
          </div>
          <div className="column">
          <TeamMember name="Lizette Nguyen" description="Project Manager" userlink="https://www.linkedin.com/in/lizette-nguyen-537831126/" usermail="lizetten@uci.edu" userig="https://www.instagram.com/lize_ette" imglink="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiYnL-azcHgAhVFpoMKHWGdCeUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.canstockphoto.com%2Fbusinessman-ready-to-commit-suicide-8557263.html&psig=AOvVaw07IRl1betGffoKnk3GlrQW&ust=1550452627863020" />
          </div>
          <div className="column">
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h1 className="title is-4 has-text-centered">Electrical</h1>
            <TeamMember name="Gilberto Garcia" description="Electrical Lead" imglink="" blurb="Leg day is my favorite gym day" />
            <TeamMember name="Jigar Hira" description="Battery Lead" imglink="" />
            <TeamMember name="Albert Lorenzana" description="Battery Team" imglink="" />
            <TeamMember name="Samin Riazi" description="Solar Array Lead" useremail="riazis@uci.edu" userig="https://www.instagram.com/_.ssri._" imglink="" />
            <TeamMember name="Andrew Brown" description="Solar Array Team" useremail="andreb1@uci.edu" userlink="http://www.linkedin.com/in/andreb1" imglink="" blurb="I have made 2 fiberglass reinforced wooden kayaks and a wood ribbed canvas canoe!"/>
            <TeamMember name="Kelly Lue" description="Solar Array Team" imglink="" blurb="I can flick a frisbee better than I can throw a backhand"/>
            <TeamMember name="Keiser Ruiz" description="Telemetry Lead" imglink="" />
            <TeamMember name="Tritai Nguyen" description="Telemetry Team" imglink="" />
            <TeamMember name="Wesley Bellin" description="Motor Lead" imglink="" />
          </div>
          <div className="column">
            <h1 className="title is-4 has-text-centered">Mechanical</h1>
            <TeamMember name="Thomas Slagle" description="Mechanical &amp; Suspension Lead" userlink="https://www.linkedin.com/in/thomasslagle99/" blurb="My beard is red but my hair isn't" userig="https://www.instagram.com/slagletommy/" useremail="tslagle@uci.edu"/>
            <TeamMember name="Paulo Garcia" description="Aerodynamics Lead" userlink="" />
            <TeamMember name="Brandon Chan" description="Aerodynamics Team" userlink="" blurb="Can beat anyone in a spicy ramen challenge" />
            <TeamMember name="Abudllah Jawhar" description="Aerodynamics Team" useremail="ajawhar@uci.edu" userlink="http://www.linkedin.com/in/abdullah-jawhar-4777a6172" userig="https://www.instagram.com/kb24jawhar" blurb="6 eggs for breakfast. Whole chicken for lunch. 20 oz salmon for dinner" />
            <TeamMember name="Drake Baldwin" description="Chassis Lead" userlink="" userig="" useremail=""/>
            <TeamMember name="Emanuel Lopez" description="Chassis Team" userlink="" userig="" useremail=""/>
            <TeamMember name="Asem Alkhatib" description="Chassis Team" userlink="" userig="" useremail=""/>
            <TeamMember name="Tyler Wong" description="Suspension Team" userlink="" userig="" useremail="" blurb="Dragonboat 🛶"/>
            <TeamMember name="Brandon Wong" description="Suspension Team" userlink="" userig="" useremail=""/>
            <TeamMember name="Rahul Patel" description="Suspension Team" userlink="https://www.linkedin.com/in/rpatel528/" userig="https://www.instagram/com/Rpatel528" useremail="" blurb="I’ve never eaten a frozen pizza."/>
            <TeamMember name="Saingyou Eung" description="Suspension Team" userlink="https://www.linkedin.com/in/saingyou-eung-612ab1175/" userig="" useremail="" blurb="I can do a back flip. I'm also a good liar, but I enjoy telling the truth"/>
            <TeamMember name="Elena McConnell" description="Steering Lead" userlink="https://www.linkedin.com/in/elena-mc/" userig="https://www.instagram.com/saing.e" useremail="seung@uci.edu"/>
            <TeamMember name="Karen Roman" description="Steering Team" userlink="" userig="" useremail=""/>
            <TeamMember name="Kristopher Kuan" description="Human Interface Lead" userlink="" userig="" useremail=""/>
            <TeamMember name="Erin Mahan" description="Human Interface Team" userlink="" userig="" useremail="" blurb="One of my dogs likes to be carried in my sweatshirt when we go on walks"/>
            <TeamMember name="Aaron Villanueva" description="Human Interface Team" userlink="" userig="" useremail=""/>
          </div>
          <div className="column">
          <h1 className="title is-4 has-text-centered">Business</h1>
            <TeamMember name="Subin Shresta" description="Business Lead" blurb="My roommate be slaying" userig="https://www.instagram.com/trailokyasshrestha/" userlink="https://www.linkedin.com/in/trayshres" useremail="tshresth@uci.edu"/>
            <TeamMember name="Khai Nguyen" description="Business Team"/>
            <TeamMember name="Keith Tran" description="Business Team"/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Teams
