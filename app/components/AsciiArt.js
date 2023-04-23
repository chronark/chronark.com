import { useEffect } from 'react';

const AsciiArt = () => {
  useEffect(() => {
    const asciiArt = `
    _      _              _  _           _           
   /_\\  __| |__ _ _ __   | || |_  _ __ _| |_  ___ ___
  / _ \\/ _\` / _\` | '  \\  | __ | || / _\` | ' \\/ -_|_-<
 /_/ \\_\\__,_\\__,_|_|_|_| |_||_|_,_ \\__, |_||_\\___/__/
                                   |___/             
 `;

    console.log(asciiArt);
  }, []);

  return null;
};
export default AsciiArt;
