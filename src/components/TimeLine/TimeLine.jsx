import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';
import { Zoom } from 'react-awesome-reveal';
// const StyledVerticalTimeline = styled(VerticalTimeline)`

// `;
const Services = () => {
  return (
    <Container id='Timeline'>
      <CenteredTitle>
        <Zoom>
          <h1>I.T. <span className="green">Learning Journey</span></h1>
        </Zoom>
      </CenteredTitle>

      <VerticalTimeline lineColor={"#01be96"} layout={"2-columns"}>
        <Slide direction="left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2d2d3a', color: '#fff', boxShadow: '0 0px 0 #000', marginBottom: '40px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            direction="right"
            icon={
              <img src={process.env.PUBLIC_URL + '/icon/batch.png'} className="icon" />
            }
          >
            <h3 className="vertical-timeline-element-title">Study Batch, C</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study Batch, C</h4> */}
            <p>
              At the time, I was intrigued by the Anonymous hacker group and wanted to try learning, but I didn't know where to start. Then, I met an information security officer from Taiwan on the internet who planned to teach the basics of Batch, and selected students through a series of problems. I ended up becoming one of his students and started learning C language under his recommendation. Furthermore, I was invited to join the school's programming language team by my teacher during my F1.
            </p>
          </VerticalTimelineElement>
        </Slide>
        <Slide direction="right">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2d2d3a', color: '#fff', boxShadow: '0 0px 0 #000', marginBottom: '40px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            direction="right"
            position={"right"}
            icon={
              <img src={process.env.PUBLIC_URL + '/icon/c.png'} className="icon" />
            }
          >

            <h3 className="vertical-timeline-element-title">Study EV3, C++</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              Having self-studied the C language for almost a year, I have already mastered the logic of programming. During the EV3 classes, coding was a breeze for me, and from that point on, my IT scores improved greatly. During the summer vacation, I went to Taiwan to buy a C++ tutorial book, which became my next programming language to learn.
            </p>

          </VerticalTimelineElement>
        </Slide>
        <Slide direction="left">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2d2d3a', color: '#fff', boxShadow: '0 0px 0 #000', marginBottom: '40px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            direction="right"
            icon={
              <img src={process.env.PUBLIC_URL + '/icon/ev3.png'} className="icon" />
            }
          >
            <h3 className="vertical-timeline-element-title">Study Ev3, Arduino</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              By the end of last year, I had already prepared for this year's EV3 BottleSumo competition. Unfortunately, the sudden outbreak of the pandemic prevented me from participating. During the pandemic, I didn't waste any time and continued studying C++. Meanwhile, my cybersecurity teacher asked me to write a port scanner using the C language. After a lot of research, I eventually succeeded in creating one using sockets. Along the way, I learned a lot about network fundamentals, such as TCP 3-way handshake and the OSI model. Because I felt that the port scanner was inefficient, I also learned multi-threading to increase its efficiency.
            </p>
            <p><a href="https://github.com/scphaornkg/C-">port scan source code</a></p>
          </VerticalTimelineElement>
        </Slide>
        <Slide direction="right">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2d2d3a', color: '#fff', boxShadow: '0 0px 0 #000', marginBottom: '40px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            direction="right"
            position={"right"}
            icon={
              <img src={process.env.PUBLIC_URL + '/icon/data-structure.png'} className="icon" />
            }
          >
            <h3 className="vertical-timeline-element-title">Study C++</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              Having studied C and C++ for three years, I participated in my first algorithm competition, GMCC, and used my most familiar language, C. In the end, I won the silver medal, the highest ranking in the junior group at my school. The same year, another CTF player from Taiwan taught me C++ algorithms and data structures, such as trees, graphs, and DFS, which further enhanced my abilities. By this time, I was certain that I wanted to pursue a career in the field of technology.
            </p>
            <br></br>
            <h3 className="vertical-timeline-element-subtitle">Competition</h3>
            <StyledUnorderedList>
              <StyledListItem>
                Global Mathematics Coding Competition
              </StyledListItem>
              <StyledListItem>
                ROBOFEST BottleSumo Macau Preliminary
              </StyledListItem>
              <StyledListItem>
                The Office Skills Competition for Macao Students
              </StyledListItem>
            </StyledUnorderedList>
          </VerticalTimelineElement>
        </Slide>
        <Slide direction='left'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2d2d3a', color: '#fff', boxShadow: '0 0px 0 #000', marginBottom: '40px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2022"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            direction="right"
            position='left'
            icon={
              <img src={process.env.PUBLIC_URL + '/icon/www.png'} className="icon" />
            }
          >
            <h3 className="vertical-timeline-element-title">Study Python, HTML, CSS</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              After training with my Taiwanese tutor and working hard on Leetcode, I won the gold medal in this year's GMCC competition, and even more impressively, the world silver medal, ranking first in the entire school. Given the extreme convenience of Python, such as its use in data analysis and web scraping, Python became the next programming language I learn. I took on the role of administrator for the programming language team's website on Amazon S3, building and maintaining the site for the team, which also led me to learn web programming languages like HTML5 and CSS.
            </p>
            <br></br>
            <h3 className="vertical-timeline-element-subtitle">Competition</h3>
            <StyledUnorderedList>
              <StyledListItem>
                Global Mathematics Coding Competition
              </StyledListItem>
              <StyledListItem>
                Macau Olympiad in Informatics
              </StyledListItem>
              <StyledListItem>
                Macao Secondary Students Information Technology Knowledge Quiz Contest
              </StyledListItem>
              <StyledListItem>
                Campus Weather Monitoring Competition in 2021-2022
              </StyledListItem>
              <StyledListItem>
                Center of Gravity Bipedal Robot Sprint.
              </StyledListItem>
            </StyledUnorderedList>
          </VerticalTimelineElement>
        </Slide>
        <Slide direction='right'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2d2d3a', color: '#fff', boxShadow: '0 0px 0 #000', marginBottom: '40px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2023"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            direction="right"
            position='right'
            icon={
              <img src={process.env.PUBLIC_URL + '/icon/nodejs.png'} className="icon" />
            }
          >
            <h3 className="vertical-timeline-element-title">Study Node js, React js, Docker</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              Having become fairly familiar with front-end web development, I began learning about the backend. As more and more people started using Node.js, I chose to learn Node.js instead of PHP. I also created a project using Arduino DHT11, ThingSpeak, and Node.js to collect real-time meteorological data at school, which calculated and displayed the perceived temperature on a webpage.
            </p>
            <p><a href="http://macaunas.synology.me:4000/">my webpage</a></p>
            <br></br>
            <h3 className="vertical-timeline-element-subtitle">Competition</h3>
            <StyledUnorderedList>
              <StyledListItem>
                Tencent Youth AI Dream Camp
              </StyledListItem>
              <StyledListItem>
                DFC CHALLENGE
              </StyledListItem>
              <StyledListItem>
                Macao Secondary Students Information Technology Knowledge Quiz Contest
              </StyledListItem>
              <StyledListItem>
                Macau Olympiad in Informatics
              </StyledListItem>
            </StyledUnorderedList>
          </VerticalTimelineElement>
        </Slide>
        <Slide direction='left'>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2d2d3a', color: '#fff', boxShadow: '0 0px 0 #000', marginBottom: '40px' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Future"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            direction="right"
            icon={
              <img src={process.env.PUBLIC_URL + '/icon/cyber-security.png'} className="icon" alt="cyber-security" />
            }
          >
            <h3 className="vertical-timeline-element-title">Backend engineer, Information security</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              I am planning to attend the Department of Information Engineering in Taiwan and intend to join the cybersecurity club to participate in CTF competitions, starting with learning Web Security. In the future, I hope to become an information security specialist or a backend engineer.
            </p>

          </VerticalTimelineElement>
        </Slide>
      </VerticalTimeline>
    </Container>
  );
};

export default Services;
const StyledListItem = styled.li`
    font-weight: 500;
    margin: 1em 0 0;
    line-height: 1.6;

    @media (max-width: 767px) {
      font-size: 13px; /* 修改成您希望在 max-width: 758px 時的字體大小 */
      font-size: .8125rem; /* 以rem為單位 */
  }
`;

const StyledUnorderedList = styled.ul`
    margin-left: 1em; /* 調整此值以更改標記點位置 */
    list-style-type: disc; /* 使用 disc 作為實心標記點 */
`;
const Container = styled.div`
  .icon{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    clip-path: circle();
  }
  a{
    color: #ffffff;
    // text-decoration: none;
  } 
`

const CenteredTitle = styled.div`
margin: 0 auto;
  padding: 3rem 0;
    text-align: center;
    h1 {
      padding-top: 1rem;
    }
`;
