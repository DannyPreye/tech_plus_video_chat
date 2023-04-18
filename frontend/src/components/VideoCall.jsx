import { useEffect, useState, useRef } from "react";
import {
    createPeer,
    sendSignal,
    receiveSignal,
    disconnectPeer,
    toggleMuteAudio,
    togglePauseVideo,
} from "../utils/webRTC";

const Video = ({ stream, myref, userRef, callAccepted, callEnded }) => {
    const [fullScreen, setFullScreen] = useState(false);
    // const [isInitiator, setIsInitiator] = useState(false);

    // const [localStream, setLocalStream] = useState(null);
    // const [remoteStream, setRemoteStream] = useState(null);

    // const localVideoRef = useRef(null);
    // const remoteVideoRef = useRef(null);
    // const connectionRef = useRef(null);

    // // useEffect(() => {
    // //     // Take permission from user to use their webcam and microphone
    // //     navigator.mediaDevices
    // //         .getUserMedia({ video: true, audio: true })
    // //         .then((stream) => {
    // //             setLocalStream(stream);
    // //             localVideoRef.current.srcObject = stream;
    // //         })
    // //         .catch((err) => {
    // //             console.log(err);
    // //         });
    // // }, []);

    // const startCall = () => {
    //     const peer = createPeer(true, stream);

    //     peer.on("signal", (data) => {
    //         socket.emit("callUser", {
    //             userToCall: remoteUser,
    //             signalData: data,
    //             from: localUser,
    //             name,
    //         });
    //     });
    // };

    // // Receive a signal from the remote peer and respond with a signal
    // useEffect(() => {
    //     if (peer) {
    //         peer.on("signal", (signal) => sendSignal(peer, signal));
    //     }
    // }, [peer]);

    // // Receive a signal from the remote peer and set up the remote stream
    // useEffect(() => {
    //     if (peer && remoteStream) {
    //         receiveSignal(peer, remoteStream);
    //         remoteVideoRef.current.srcObject = remoteStream;
    //     }
    // }, [peer, remoteStream]);

    // // Toggle mute audio stream
    // const handleMuteAudio = () => {
    //     toggleMuteAudio(localStream);
    // };

    // // Toggle pause video stream
    // const handlePauseVideo = () => {
    //     togglePauseVideo(localStream);
    // };

    // // End call and disconnect from remote peer
    // const handleEndCall = () => {
    //     disconnectPeer(peer);
    //     setLocalStream(null);
    //     setRemoteStream(null);
    // };
    return (
        <div className="container mx-auto h-screen">
            <div className="w-full h-full">
                <video
                    ref={myref}
                    autoPlay
                    muted
                    className="w-full h-full"
                ></video>
            </div>
        </div>
    );
};

export default Video;
