// navigator.mediaDevices.enumerateDevices()
//     .then(devices => {
//         devices.forEach(device => {
//             console.log('Device ID:', device.deviceId, 'Device Label:', device.label);
//         });
//     })
//     .catch(function (err) {
//         console.error(err.name + ": " + err.message);
//     })
// function getUserMedia() {
//     // Check if the browser supports getUserMedia
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         // Request access to the user's camera and microphone
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then(stream => {
//                 console.log('Media stream obtained:', stream);

//                 // You can now use the stream, for example, attach it to a video element
//                 // const videoElement = document.getElementById('myVideo');
//                 // videoElement.srcObject = stream;
//             })
//             .catch(error => {
//                 console.error('Error accessing media devices:', error);
//             });
//     } else {
//         console.error('getUserMedia is not supported in this browser');
//     }
// }

// // Call the function to request access to media devices
// getUserMedia();


// const getUserMedia = () => {
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//             .then(stream => {
//                 console.log('Media stream obtained:', stream);
//                 const videoElement = document.getElementById('myVideo');
//                 videoElement.srcObject = stream;
//             })
//             .catch(error => {
//                 console.error('Error accessing media devices:', error);
//             });
//     } else {
//         console.error('getUserMedia is not supported in this browser');
//     }
// };

// // Call the function to request access to media devices
// getUserMedia();



navigator.mediaDevices.enumerateDevices()
    .then(devices => {
        devices.forEach(device => {
            if (device.kind === 'videoinput') {
                console.log('Kamera IDsi:', device.deviceId, 'Kamera Nomi:', device.label);
            }
        });
    })
    .catch(error => {
        console.error('Xatolik:', error);
    });

console.log(navigator.mediaDevices.enumerateDevices());


navigator.mediaDevices.getDisplayMedia({ video: true })
    .then(stream => {
        // stream ni ishlatib, masalan, video elementga bog'lash
        const videoElement = document.getElementById('screenCapture');
        videoElement.srcObject = stream;
    })
    .catch(error => {
        console.error('Xatolik:', error);
    });

console.log(navigator.mediaDevices.getDisplayMedia({ video: true }));