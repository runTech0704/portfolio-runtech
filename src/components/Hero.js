import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* アバター画像 */}
          <div className="w-40 h-40 overflow-hidden rounded-full mb-6 border-4 border-primary shadow-xl">
            <img
              src="/avatar-placeholder.jpeg"
              alt="るんるん"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x400.png?text=FS';
              }}
            />
          </div>

          {/* 挨拶 */}
          <p className="uppercase text-sm tracking-widest text-slate-600 dark:text-slate-400 mb-2">
            こんにちは、私は
          </p>
          <h1 className="py-4 text-slate-800 dark:text-slate-200">
            <span className="text-primary">るんるん</span> です
          </h1>

          {/* タイピングアニメーション */}
          <h2 className="py-2 text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300">
            <TypeAnimation
              sequence={[
                'バックエンドエンジニア',
                2000,
                'Python/Django開発者',
                2000,
                'GCP強めのエンジニア',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium"
            />
          </h2>

          {/* 簡単な説明 */}
          <p className="py-4 text-slate-600 dark:text-slate-400 max-w-[70%] mx-auto">
            クリエイティブで実用的なWebアプリケーションを開発することに情熱を持つ
            バックエンドエンジニアです。PythonとDjangoを得意とし、GCPを活用した実用的なサービス開発に取り組んでいます。
          </p>

          {/* ソーシャルリンク */}
          <div className="flex items-center justify-center gap-6 my-6">
            <a
              href="https://github.com/runTech0704/Study-Savings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/runrun071719842"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>

          {/* CTA ボタン */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-100}
              className="btn-primary flex items-center gap-2"
            >
              作品を見る
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="btn-outline flex items-center gap-2"
            >
              お問い合わせ
            </Link>
          </div>
        </motion.div>

        {/* スクロールダウン矢印 */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="absolute bottom-10 cursor-pointer"
        >
          <Link to="about" smooth={true} duration={500} offset={-100}>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-primary"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
