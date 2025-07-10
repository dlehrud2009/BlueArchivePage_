import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        fontSize: '14px',
        color: '#666',
      }}
    >
      <p>© 블루아카이브 BlueArchive.</p>
      <img 
      src={`${process.env.PUBLIC_URL}/images/BlueArchive.png`}
      alt="블루아카이브 로고"
      style={{ width: '100px', marginBottom: '10px' }} 
      />
      <p>문의: 25_45@bsmm.hs.kr | 010-7456-0853</p>
      <p>
        <Link to="/privacy" style={{ marginRight: 10 }}>개인정보처리방침</Link>
        <Link to="/terms">이용약관</Link>
      </p>
    </footer>
  );
}