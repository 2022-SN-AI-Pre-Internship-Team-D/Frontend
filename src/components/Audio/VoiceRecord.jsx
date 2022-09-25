/* eslint-disable react/button-has-type */
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { useRecorder } from 'use-recorder';

const RecorderStarus = {
  PAUSED: 'paused',
  RECORDING: 'recording',
  PLAYING: 'playing',
  SILENT: 'silent',
};
export default function VoiceRecord() {
  const [status, setStatus] = useState(RecorderStarus.PAUSED);
  const { start, stop, player } = useRecorder();

  const actions = {
    [RecorderStarus.RECORDING]: start,
    [RecorderStarus.PAUSED]: stop,
    [RecorderStarus.PLAYING]: () => player.play(),
    [RecorderStarus.SILENT]: () => player.pause(),
  };

  const handleAction = (action) => {
    setStatus(action);
    actions[action]();
  };

  return (
    <div className="container">
      <div id="flow">
        <span className="flow-1" />
        <span className="flow-2" />
        <span className="flow-3" />
      </div>
      <div>
        <div>
          <div>
            {(status === RecorderStarus.PAUSED || status === RecorderStarus.SILENT) && (
              <button onClick={() => handleAction(RecorderStarus.RECORDING)}>record</button>
            )}
            {status === RecorderStarus.RECORDING && (
              <button onClick={() => handleAction(RecorderStarus.PAUSED)}>stop recording</button>
            )}
            {(status === RecorderStarus.PAUSED || status === RecorderStarus.SILENT) && !!player && (
              <button onClick={() => handleAction(RecorderStarus.PLAYING)}>play</button>
            )}
            {status === RecorderStarus.PLAYING && (
              <button onClick={() => handleAction(RecorderStarus.SILENT)}>pause</button>
            )}
          </div>
          {!!player && (
            <button onClick={() => console.log(player)}>
              <span>download</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
