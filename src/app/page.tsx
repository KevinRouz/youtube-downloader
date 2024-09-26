'use client';
import { useState } from 'react';

const DownloadPage = () => {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp4'); // mp4 by default

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, format }),
    });
  
    const result = await response.json();
    console.log(result.message);
  };

  return (
    <div>
      <h1>YouTube to MP3/MP4 Downloader</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="url">YouTube URL:</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter YouTube URL"
            required
          />
        </div>

        <div>
          <label htmlFor="format">Choose format:</label>
          <select
            id="format"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="mp4">MP4</option>
            <option value="mp3">MP3</option>
          </select>
        </div>

        <button type="submit">Download</button>
      </form>
    </div>
  );
};

export default DownloadPage;