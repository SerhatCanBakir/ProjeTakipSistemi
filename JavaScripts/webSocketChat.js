var isVoicePressed = false;
var mediaRecorder
var audioChunks = [];
var socket = io();
var chatbox = document.getElementById('chatBox');
document.getElementById('buton').addEventListener('click', () => {
    socket.emit('message', chatbox.value);
})
socket.on('mesaj al', (msj) => {
    var mesaj = document.createElement('li');
    mesaj.innerHTML = msj.msj;
    var list = document.getElementById('mesajHolder');
    list.appendChild(mesaj);
})
document.getElementById('voiceBttn').addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    if (isVoicePressed === false) {
        isVoicePressed=true;
        
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = event => audioChunks.push(event.data);
            mediaRecorder.start();
            mediaRecorder.onstart = () => {
                console.log('ses aliniyor');
                audioChunks = [];
            }
        }
    else{

        stream.getTracks().forEach((track)=>{
            track.stop();
            console.log('track Durması lazım amk');
        })
        mediaRecorder.stop();
        isVoicePressed=false;
        mediaRecorder.onstop = ()=>{
            console.log('ses durdu');
            socket.emit('voiceMessage',audioChunks);
        }
    }})})
socket.on('voiceMessage',(voiceMessage)=>{
const audioBlob = new Blob(voiceMessage,{type:'audio/wav'});
const audioUrl = URL.createObjectURL(audioBlob);
const audio = new Audio(audioUrl);

var ses = document.createElement('li');
ses.innerHTML='ses oynat';
ses.addEventListener('click',()=>{
audio.play();
})
document.getElementById('mesajHolder').appendChild(ses)
})