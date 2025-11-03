import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Type Extractor - Convert JSON to TypeScript Types';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              marginBottom: 20,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            ⚡ Type Extractor
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 'normal',
              opacity: 0.95,
              textAlign: 'center',
              maxWidth: 1000,
            }}
          >
            Convert JSON to TypeScript Types Instantly
          </div>
          <div
            style={{
              fontSize: 28,
              marginTop: 40,
              opacity: 0.8,
              display: 'flex',
              gap: 20,
            }}
          >
            <span>🚀 Fast</span>
            <span>💯 Free</span>
            <span>✨ Easy</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

