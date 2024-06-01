import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name="aaa" age={30} isStudent={true}/>
      <Student name="bbb" age={42} isStudent={false}/>
      <Student name="ccc" age={50} isStudent={false}/>
      <Student name="ddd" age={27} isStudent={true}/>
      <Student />
    </>
  );
}

export default App
