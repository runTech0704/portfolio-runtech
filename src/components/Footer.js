import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  // 現在の年を取得
  const currentYear = new Date().getFullYear();

  // ナビゲーション項目
  const navItems = [
    { id: 'home', text: 'ホーム' },
    { id: 'about', text: '自己紹介' },
    { id: 'skills', text: 'スキル' },
    { id: 'projects', text: '作品' },
    { id: 'experience', text: '経歴' },
    { id: 'qa', text: 'Q&A' },
    { id: 'contact', text: 'お問い合わせ' },
  ];

  // ソーシャルリンク
  const socialLinks = [
    {
      id: 'github',
      icon: <FaGithub />,
      url: 'https://github.com/runTech0704',
      label: 'GitHub',
    },
    {
      id: 'twitter',
      icon: <FaTwitter />,
      url: 'https://x.com/runrun071719842',
      label: 'Twitter',
    },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ロゴと説明 */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-primary">る</span>んるん
            </h2>
            <p className="text-slate-400 mb-4">
              Python/Djangoを専門とするバックエンドエンジニア。GCPを活用した
              スケーラブルで保守性の高いWebアプリケーション開発が得意分野です。
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* クイックリンク */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="text-slate-400 hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 連絡先 */}
          <div>
            <h3 className="text-xl font-bold mb-4">連絡先</h3>
            <ul className="space-y-2 text-slate-400">
              <li>東京都</li>
              <li>
                <a
                  href="mailto:fujiwara.satoru@example.com"
                  className="hover:text-primary transition-colors duration-300"
                >
                  fujiwara.satoru@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+819012345678"
                  className="hover:text-primary transition-colors duration-300"
                >
                  090-1234-5678
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-4">技術スタック</h3>
            <p className="text-slate-400">
              Python | Django | GCP | Cloud Run | App Engine | Firestore | AlloyDB
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} るんるん. All rights reserved.
          </p>
          <p className="text-slate-500 flex items-center">
            Made with <FaHeart className="text-primary mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
