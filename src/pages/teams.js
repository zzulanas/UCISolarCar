import React from 'react'
import TeamMember from '../components/teammember'

import SEO from '../components/seo'
import gilberto from '../../static/Members/Gilbert/gilberto.jpg'
import thomas from '../../static/Members/Thomas/thomas.jpg'
import albert from '../../static/Members/Albert/Albert.png'
import bchan from '../../static/Members/BrandonChan/BrandonCHan.jpg'
import emanuel from '../../static/Members/Emanuel/emanuel.jpg'
import jigar from '../../static/Members/jigar/jigar1.jpg'
import paulo from '../../static/Members/Paulo/paulogarci.jpg'

/*
TODO
Make images load faster with graphql and gatsby <Img/>
OR
Host all images outside of the website
*/

const Teams = () => (
  <>
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
              name="Subin Shrestha"
              description="Project Manager and Operations Lead"
              userlink="https://www.linkedin.com/in/trayshres"
              useremail="tshresth@uci.edu"
              userig="https://www.instagram.com/trailokyasshrestha/"
              imglink="https://bit.ly/33DyldH"
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
              imglink="https://lh3.googleusercontent.com/0bU7fvtOI4mWM17h_oIKoAolqFRFOQTf0EBX-jVMcXz87i8ffejuyNOOwefmno6M_9NLokhxnVLzYSnrFV1GN6lPV5jmQZqt7VAsjMca4D3c8jCPLn7s73YH4_UdegdB3LU_58b9KyLk8g5r-YDT8Degdg9kOv9A7soTIBWk8DtG1wKYUumBJZfT7_iEdIfrW4OT09OXPz4ZnfwcbJKR6TeHNwBKrWRzrcsheZwfW6GxOoPyU9aA9bdtVLEIMmkm_A14rwrqx65xvqqx2GkYKZ46RvVFzhlQV1sfxiKwyS6LLWV4kaFrFY1yiAzc18woFaQ67kH5HDdIDLCURE3_Fom48-ao2igX4sFnS9Sl3QbOE8Alvk6EP4w3MpHAd_AnwCojgUtXb2-ENPtUdGg1vUD4tVhjY6VywuDuZKtvMSf-IZC4PtjI7O8miR4dXCmOg0pYl2utoLx4ZkZwuz0f4SiFjp5WdjDIKIfCVG2db9wwFTXtdMcwr-2x5Nzz4ec00pxXGD0xbFDbdaEuSYRarULMFClnLZ4btCN-urKUJgulSJIkN2LpMBkP1U_gLdhyJpSOUlhSxMqwkBn4LyyN52dPS7LSN-c_DMKwUsRjNpunHmGXp5YF9FOMv6YVE2TMCKJIVoXD2D9H6SYRLGKskfTbTK2B-wVQgHJx1Kwj1ZsohWaOgVUeUMp365pV74k8SIKKcVKp0Eaedqk7zrMJ9xY=w994-h739-no"
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
              imglink="https://lh3.googleusercontent.com/5my-Qu6HNM4PpBzB0URDFxmHFmbbVZXgkx7SZK4-SHPal5GkAoX1BWFRyJZNN_RW6oYe0u8ZbQA5QXlKuCuRj2aF-R6vHT78ikAW7LGtlpbcESr7KqUo6V-4S4_IvWunv2ggpVc4jyRd5jIlSDvCoFqVz0ywNuCqTsZqKN_mpcy0OVpmLudycMQ4HiSQPCuvJLDmWDJX8TIXMlJFpah6RA2DSN9e3ph_B1yafGUsKHoWIc6pW_UDzPQsNdTCm2rhbkUlK-C2OYhukFKbEk1Nkmh8RlzEY_8dzfUvZ2_wdRtSEXZGr7iDHacXpVMa0WfIGKa5zvGpZqSTidZlKGg_S-f7JqlnmqgtdBI_qHzeFLwtWBAviZTjeqaB866Gw4TeLWzuTnz1y1mUslu8IHHUMeJJQRMtEgzwbxdkk05UaBSZgrHEnm6kEuJ7XCEKv6jHj3OZeuVG3PupAUhRopNnUHyDVmPUyLEFVjENuvKL4TPKOYHLuKrcGKAtf3SebTYwwMv8wqdbJxDOZMDi-iPdes6q4EHeQjgqhNRdUH8fCpN6xfM8wB6r7WYx0S-Bb7mcv7yx6hK0wuEo8Z8kA6QZur4eOLX_A138JI4ErjAZnoCTAIeF1d_Xv2LGxufRhtPqPCFtGRXuaXL31DJvxAxZpDedE-3Mwj93mtjJLKTrpAeJWeEybO_sLxHM0xIj2n8bhLb2M3NFgEOZFnPShOnW4Vfz=w708-h944-no"
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
              imglink="https://lh3.googleusercontent.com/-QWrOjfn2laRw959047ln6T8BRh2iGAy2SMjh6WfQVDUt4tj15IgWr3rH51Cv_ugH2W3BrOd8xAvPhfjvVItCGBxFAJ42TmW1Sg9x0nNdBN9W8te1YzlV6KHnPnpftjtqlL0ZB4QNvHFvKIbVDwWm4YKjdSjsj2L265Gu3dJLshB7JEwMVitrRnaGRnQGVCG9Qqsh0eREVE7i-YfkXjFJGZv2Cdrh5ZBFF3bsm2deCSvh5XjPEFW76JiF7r86TMXQWl3uu-x1F5QZjil-jNkqiZ8HHg0Z6pCbjGJ46tbEF2Fz4oqMG8ZZVR96v19mRhD882ZebartiDUXEUdFWmmP4LwcSguI35wPo16gE6CIFvVdmsgnuU1uZI5iGkXW-t6qG0sGByVaX7cIkB9-InelqOozfBm0PA5663T8ZDMW3l0nXanxtqAtRW-LzjXRmLPHW12FFXR7Z_0vCHnyQaCGfBQMOqfL-p2rTMTWUivtv2nkT2JR7DpTXbYihOTctaNwVddu4XKj1fbx7OPnD5mnjawcdw7SCu5zzfbXRfUzoZXWyusgdEYIjxEE9jXnIGFXMTee-i0lRuLQZK6UV0ibd4wFKDdLq9VbmalYOZUdK52-KnT8KgL8UBlbVSFiAwsPDLVrbvIzK8bkHiSNb_2iUq6BWCcYSPA7jPvWtvUHv_NM5vxvRVEy_agc9uEi96OJkZgUYqpotYLMmXg6gvg9DU=w340-h539-no"
            />
          </div>
          <div className="column">
            <h1 className="title is-3 has-text-centered">Mechanical</h1>
            <TeamMember
              name="Thomas Slagle"
              description="Mechanical Lead"
              userlink="https://www.linkedin.com/in/thomasslagle99/"
              blurb="My beard is red but my hair isn't"
              userig="https://www.instagram.com/slagletommy/"
              useremail="tslagle@uci.edu"
              imglink={thomas}
            />
            <TeamMember
              name="Paulo Garcia"
              description="Manufacturing Team"
              userlink=""
              imglink={paulo}
            />
            <TeamMember
              name="Brandon Chan"
              description="Aerodynamics Lead"
              imglink={bchan}
              userig="https://www.instagram.com/b_chanchilla/"
              userlink="https://www.linkedin.com/in/brandonchan77"
              useremail="chanbw1@uci.edu"
              blurb="Water is in fact wet. Change my mind."
            />
            <TeamMember
              name="Drake Baldwin"
              description="Manufacturing Team"
              userlink=""
              userig=""
              useremail=""
              imglink="https://lh3.googleusercontent.com/gxrM_or5h9AWuFfSdeDn6y1JJ0eT8ur7TLj_f3dRrW2EYlhay2Hyb5Lv5vOulFKvrwjgMW4e9nl3MfTGsYnFbpDi9aznMvDB0IuWDyGJfWtSglOH0XV994etU0G2DSScIPgOvajjHxS1hc0riLLakxBfhmBhGgj6wSMpqFFzBmMOx_-Sha1M8c4a8ugapWe7aTd5Uou1hbfD4199gFB6MqkMR3XQiQ2LHOw_wJnKSE0QJ2FXBYuzBZzU31SyiA3EJCL03DX0CMaMZaC1aSCt_FxHu5lopG0h3nQfXpPe7BNhinIrMe-lfI_qVGYImB-zZTTiXHMf6eKBp--N-1O_LSm8dAtAVWx2sIcSJXKs3sh3b9d-yxUM_FJAJfa1fdT254xUX76f-opJxRitin2B94JTrmh1-maBJ5e7KaKsTbcs4KrPhFhIc4U7JyM2eL0rxfBpX2-NuVsx8bgg8aSjgs--qq-NqKtn4WTy1WQ08-uKtO3osYwUnnQblXN7cLWcZDC_gh_lLk6ffBPQhpDSU1-fnzmlBajisOubXiT6gqh4NDkKM3oTTHoT_NK1mdNew87AdHEuI9JzO2dXWbluDP43epxAdDfy9mG_Ox1tIlqLjMUwwom9hHpYgYjkv_SjdBeSOoFWfelGHHSH1-JxC8GeZE3MkdI99qHO3MV7wXTNvdAYyi9IyXcFt1Df62BnEw0ToYIN6iXDcnK9p6e9p3A=w562-h570-no"
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
              imglink="https://lh3.googleusercontent.com/tDbs4UFY8_2c-yTvw9KRWtqFjXUrv-51oumIMPvTfLmiy3cmCjtGjKbhqjIMxHnhF4jQjJJXvHMaqrT_B4RZgvpjIQS84J_TL3OxC20zYw6KGGgXrnUt_VZSYwAR6unp2yWoqm-6Ng3x727LqZusAv0Q9aKQa1bq5UPEGeyaYa-u6uRMmWsSt_9qSPXfDz94mBC8c9LPQPdyfVExP4iGtaM7Zm32qJsuRGcyvsy_CqHXgsdyvgCcEPx7UAykzYV8sxl6XZtY2yFPPN2WuV1J1fe_oAxifGqWUqgmPVPVc2_D6gdxkXwrMgp0w783IDc2Gct9_kqSnlDsTYIrrhBgoCLnepGig0i1QxrJmiea576FYJuO1Un_XB2Vmray9QGCZtCySp6OAEPCdS_eQRBpxl82bOqz6Pk7jP4_P0ub1fNADCAB10tg7xyG6MO4ozgR2dKBRnHmVs8Qxa9FDr6fOfpGFvqqGTeVaXAoVEzPwOHP5vnV35IoMRJq-vbmmwgxxkOB7SiqA6EkG2GnUSvtYZAUVmqvJduGEk_P4iPGkTNkw70KLU_5TAVQBWoF2F7Kgcvhi7HRfzokP4ri058_fQlp0CEjb5pzOxB_ckI6dPQs9CTnEuS3YnBs-FD7h9DKoyhW7zYrRJdPqXcF7m8iIqWiZfDJT0-KsxCjz4yBZg8qayXlufXc-PgzKK62V39Um6SEnXYrtAElH_vvxfQ7bIw=w708-h944-no"
              blurb="Dragonboat 🛶"
            />
            <TeamMember
              name="Rahul Patel"
              description="Suspension Lead"
              userlink="https://www.linkedin.com/in/rpatel528/"
              userig="https://www.instagram/com/Rpatel528"
              useremail=""
              imglink="https://lh3.googleusercontent.com/CcKtPdUxIV6s1ggCm-Tbps55VHXHXAGP8Lb5uJTDLPQrHTJKxSbVDnzRkz1_Rf1FwRdoxYkK76YYvOdLG55Q-jx91vvK36OZCWgtCoazGayu1vo-gniIbUXXXYXp4AV_YNBILI883MmmPpKS8zPDhBzc5hSSv3dNWNwCRofZ53jaSJBl8XM6y839EBRMW_RP5eE4GCUD_ILzXcFxLL_0EVS3by5wHNokHI3zP39ybS4ke9jrrsCqHLmdOjIZ6raFOUjs8gvW8UJBhKhnKylHAQ8x4QGdFuhKbZClduSUdNWvAy74oamCQWtZWzIBj7facJeS-M6uOmpxik2xapeRZBmlmlbAPdHWxhnkyPcsm53C44K1CBqQp06a2UKwTqVaREnYR0VuOqOR5uZtVJhtb0WzCwG7RG3uJv4v24lxRCoDpLSfILRgOKCAsfUe45jgbKz16Fb4cQM1YrdRWrl_ckt0-qpJMqotVFYy3xQH0CnDz1HlyrHLBhNOVGDSneqJEaKls2HyA06yR6tTA8LSBywWeY-EY23-daQjLE2urx-R7WVkwfcXGkXFl8sVilffNceUIFdjE24hq7b4n-kCwMGFRAg6bCW1DREp1HGjlPC8CEHPZXx0nLiK2Putmv21yrKUs5XZ-CbeBGDPR3j8MLR-AyR0gDRlON6pHjRdXAGW9FaUFXvuAAJEEAd0XijyJgQ27wbiK_l0Fgd7PlBmlfJx=w630-h944-no"
              blurb="I’ve never eaten a frozen pizza."
            />
            <TeamMember
              name="Aaron Villanueva"
              description="Human Interface Lead"
              userlink=""
              userig=""
              useremail=""
              blurb="I can improvise a jazz solo on the trumpet"
              imglink="https://lh3.googleusercontent.com/eIYXidPyMORMfGnkJLtfLnZzqos2zDPjNAwbigkIY3c9oLsbnitLhPonzMG09m7zvV3hMhGHhox6mGpHmgGbn69hW3QQysM8oggx9luFx1QkTkpWY3lIEWfxPPzwIbiQC_gZgrj14Q=w2400"
            />
          </div>
          <div className="column">
            <h1 className="title is-3 has-text-centered">Operations</h1>
            <TeamMember
              name="Keith Tran"
              description="Operations Team"
              userlink=""
              userig=""
              useremail=""
              /*blurb=""*/
              imglink="https://lh3.googleusercontent.com/HrLsfzDBNxBMmtEEpIKetKwy5L-IDir-XSrJZfXjVmnL2dohudTMHf1HZX4KR7PaaUF46qAEwycleW5EocvYeVyGNdc3sU3wX8XsG8agTTChH5sBjBBAv21JjP1H4D9OvRV5wspZtGs4YzWDotlglScpxm-CIF-2fQMtA9L_BQRGcVoJad9WW-0uEicBY8RhTe7QF76eG57NRjiHGediZt-3oc1XPLsuOwYwe6Sr3iBH8CVvVjwevseyQyCnJc5qpsdFORt150uhU9VaKQA8xN0knfhCuQMJcoU-yTzjftykVmq9HJr7tgprzztpv_PacnO3Naycd0ULijeyjF2r8-2IOUVs0JxnUWdYfzBaBRTr0oIqKIlGhtCf98QDFq1jaX447GVnJx1LC7uh3SmVLgMucyCjrM2xhXExNOifXKgWHExmEGPNb3bULgPDVdyL2k4GJ-0itleDf6iXaKriNcMXd_4Fdu23NovG2N8AGNV7FfGwRWhur9_hfSYETs-ohcqHj1AAGYZd4mcyAHCTRK90hs8TQHMy3RlROYtpkll9Fhmrfd8UtI5Ax6XaldxJcon9MMYRUaGusZ2c4N43AYugpSg_XiFtZbAuT-gGig8zfF-cUOU-huNjiqam0JSMKgxQhHKh8SXKd2PdZgpHJXVluUlkflBtSQu2QWiICWxSYVaNgIXgQ9l56QVu5SPNZqsSRvMzJrjvkA87D73lfFY=w1417-h944-no"
            />
            <TeamMember
              name="Colette Nguyen"
              description="Operations Team"
              userlink=""
              userig=""
              useremail=""
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
