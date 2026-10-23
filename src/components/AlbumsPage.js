import React from 'react';
import Layout from '@theme/Layout';
import AlbumGrid from '@site/src/components/AlbumGrid';

export default function AlbumsArchivePage(props) {
  // 💡 從後台順利抓到的官方文章陣列
  const items = props.items || [];

  // 轉換格式：精準解構 Docusaurus 的模組結構
  const allAlbums = items.map((item) => {
    // 💡 關鍵：官方的文章模組藏在 item.content 中
    const BlogPostModule = item.content; 
    
    // 從模組中安全提取 frontMatter 與自動算好的網址
    const frontMatter = BlogPostModule?.frontMatter || {};
    const permalink = BlogPostModule?.metadata?.permalink || item.permalink || '';

    return {
      frontMatter: frontMatter,
      permalink: permalink,
    };
  });

  return (
    <Layout title="專輯牆">
      <main className="container margin-vert--xl">
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>專輯牆</h1>
          <hr style={{ maxWidth: '200px', margin: '20px auto', border: '2px solid var(--ifm-color-primary)' }} />
        </header>

        {allAlbums.length > 0 && allAlbums[0].frontMatter.title ? (
          <AlbumGrid items={allAlbums} />
        ) : (
          <div style={{ textAlign: 'center', color: 'var(--ifm-color-emphasis-500)', marginTop: '2rem' }}>
            <p>正在載入網格圖片...</p>
            {/* 💡 保險除錯：如果依然解構失敗，自動顯示最深層的結構 */}
            <small style={{ color: '#888' }}>
              已偵測到檔案，正在嘗試對齊欄位格式。
            </small>
          </div>
        )}
      </main>
    </Layout>
  );
}
