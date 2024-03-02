import { useState } from 'react';
import styles from './StyleModules/Styele.module.css';
import Intro from './components/intro';
import Intro1 from './components/intro1';
import Intro2 from './components/intro2';

function App() {
 
const [first,setfirst] = useState("");

const firstbutton = () => setfirst("firstbutton");
const secondbutton = () => setfirst("secondbutton");
const thirdbutton = () => setfirst("thirdbutton");

  return (
    <>
<div className={styles.Parent}>
  
<div className={styles.Child}>

{/* For text///*/}
<div className={styles.texts}>

<div className={styles.logo}>
</div>

<div className={styles.Texts}>
   <h1>React.js</h1>
   <p>i,e., using the React library for rendering the UI</p>
</div>

</div>

{/*/Features/////*/}

<div className={styles.features}>

  <div className={styles.BTNS}>
    <button onClick={firstbutton}>Why React?</button>
    <button onClick={secondbutton}>Core Features</button>
    <button onClick={thirdbutton}>Related Resources</button>
  </div>

{first === "firstbutton" && <Intro />}
{first === "secondbutton" && <Intro1 />}
{first === "thirdbutton" && <Intro2 />}

</div>


</div>

</div>




    </>
  )
}

export default App
