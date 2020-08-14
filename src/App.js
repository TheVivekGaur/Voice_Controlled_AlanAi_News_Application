import React, {useEffect, useState}from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from '../src/components/NewsCards/NewsCards';
import useStyles from './styles';
const alanKey = '8c0b1408cbf5e09a38a713a0ed5363462e956eca572e1d8b807a3e2338fdd0dc/stage ';

const App = () => {
 const [newsArticles, setNewsArticles] = useState([]);
 const classes = useStyles();
 useEffect(()=>{
   alanBtn({
         key: alanKey,
         onCommand: ({command, articles}) =>{
             if(command === 'newHeadlines')
             {
               setNewsArticles(articles);
             }
         }
   })
 }, [])

 return (
  <div>
  <div className={classes.logoContainer}>
  <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan-logo" />
  </div>
  <NewsCards articles={newsArticles}  />
  </div>
 );
}

export default App;