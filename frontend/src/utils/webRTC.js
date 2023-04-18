import Peer from "simple-peer";

// Create a new peer connection
export function createPeer(initiator, stream) {
    const peer = new Peer({
        initiator,
        stream,
        trickle: false,
    });

    return peer;
}

// Send a signal to the remote peer
export function sendSignal(peer, signal) {
    peer.signal(signal);
}

// Receive a signal from the remote peer
export function receiveSignal(peer, signal) {
    peer.signal(signal);
}

// Disconnect from the remote peer
export function disconnectPeer(peer) {
    peer.destroy();
}

// Mute or unmute the local audio stream
export function toggleMuteAudio(stream) {
    stream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
    });
}

// Pause or resume the local video stream
export function togglePauseVideo(stream) {
    stream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
    });
}
