import localFont from 'next/font/local';

const notosans = localFont({
  src: [
    {
      path: './fonts/NotoSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Notosans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NotoSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export { notosans };
