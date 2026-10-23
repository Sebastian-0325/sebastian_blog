import React from 'react';

export default function AlbumCard({ title, artist, year, genre, cover }) {
  return (
    <div style={{
      display: 'flex',
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '20px',
      background: 'var(--ifm-card-background-color)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      maxWidth: '600px',
    }}>
      {/* 左側：專輯封面 */}
      <div style={{ marginRight: '20px', flexShrink: 0 }}>
        <img 
          src={cover} 
          alt={`${title} - ${artist}`} 
          width="150" 
          height="150" 
          loading="lazy"
          style={{ borderRadius: '8px', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* 右側：專輯資訊 */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
        <div>
          <h3 style={{ margin: '0 0 4px 0', fontSize: '1.4rem' }}>{title}</h3>
          <p style={{ margin: '0 0 12px 0', color: 'var(--ifm-color-emphasis-700)', fontWeight: '500' }}>
            {artist}
          </p>
          <div style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-600)' }}>
            <div>發行年份：{year}</div>
            <div>音樂曲風：{genre}</div>
          </div>
        </div>
      </div> 
    </div> 
  );
}
