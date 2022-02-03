import './App.css';
import { QRCodeCard } from './components/QRCodeCard';
import { FC } from 'react';

const App: FC = () => {
  const qrcodeBackground = '#2b7dfa';
  const qrcodeCirclesColor = '#3684fe';

  return (
    <div className="App">
      <QRCodeCard />
    </div>
  );
};

export default App;
