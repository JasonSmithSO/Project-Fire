// JavaScript code for the Netflix-like Trailer Showcase
const trailerSection = document.getElementById('trailer-section');

// Create an array with the video URLs
const videoUrls = [
  'https://youtu.be/ex3C1-5Dhb8',
  // Add more video URLs here if needed
];

// Dynamically generate YouTube embeds for each video URL
videoUrls.forEach((videoUrl) => {
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoUrl.slice(-11)}`;
  iframe.width = '560';
  iframe.height = '315';
  iframe.frameBorder = '0';
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullscreen = true;

  trailerSection.appendChild(iframe);
});