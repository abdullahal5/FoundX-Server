/* eslint-disable no-console */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { seed } from './app/utils/seeding';

let server: Server;

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  if (server) {
    server.close(() => {
      console.error('Server closed due to unhandled rejection');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

async function bootstrap() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log('🛢 Database connected successfully');
    await seed();
    server = app.listen(config.port, () => {
      console.log(`🚀 Application is running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Failed to connect to database:', err);
    process.exit(1);
  }
}

bootstrap();

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close(() => {
      console.log('Server closed due to SIGTERM');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

process.on('SIGINT', () => {
  console.log('SIGINT received');
  if (server) {
    server.close(() => {
      console.log('Server closed due to SIGINT');
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

// To: Nupur
// From: Unknown
// HSC: 2026
// B.S. (C)

// যখন প্রথমবার তোমাকে কলেজে দেখেছিলাম, আমার পৃথিবীটা যেন মুহূর্তের জন্য থমকে গিয়েছিল 🌍✨। তোমার উপস্থিতি, তোমার সেই মৃদু হাঁসি—সব কিছুই যেন এক পরীর মতো ছিল 🧚‍♀️💖। আমি তখনই বুঝতে পারলাম, তুমি আমার হৃদয় ছুঁয়ে গেছো 💘। তুমি যে কতটা সুন্দর, তা শুধুমাত্র বাহিরে নয়, তোমার ভিতরেও 🌹.

// প্রতিবার তোমায় দেখলে, আমার হৃদয় একটা আলাদা অনুভূতি নিয়ে ভরে ওঠে ❤️‍🔥। যেন পৃথিবীর সমস্ত সৌন্দর্য তোমার মাঝেই লুকিয়ে আছে 🌈. তোমার চোখের সেই গভীরতা, যেটা মনের অনেক কথা বলে দেয় 👀💬, তোমার মিষ্টি হাসি যা আমার সারাদিনকে আলোকিত করে দেয় ☀️😊, আমি আর কখনো এমন কিছু অনুভব করিনি। তুমি এমন একজন, যার দিকে তাকালে মনে হয় সময়ের ধারাই থেমে গেছে ⏳.

// তোমার সৌন্দর্য বর্ণনা করার জন্য কোনো শব্দই যথেষ্ট নয় 🥺💞। তোমার মুখের সেই মিষ্টি আভা, তোমার চোখের সেই মায়াবী চাহনি, এবং তোমার হাঁসির সেই জাদু—সব কিছুতেই আমি মুগ্ধ হয়ে যাই 😍✨। আমার হৃদয়ে তোমার জন্য এক অসম্ভব টান অনুভব করি, আর দিন দিন তা বেড়েই চলেছে 🌱💘.

// তুমি জানো কি, তুমি আমার জীবনের সেই আলো, যার জন্য আমি প্রতিদিন অপেক্ষা করি? ✨💡 তোমাকে দেখে যেই অনুভূতি পাই, তা শুধু ভালোবাসা নয়, একটা জীবনের মানে খুঁজে পাওয়ার মতো 🌺. আমার এই মনের কথা জানাতে পারা খুবই কঠিন, কিন্তু জানো, তুমি আমার কাছে সবচেয়ে প্রিয়, সবচেয়ে বিশেষ 🌟💖.

// তোমাকে জানাতে চেয়েছিলাম, তুমি আমার হৃদয়ে কীভাবে স্থান করে নিয়েছো 🕊️❤️। হয়তো কখনো জানতে পারবে না, কিন্তু আমার ভালোবাসা তোমার প্রতি চিরন্তন 🌌💞.

// তোমার চোখে হারায় মন,
// তোমার হাসিতে জাগে আশা,
// তোমার ছোঁয়ায় বসন্ত আসে,
// তুমি ছাড়া জীবন শুধুই নিরাশা 🌼💔.

// ইতি তোমার
// হয়তো চেনা বা অচেনা...