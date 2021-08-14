const scriptMaker = (url: string) => {
  return new Promise((resolve, reject) => {
    const tag = document.createElement('script');
    tag.type = 'text/javascript';
    tag.src = url;

    const body = document.getElementsByTagName('body')[0];

    tag.addEventListener('load', () => {
      console.log(`[scriptMaker] Script Installed.`);
      resolve(true);
    });
    tag.addEventListener('error', () => {
      console.log(`[scriptMaker] Script Fucked.`);
      reject(false);
    });

    body.appendChild(tag);
  });
};

export default scriptMaker;
