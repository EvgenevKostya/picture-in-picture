const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element, than display
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadmetodata = () => {
      videoElement.play();
    }
  } catch (e) {
    //Catch Error Here
  }
}

button.addEventListener('click', async () => {
  //Disable Button
  button.disabled = true;
  // Start Picture In Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
})

// On Load
selectMediaStream();
