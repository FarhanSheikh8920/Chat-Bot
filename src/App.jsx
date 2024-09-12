import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import chalk from 'chalk'
import { Col, Container, Row } from 'react-bootstrap'
function App() {
  const log = console.log;
  const [answer, setannwer] = useState("")
  const [question, setquestion] = useState("")
  async function Generate() {
    setannwer("It will take time upto 10s")
    const respons = await axios({
      url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCc6Nq_o4C4P5XAcxZEJN7Yu-cyuJpNwe8',
      method: 'post',
      data: {

        contents: [
          { "parts": [{ text: question }] }]
      }
    })
    setannwer(respons["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }



  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
           <h1 className='animated-heading text-center'>Chat Bot</h1><br />
          <div className='"embed-responsive embed-responsive-16by9'>

            <br /><p>{answer}</p>
            <textarea className="text.arrea" value={question} onChange={(e) => setquestion(e.target.value)}></textarea><br />
            <button onClick={Generate}>Generate answer</button>
          </div>
          </ Col >
          </ Row >
          </Container >


          )
}

          export default App
