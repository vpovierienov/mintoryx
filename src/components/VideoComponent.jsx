import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useNavigate } from 'react-router-dom';

// Получаем параметры из URL
const getUrlParams = () => new URLSearchParams(window.location.search);

const VideoComponent = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const params = getUrlParams();
  const roomID = params.get('roomID') || 'myroom'; // ← фиксированная комната
  const user = params.get('user') || `User${Math.floor(Math.random() * 1000)}`;

  useEffect(() => {
    // Если нет параметров, обновим URL
    if (!params.get('roomID') || !params.get('user')) {
      window.location.search = `?roomID=${roomID}&user=${user}`;
    }
  }, [params, roomID, user]);

  useEffect(() => {
    if (!containerRef.current) return;

    const appID = 1764326622;
    const serverSecret = '99c27cb3dff8688b4a8df43f7764a2f0';

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      user, // userID
      user  // userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: 'Room Link',
          url: `${window.location.origin}${window.location.pathname}?roomID=${roomID}&user=${user}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  }, [roomID, user]);

  return (
    <>
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          padding: '10px 15px',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        ⬅ На главную
      </button>

      <div
        ref={containerRef}
        style={{ width: '100vw', height: '100vh' }}
        className="myCallContainer"
      />
    </>
  );
};

export default VideoComponent;
