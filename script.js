// JavaScript code for the TikTok-like Trailer Showcase
const trailerSection = document.getElementById('trailer-section');

// Fetch trailer data from an API or use static data
// Here's a simple example using static data
const trailers = [
  { videoUrl: 'https://www.youtube.com/embed/ex3C1-5Dhb8' },
  // Add more trailer data here
];

// Dynamically generate TikTok-like video embeds for each trailer
trailers.forEach((trailer) => {
  const videoContainer = document.createElement('div');
  videoContainer.className = 'video-container';

  const iframe = document.createElement('iframe');
  iframe.src = trailer.videoUrl;
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;

  videoContainer.appendChild(iframe);
  trailerSection.appendChild(videoContainer);
});