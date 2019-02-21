import React from 'react'
import TeamMember from '../components/teammember'

import SEO from '../components/seo'
import gilberto from '../../static/Members/Gilbert/gilberto.jpg'
import thomas from '../../static/Members/Thomas/thomas.jpg'
import aaron from '../../static/Members/Aaron/aaron.jpg'
import albert from '../../static/Members/Albert/Albert.png'
import bchan from '../../static/Members/BrandonChan/Brandon Chan.jpg'
import bwong from '../../static/Members/BrandonWong/Brandon Wong.jpg'
import emanuel from '../../static/Members/Emanuel/emanuel.jpg'
import erin from '../../static/Members/Erin/erin.jpg'
import karen from '../../static/Members/Karen/Karen.jpg'
import saing from '../../static/Members/Saing/Saing.jpg'
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
              imglink="https://lh3.googleusercontent.com/-QWrOjfn2laRw959047ln6T8BRh2iGAy2SMjh6WfQVDUt4tj15IgWr3rH51Cv_ugH2W3BrOd8xAvPhfjvVItCGBxFAJ42TmW1Sg9x0nNdBN9W8te1YzlV6KHnPnpftjtqlL0ZB4QNvHFvKIbVDwWm4YKjdSjsj2L265Gu3dJLshB7JEwMVitrRnaGRnQGVCG9Qqsh0eREVE7i-YfkXjFJGZv2Cdrh5ZBFF3bsm2deCSvh5XjPEFW76JiF7r86TMXQWl3uu-x1F5QZjil-jNkqiZ8HHg0Z6pCbjGJ46tbEF2Fz4oqMG8ZZVR96v19mRhD882ZebartiDUXEUdFWmmP4LwcSguI35wPo16gE6CIFvVdmsgnuU1uZI5iGkXW-t6qG0sGByVaX7cIkB9-InelqOozfBm0PA5663T8ZDMW3l0nXanxtqAtRW-LzjXRmLPHW12FFXR7Z_0vCHnyQaCGfBQMOqfL-p2rTMTWUivtv2nkT2JR7DpTXbYihOTctaNwVddu4XKj1fbx7OPnD5mnjawcdw7SCu5zzfbXRfUzoZXWyusgdEYIjxEE9jXnIGFXMTee-i0lRuLQZK6UV0ibd4wFKDdLq9VbmalYOZUdK52-KnT8KgL8UBlbVSFiAwsPDLVrbvIzK8bkHiSNb_2iUq6BWCcYSPA7jPvWtvUHv_NM5vxvRVEy_agc9uEi96OJkZgUYqpotYLMmXg6gvg9DU=w340-h539-no"
            />
            <TeamMember
              name="Wesley Bellin"
              description="Motor Lead"
              imglink="https://lh3.googleusercontent.com/DO7whdldVhN30CNmLGiewZeeDhLqgMFeFUiMMXt2h7SZxP-eIDIEsshZZx4d-v8lE_2LPH8wOVVV8FzB2A-1UxXDICN9NqV0ETlRHM6-MzDeBPjKAMv--OoafDuGokOUhPdT0abSKuVkgynDK3BUfTlpuZt_MD4W02F4RzorfAxyk233g_QpD0GOTzPvsIAV3kU4HW1UzmK4LZKCE-VCnily-My6BbbIvWJFgMnEVyXmhizQ6tN0KCSw1gGNd-4Wxz9G1x_B8ZKXhMP8-dEXiiBPwYpodE3PKSpZKcyOiydveERQsK5pbwpcam3KceA8KLcq7P562w4D040yu5FNfAMaoiPWX7mhu_8elVjmc7Zl97QxPOc4pYun_MZB2NAr5b4bsHtl7XlleW5xXwEXZwuoTiuXajcegfLcQV6_vXuqcLYgDGhfuns8jPO6uyGk3gug984o0P-A7SZ6Dl5uWnxqmbJXLFFE22Sh8E2pg5jcSC63yk1xK8a4S1bNPt8mq6IAxqJzlfaNXoZo6Ovv3f-f8V-y1mJ_E08ZkL4pLQ9ZZkRTThBeRdlTEFottjfktMEaT6TJ_eJWo1Ntj6H02Oi6FveXhY_EnZcsquDv0boz0p4PCAPDP1YSts2NjSlTgbg2BzJzWau29p3-5bVjHlboRWJ5EDrGsmzrggJc7k0lMx6zUtE4hEcDny5GMTW51kcecefTMT3FXzjPxgO-4mc=w453-h550-no"
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
              imglink="https://lh3.googleusercontent.com/tuuUa2yIgxTKQCRSWgINJJ7Z-T3IQe_luoclPU0onRU9HAM9Y-1HAz4USRWhAKV9paVfkq0dS21TRCoUoOLvSmA7Zti0sNxn4DsWfBmlAxOnzDN7vXvcTA-LQUqVtiZv_0NW4ASZPJcqDb99O5aS8QjCj_aUpSMbtxkXTddlpUanb55ICIE_rX8spzTvX_CGmI1VWE9R8jXWL8WRM7xtHd8KsWWBa9eT3QvG1EF2BLhKPh87bynAcb5AcPi92aX2piWMCy3HQ5L14_6ipNfSfp5biv0DwrBWcecb_HkgDZBfi_CmiTX1s8bx4Id6Ca9tkaGqJ4ozkT71XbR9JnIJh_PS7RBoTTY_pJkDLR_BvtvgMnXIJtkoptOO3vS-7SIdOtquSHrzhSzZTHNR0LdfZIH_bgwWlMwknco9NcDMT2a3xzM6rWyA-lbm8yFqsN7hCXBVSlMqt-dotAifM17NO7rGjh0IBS9wsyZYh0xmt4mcIM4PdC7Mvt5v67-8R8AcQ_Tq2EaKJbXQHNXMWiGRl69tPa-bfVSQxAo9VAVlsdDlnvlxL3Q3wSzC3s-O_ib7YEMNNjp8whtuGGTvSH08JtkyWoRqKys4ePFPZk6BkCHChwdwYqDDyRmWmWVhkOEeff_4yK9cojdUqyKvT5_QCpkL7saex7BA82Nckb-1LDdwEPOm5U55K5Rw1Us6rS3JeiPIkJw8Z2giNtxKe_F5vO4=s806-no"
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
              imglink="https://lh3.googleusercontent.com/eAcP96YVWZ0SZroSgTELpjrbHCnxTAFTr1kFqlhxpxlw96eZM3EPIb1bjvkPg8DIKT8Edwd-zY2XABoBce-538OIYyAdhD9nRHmmpBTm56r1rNoGOuMr_osyxbUMZtsqn2X1PZgiGj5GynIDrMq7uIOOhfkIzM008snx2S0Bn04BilVkVujz7IboI-y_UPLb7FkDORcDKJWfvNaCzRpIE2fWVe0-alp_d5H6z4Zw98dwl0jVk7eyFpuxeTHXUJ42QfN8xf8bBtVJTv5SdETBo6oBB20suTkN2w1cs2CjZnEcVjcw0Z2ODAlr5Ip2T6Isugi2WU1Vk9tXX7a7py65tuDd0g8MBZntqHRMBqJB8qiLKrlllJ8tVBPgELe0s_eM_WS28sIG522XKjMzLbE5p3-gxh6vnA1VzF0Jql-ioqGkJo9g8LwyFuuX6PZLOwF4bIVQuKXDVkFXcc4q1nWsSF6DKtNgdjgKotQrcJxnjcWTJJ7gscPc42y4NIrRHhlHDHBgHMfD-DgDlVEj1ayC92NE9p-9dbmkW_h_74bmvdvZvlm3C66tj_ublKXVjYyQqxIHkE-C8YipXzvbXpwgssScLKgAZNCSP_QxR1eW8d82wF3sziA_2zx6seuSlwMa0xJYhTIAXHph50uCvV0hvFtiCgYA739n48QXKNDgn21Fu45myWH0AD06-u_wbf7fyJ_DfebRmv8on4N21VJgt9g=w563-h526-no"
            />
            <TeamMember
              name="Khai Nguyen"
              imglink="https://lh3.googleusercontent.com/1CPJ6s10H_GFO9BBjMzs0dfF6wgyzUAPP8SSDrYuNNlRW5PziOKaw4XXntqUsxUAJJv-B5SfQ94iQfli3K6ejAjBX8iw_OZ1Q5Bkd83GD-ra4i9a7yTa9P6kzBUeDPPrgbplRUcaY7Bkrr5P_eTdc4dYXsmRcJqJfJFbIuLm8mCIW1qalLHj9tsWxqpYqbYqeWoskpFzfFDd1WvK8DCrGPqN9xqxYL_-6tJ3t4MEIVCHJym07WGFGbBgl6AZY_NRtiv64HtMOd8xDVwbIli5yVEGSIc9VVrrDJVhcUv-g0QOvrTufit0utmGy6JGKUZGOp5p2PU__wEq-c_ydEGUA_X69UJFkz3DBiUhKp30q0xw7LEbvFPW2rk9Us0vfwm7KGyLh2_L-FZ7EK5iV2OLnJlaC-zI-vbtS1vTKBNm4M9kK9oTqSjiQQ5Z3Nj7r2G2YViXJRodFhfoxkJMCQgKCIzQHgovOTiXskHJH3htSicZjimgvCKXaSyzoMvtzniqdK_tl0_mSOJ2zTD5b9qV8aVxRiuf9-jrZT3b3gdiPn8I1WdlzCQ6LhcUeUABygP91QmzwXqPi8U36Foek1dsfbzbYilW8oUW1ZFHhXmTOb11W6azqfe2-NEyNpuAihX_veo09EKL2gekja-UjlmPhQiqihXTABKpqR5xoA44x-6iWJXWVktZ7TCsfDXW4p6jtDKdT_UNtJFpkVkD96MuSDc=w363-h518-no"
              description="Business Team"
            />
            <TeamMember
              name="Keith Tran"
              imglink="https://lh3.googleusercontent.com/HrLsfzDBNxBMmtEEpIKetKwy5L-IDir-XSrJZfXjVmnL2dohudTMHf1HZX4KR7PaaUF46qAEwycleW5EocvYeVyGNdc3sU3wX8XsG8agTTChH5sBjBBAv21JjP1H4D9OvRV5wspZtGs4YzWDotlglScpxm-CIF-2fQMtA9L_BQRGcVoJad9WW-0uEicBY8RhTe7QF76eG57NRjiHGediZt-3oc1XPLsuOwYwe6Sr3iBH8CVvVjwevseyQyCnJc5qpsdFORt150uhU9VaKQA8xN0knfhCuQMJcoU-yTzjftykVmq9HJr7tgprzztpv_PacnO3Naycd0ULijeyjF2r8-2IOUVs0JxnUWdYfzBaBRTr0oIqKIlGhtCf98QDFq1jaX447GVnJx1LC7uh3SmVLgMucyCjrM2xhXExNOifXKgWHExmEGPNb3bULgPDVdyL2k4GJ-0itleDf6iXaKriNcMXd_4Fdu23NovG2N8AGNV7FfGwRWhur9_hfSYETs-ohcqHj1AAGYZd4mcyAHCTRK90hs8TQHMy3RlROYtpkll9Fhmrfd8UtI5Ax6XaldxJcon9MMYRUaGusZ2c4N43AYugpSg_XiFtZbAuT-gGig8zfF-cUOU-huNjiqam0JSMKgxQhHKh8SXKd2PdZgpHJXVluUlkflBtSQu2QWiICWxSYVaNgIXgQ9l56QVu5SPNZqsSRvMzJrjvkA87D73lfFY=w1417-h944-no"
              description="Business Team"
            />
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Teams
