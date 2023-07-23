function refreshVideos() {
  const container = document.getElementById('videoContainer');
  const videos = Array.from(container.querySelectorAll('.video-section'));

  // Randomize the order of videos
  for (let i = videos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    container.appendChild(videos[j]);
  }

  // Show loading animation
  const loading = document.getElementById('loading');
  loading.style.display = 'flex';

  // Hide loading animation after a short delay (simulating loading time)
  setTimeout(function() {
    loading.style.display = 'none';
    const allVideos = document.querySelectorAll('.youtube-video');
    allVideos.forEach(function(video, index) {
      if (index === 0) {
        video.setAttribute('src', video.getAttribute('src') + '?autoplay=1');
      } else {
        video.setAttribute('src', video.getAttribute('src').replace('?autoplay=1', ''));
      }
    });
    container.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 1500);
}
