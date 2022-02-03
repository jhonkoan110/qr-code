import { FC } from 'react';
import QRCode from 'qrcode.react';
import classes from './QRCodeCard.module.css';

export const QRCodeCard: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.QRCodeBackground}>
        <QRCode
          value="https://github.com/jhonkoan110"
          renderAs="svg"
          bgColor="transparent"
          fgColor="#fff"
          level="M"
          className={classes.QRCode}
          size={170}
        />
        <div className={classes.QRCodeCircle} />
        <div className={classes.QRCodeCircle} />
      </div>
      <h2 className={classes.title}>Improve your front-end skills by building projects</h2>
      <p className={classes.description}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  );
};
