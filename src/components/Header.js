import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // ナビゲーションの切り替え
  const handleNav = () => {
    setNav(!nav);
  };

  // ダークモードの切り替え
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  // スクロール時のシャドウ効果
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  // ダークモードの初期設定
  useEffect(() => {
    // ローカルストレージまたはシステム設定に基づいてダークモードを設定
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

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

  return (
    <header
      className={
        shadow
          ? 'fixed w-full h-20 bg-white/80 dark:bg-dark/80 backdrop-blur-sm shadow-lg z-50 transition-all duration-300 ease-in-out'
          : 'fixed w-full h-20 z-50 transition-all duration-300 ease-in-out'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-6 md:px-10 2xl:px-16">
        <Link to="home" smooth={true} duration={500}>
          <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
            <span className="text-primary">る</span>んるん
          </h1>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex">
          <ul className="hidden md:flex">
            {navItems.map((item) => (
              <li key={item.id} className="ml-10 text-sm uppercase hover:text-primary nav-link">
                <Link to={item.id} smooth={true} duration={500} offset={-100}>
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="ml-10">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors duration-300"
                aria-label={darkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </nav>

        {/* モバイルメニューボタン */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-4 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
            aria-label={darkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={handleNav} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-white dark:bg-slate-900 p-6 ease-in duration-300'
              : 'fixed left-[-100%] top-0 p-6 ease-in duration-300'
          }
        >
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-bold">
              <span className="text-primary">F</span>ujiwara <span className="text-primary">S</span>atoru
            </h1>
            <button
              onClick={handleNav}
              className="rounded-full p-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
            >
              <FaTimes />
            </button>
          </div>
          <div className="border-b border-slate-300 dark:border-slate-700 my-4">
            <p className="py-4">一緒に素晴らしいものを作りましょう</p>
          </div>
          <nav className="py-4 flex flex-col">
            <ul>
              {navItems.map((item) => (
                <li key={item.id} className="py-4 text-sm uppercase">
                  <Link
                    onClick={handleNav}
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="hover:text-primary"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
