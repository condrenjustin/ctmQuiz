import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import logo from './svg/logo.png';
import { Grid, Container, Typography } from '@material-ui/core';
import Linkify from 'react-linkify';
import activeMinds from './images/activeMinds.jpg';
import celebration from './images/celebration.jpg';
import goFigure from './images/goFigure.jpg';
import recoverySupport from './images/recoverySupport.jpg';
import roundTable from './images/roundTable.jpg';
import warriors from './images/warrior.png';
import leaps from './images/leaps.jpeg'
import './App.css';


const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(25),
    display: 'flex',
    position: 'relative',
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers,
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    console.log(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      if (event.currentTarget.value === "Yes"){
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
      else{
        setTimeout(() => this.setNextQuestion(), 300);
      }
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    // calculates number of answers for each
    const answersCount = this.state.answersCount;

    // set answers of each question into an array
    const results = Object.keys(answersCount);

    console.log(results);
    
    return results;
  }

  // this needs to display results based on answers to first, then the second question
  setResults(result) {
    if (result.length === 1) {
      if (result[0] === "Yes"){
        this.setState({ result: 
          <Container>
            <Grid container justify='center' spacing='5'>
              <Grid item xs={12}>
                <Typography variant="h4">
                  24/7 External Help
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <strong>Resource (For Whom)</strong>
              </Grid>
              <Grid item xs={4}>
                <strong>Description</strong>
              </Grid>
              <Grid item xs={4}>
                <strong>Contact</strong>
              </Grid>
              <Grid item xs={4}>
                Crisis Text Line (Anyone)
              </Grid>
              <Grid item xs={4}>
                Communicate with a trained crisis counselor, from anywhere in the USA, for any type of crisis
              </Grid>
              <Grid item xs={4}>
                Text HOME to 741741 
              </Grid>
              <Grid item xs={4}>
                Crisis Text Line (Students of Color)
              </Grid>
              <Grid item xs={4}>
                To message or speak with a crisis counselor dedicated to supporting emotional wellbeing of students of color
              </Grid>
              <Grid item xs={4}>
                Text STEVE to 741741 
              </Grid>
              <Grid item xs={4}>
                Trevor Lifeline (LGBTQ+)
              </Grid>
              <Grid item xs={4}>
                Crisis intervention and suicide prevention services for all members of the LGBTQ+ community; call or text a Trevor counselor at any time
              </Grid>
              <Grid item xs={4}>
                Call: 1-866-488-7386<br/>Text: START to 678678 
              </Grid>
              <Grid item xs={4}>
                Trans Lifeline (Trans and Non-Binary)
              </Grid>
              <Grid item xs={4}>
                By the trans community, for the trans community; call the peer support hotline for any crisis
              </Grid>
              <Grid item xs={4}>
                Call 1-877-565-8860
              </Grid>
              <Grid item xs={4}>
                Suicide Prevention Lifeline
              </Grid>
              <Grid item xs={4}>
                24/7, toll-free hotline available to anyone in suicidal crisis or emotional distress
              </Grid>
              <Grid item xs={4}>
                Call 1-800-273-8255
              </Grid>
            </Grid>
          </Container>
      });
      }
      else{
        this.setState({ result: 
          <Container>
            <Grid container justify='center' spacing='5'>
              <Grid item xs={12}>
                <strong>There are so many other students who are here for you. The following is a list of organizations dedicated to helping those suffering from mental illness, and raising awareness for causes surrounding mental health. Reach out to any of these groups</strong>
              </Grid>
              <Grid item xs={4}>
                <img src={leaps}></img>
              </Grid>
              <Grid item xs={8}>
                LEAPS - LEAPS is a group of undergraduate students who work with the Center for Student Wellbeing as peer educators to promote positive mental health and wellbeing on the Vanderbilt University campus through outreach activities.
              </Grid>
              <Grid item xs={4}>
                <img src={activeMinds}></img>
              </Grid>
              <Grid item xs={8}>
                Active Minds - Active Minds strives to educate the community about mental health in order to decrease stigma and to raise awareness about current topics. The group will participate in a variety activities including discussions, community outreach, and fundraising, all in an attempt to better understand and raise awareness about mental health.
              </Grid>
              <Grid item xs={4}>
                <img src={goFigure}></img>
              </Grid>
              <Grid item xs={8}>
                Go Figure - Go Figure believes that a positive body-image is crucial to each person's confidence and happiness.  We are a non-profit student organization dedicated to advocating for positive body image and encouraging a wider definition of true beauty throughout the Vanderbilt community. 
              </Grid>
              <Grid item xs={4}>
                <img src={warriors}></img>
              </Grid>
              <Grid item xs={8}>
                Warriors Not Worriers - This club was created to shed light on OCD and work to better the mental health of those affected by it. Whether you have been diagnosed with the disorder or simply want to escape your stressors, this club will offer a safe place to come talk about your struggles and work to minimize them through methods such as meditation and mindfulness.
              </Grid>
              <Grid item xs={4}>
                <img src={recoverySupport}></img>
              </Grid>
              <Grid item xs={8}>
                Student Vanderbilt Recovery Support - Vanderbilt Recovery Support (VRS) provides caring and encouraging support services to assist students who are recovering from substance use problems or dependency, and who are working towards success in their academic, social, personal, and professional lives. 
              </Grid>
              <Grid item xs={4}>
                <img src={celebration}></img>
              </Grid>
              <Grid item xs={8}>
                A Celebration of Life - 6 Years ago, Marcus Kyle Craig, a student at Vanderbilt took his own life at the age of 21. A Celebration of Life will put on a spring time event every year to honor Kyle and all those battling mental health issues. Together, we will erase the stigma surrounding seeking help and come together in celebration.
              </Grid>
              <Grid item xs={4}>
                <img src={roundTable}></img>
              </Grid>
              <Grid item xs={8}>
                Mental Health Roundtable - The Mental Health Roundtable aims to streamline Vanderbilt mental health groups’ conversations on campus into one cohesive network. As an independent Roundtable, our organization acts as a conversational space, a network for potential partnerships, and a body to effectively represent our issues to administration on campus.
              </Grid>
            </Grid>
          </Container>
        });
      }
    }
    else {
      this.setState({ result: 
          <Container>
            <Grid container justify='center' spacing='3'>
              <Grid item justify='center'>
                <Typography variant="h6">
                  <strong>Check out these two resources below to start.</strong>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">
                  Office of Student Care Coordination
                </Typography>
              </Grid>
              <Grid item>
                After contacting the office, you will be assigned a long-term Care Coordinator and participate in a half-hour initial discussion within a week or two of your appointment. Your Care Coordinator will guide you to additional UCC resources, and help you make a plan for how to navigate the campus most effectively.
              </Grid>
              <Grid item>
                Contact the OSCC at:  (615)-343-WELL (9355) or studentcare@vanderbilt.edu
              </Grid>
              <Grid item>
                <Linkify>https://www.vanderbilt.edu//carecoordination/</Linkify>
              </Grid>
              <Grid item>
                <Typography variant="h4">
                  Center for Student Wellbeing (CSW)
                </Typography>
              </Grid>
              <Grid item>
                A fantastic resource for anyone who may be struggling at Vanderbilt, but may not want to go directly to the OSCC. The CSW offers a wide variety of weekly programs and services. Newly added "Let's Talk" drop-in sessions around campus, for informal consultations with UCC counselors. 
              </Grid>
              <Grid item>
                <Linkify>https://www.vanderbilt.edu/healthydores/</Linkify>
              </Grid>
            </Grid>
          </Container>
      });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Interactive Resource Guide</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
