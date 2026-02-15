.video-background {
  position: relative;
  width: 100%;
  height: 100vh; /* পুরো স্ক্রিন দখল করবে */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1; /* ভিডিওটিকে সবার পেছনে পাঠানোর জন্য */
  transform: translate(-50%, -50%);
  object-fit: cover; /* ভিডিওটি যাতে ফেটে না যায় বা চ্যাপ্টা না হয় */
}

.content {
  color: white;
  text-align: center;
  z-index: 1;
}