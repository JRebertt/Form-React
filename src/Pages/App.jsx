import './style.css'

import { Title } from '../Components/Header/Title-Header';
import { ContentForms } from '../Components/Content-Forms/Content-Forms';
import { Footer } from '../Components/Footer/Footer';


export function App() {
  return (
    <>
      <div className="rectangle">
        <Title />
        <ContentForms />
        <Footer/>
      </div>
    </>

  );
}