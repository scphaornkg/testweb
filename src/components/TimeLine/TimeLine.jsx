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
    <Container>
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
          >
            <h3 className="vertical-timeline-element-title">Study Batch, C</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study Batch, C</h4> */}
            <p>
              I met an information security officer on the Internet and taught me Batch, after many recommendations, I learned C language
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
          >

            <h3 className="vertical-timeline-element-title">Study C, EV3</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              I started to learn more about EV3 in F2 and made a BottleSumo, but I couldn't participate due to the COVID-19 pandemic.
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
          >
            <h3 className="vertical-timeline-element-title">Study Docker, Arduino</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              Began learning Docker to set up servers and studied Arduino in class. Prepared for the upcoming GMCC competition.
            </p>

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
          >
            <h3 className="vertical-timeline-element-title">Study C++</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              Participated in GMCC using C language and won a silver medal. Eager to delve deeper into algorithms and data structures, I chose C++ as my next programming language.
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
          >
            <h3 className="vertical-timeline-element-title">Study Python, HTML, CSS</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              Solved numerous problems on LeetCode and won a gold medal in the next GMCC competition using C++, as well as a world silver medal. Later, began learning Python due to its versatility and convenience, e.g., web scraping. Also studied HTML, CSS, and web knowledge to create a website for the programming language class.
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
          >
            <h3 className="vertical-timeline-element-title">Study Python, HTML, CSS</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              Mastered frontend web development and started experimenting with backend Node.js, controlling MongoDB.
            </p>
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
          >
            <h3 className="vertical-timeline-element-title">Backend engineer, Information security</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Study C, EV3</h4> */}
            <p>
              Planning to study Department of Computer Science at National Yang Ming Chiao Tung University in Taiwan. Hoping to become a backend engineer or information security specialist.
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

`

const CenteredTitle = styled.div`
margin: 0 auto;
  padding: 3rem 0;
    text-align: center;
    h1 {
      padding-top: 1rem;
    }
`;
