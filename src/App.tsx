import steamLogo from '/steam2.png';
import {Helmet} from "react-helmet";
import './App.css'

function App() {

  return (
    <p>Hi!


      <Helmet>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://stxamcommunity.com"/>
        <meta property="og:title" content="stxam"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content={steamLogo}/>
      </Helmet>
    </p>
  )
}

export default App
