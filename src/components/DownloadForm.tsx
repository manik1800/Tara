import React, { useState } from 'react';
import { Download, Loader2, CheckCircle, AlertCircle, Copy, ExternalLink, Play, FileText, Image, Music, Archive } from 'lucide-react';

interface FileInfo {
  name: string;
  size: string;
  type: string;
  downloadUrl: string;
  isVideo?: boolean;
  isImage?: boolean;
  isAudio?: boolean;
  isDocument?: boolean;
  isArchive?: boolean;
  previewUrl?: string;
  thumbnail?: string;
}

export default function DownloadForm() {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [error, setError] = useState('');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const getFileIcon = (fileInfo: FileInfo) => {
    if (fileInfo.isVideo) return <Play className="h-8 w-8 text-red-500" />;
    if (fileInfo.isImage) return <Image className="h-8 w-8 text-green-500" />;
    if (fileInfo.isAudio) return <Music className="h-8 w-8 text-purple-500" />;
    if (fileInfo.isDocument) return <FileText className="h-8 w-8 text-blue-500" />;
    if (fileInfo.isArchive) return <Archive className="h-8 w-8 text-orange-500" />;
    return <FileText className="h-8 w-8 text-gray-500" />;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsProcessing(true);
    setError('');
    setFileInfo(null);

    // Simulate processing with realistic steps
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (url.includes('tarabox') || url.includes('terabox') || url.includes('1024tera') || url.includes('4funbox')) {
      // Simulate different file types
      const fileTypes = [
        { 
          name: 'Amazing_Nature_Documentary_4K.mp4', 
          size: '1.2 GB', 
          type: 'MP4 Video', 
          isVideo: true,
          thumbnail: 'https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        { 
          name: 'Business_Presentation.pdf', 
          size: '5.4 MB', 
          type: 'PDF Document', 
          isDocument: true 
        },
        { 
          name: 'Photo_Collection.zip', 
          size: '245 MB', 
          type: 'ZIP Archive', 
          isArchive: true 
        },
        { 
          name: 'Relaxing_Music_Album.mp3', 
          size: '89 MB', 
          type: 'MP3 Audio', 
          isAudio: true 
        },
        { 
          name: 'Vacation_Photos.jpg', 
          size: '12 MB', 
          type: 'JPEG Image', 
          isImage: true,
          thumbnail: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ];
      
      const randomFile = fileTypes[Math.floor(Math.random() * fileTypes.length)];
      
      setFileInfo({
        ...randomFile,
        downloadUrl: `https://download.example.com/${randomFile.name}`,
        previewUrl: randomFile.isVideo ? 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4' : undefined
      });
    } else {
      setError('Please enter a valid TaraBox, TeraBox, 1024Tera, or 4FunBox link');
    }

    setIsProcessing(false);
  };

  const handleDownload = async () => {
    if (!fileInfo?.downloadUrl) return;
    
    setIsDownloading(true);
    setDownloadProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          // Simulate actual download
          const link = document.createElement('a');
          link.href = fileInfo.downloadUrl;
          link.download = fileInfo.name;
          link.click();
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const copyToClipboard = async () => {
    if (fileInfo?.downloadUrl) {
      await navigator.clipboard.writeText(fileInfo.downloadUrl);
      // You could add a toast notification here
    }
  };

  return (
    <section id="download" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Download Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Download Any File from TaraBox
            </h2>
            <p className="text-blue-100 text-lg">
              Paste your link below and get instant access to your files
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.terabox.com/s/1abc... or https://1024tera.com/..."
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                disabled={isProcessing}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Download className="h-6 w-6 text-blue-300" />
              </div>
            </div>

            <button
              type="submit"
              disabled={!url.trim() || isProcessing}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span>Processing Your Link...</span>
                </>
              ) : (
                <>
                  <Download className="h-6 w-6" />
                  <span>Generate Download Link</span>
                </>
              )}
            </button>
          </form>

          {/* Supported Platforms */}
          <div className="mt-8 text-center">
            <p className="text-blue-200 text-sm mb-4">Supported Platforms:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['TaraBox', 'TeraBox', '1024Tera', '4FunBox'].map((platform) => (
                <span key={platform} className="bg-white/10 px-4 py-2 rounded-lg text-white text-sm border border-white/20">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-300 mb-2">Download Error</h3>
                <p className="text-red-200">{error}</p>
                <p className="text-red-200 text-sm mt-2">
                  Make sure you're using a valid sharing link from supported platforms.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* File Info Display */}
        {fileInfo && (
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-start space-x-6">
              <div className="bg-white/20 p-4 rounded-2xl">
                {getFileIcon(fileInfo)}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">File Ready!</h3>
                    <p className="text-blue-200">Your download is prepared and ready to go</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>

                {/* File Details */}
                <div className="bg-white/10 rounded-2xl p-6 mb-6 border border-white/20">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-blue-200 text-sm mb-1">File Name</p>
                      <p className="text-white font-semibold break-all">{fileInfo.name}</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm mb-1">File Size</p>
                      <p className="text-white font-semibold">{fileInfo.size}</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm mb-1">File Type</p>
                      <p className="text-white font-semibold">{fileInfo.type}</p>
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm mb-1">Status</p>
                      <p className="text-green-400 font-semibold">Ready to Download</p>
                    </div>
                  </div>
                </div>

                {/* Preview */}
                {fileInfo.thumbnail && (
                  <div className="mb-6">
                    <p className="text-blue-200 text-sm mb-3">Preview</p>
                    <img 
                      src={fileInfo.thumbnail} 
                      alt="File preview" 
                      className="w-full max-w-md h-48 object-cover rounded-xl border border-white/20"
                    />
                  </div>
                )}

                {/* Download Progress */}
                {isDownloading && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-blue-200 mb-2">
                      <span>Downloading...</span>
                      <span>{Math.round(downloadProgress)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${downloadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="flex-1 min-w-[200px] bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Download className="h-5 w-5" />
                    <span>{isDownloading ? 'Downloading...' : 'Download Now'}</span>
                  </button>
                  
                  <button
                    onClick={copyToClipboard}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                    title="Copy download link"
                  >
                    <Copy className="h-5 w-5" />
                    <span className="hidden sm:inline">Copy Link</span>
                  </button>
                  
                  <button
                    onClick={() => window.open(fileInfo.downloadUrl, '_blank')}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                    title="Open in new tab"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="hidden sm:inline">New Tab</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}