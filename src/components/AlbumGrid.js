import React from 'react';
import Link from '@docusaurus/Link';

export default function AlbumGrid({ items }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '30px',
      padding: '20px 0'
    }}>
      {items.map((item, index) => {
        // 💡 終極防防呆：不管資料藏在 item.content 還是直接在 item 裡，全部暴力挖出來
        const data = item?.content?.frontMatter || item?.frontMatter || item;
        const link = item?.content?.permalink || item?.permalink || '#';
        
        const title = data?.title || '未命名專輯';
        const artist = data?.artist || '未知歌手';
        const cover = data?.cover || '';

        // 如果連 cover 都沒有，就跳過不畫，避免崩潰
        if (!cover) return null;

        return (
          <Link 
            to={link} 
            key={index} 
            title={`${title} - ${artist}`} 
            style={{ overflow: 'hidden', borderRadius: '8px' }}
          >
            <div style={{
              position: 'relative',
              width: '100%',
              paddingTop: '100%',
              cursor: 'pointer',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
            >
              <img 
                src={cover.trim()} // 自動去背網址前後的空格
                alt={title}
                loading="lazy"
                style={{
                  position: 'absolute', top: 0, left: 0, 
                  width: '100%', height: '100%', 
                  objectFit: 'cover', borderRadius: '8px'
                }}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
