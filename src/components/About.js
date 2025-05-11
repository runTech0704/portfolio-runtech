import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaRegCommentDots, FaCloud } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // アニメーション設定
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // 特徴セクション項目
  const features = [
    {
      icon: <FaRegCommentDots />,
      title: 'HRT の原則',
      description: 'チームに開発において、「謙虚、尊敬、信頼」を大切にしています。',
    },
    {
      icon: <FaCode />,
      title: 'クリーンなコード',
      description: '保守性と可読性を重視した高品質なPythonコードを書きます。',
    },
    {
      icon: <FaServer />,
      title: 'スケーラブル設計',
      description: '将来の拡張性を考慮したDjangoアプリケーション設計を得意としています。',
    },
    {
      icon: <FaCloud />,
      title: 'クラウドインフラ',
      description: 'GCPを活用した安全で効率的なクラウドアーキテクチャを構築します。',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block mx-auto mb-4">自己紹介</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-[800px] mx-auto mt-8">
            はじめまして、るんるんと申します。バックエンドエンジニアとして自社開発系の企業でWebアプリケーション開発に従事しています。
            PythonとDjangoを中心に、GCPを活用したクラウドネイティブなアプリケーション開発を行っています。
            法政大学文学部史学科出身ながら、ITの世界に魅了され、単身飛び込みを決意。
          </p>
        </motion.div>

        {/* 特徴セクション */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card flex flex-col items-center text-center"
            >
              <div className="text-4xl text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* パーソナルインフォ */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2">
            <img
              src="/profile-placeholder.jpeg"
              alt="るんるんのプロフィール写真"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/600x400.png?text=Profile';
              }}
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">私について</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              法政大学文学部史学科を卒業後、IT業界に興味を持ち、自社開発系の会社に新卒入社しました。
              文系出身ながら、独学でプログラミングを学び、現在はバックエンドエンジニアとして活躍しています。
              趣味は、プロ野球観戦です！生粋の阪神ファンですが、写真はエスコンフィールドに行った時です...
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Python/Djangoを用いたバックエンド開発を中心に、GCPのApp Engine、Cloud Run、Firestore、AlloyDB、Cloud Build、VPCなどのクラウドサービスを駆使した
              アプリケーション開発に携わっています。技術だけでなく、「ユーザーに何が必要なのか」を意識したプロダクト開発に勤しんでいます。
            </p>

            {/* キーポイント */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>東京在住</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>バックエンド専門</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>GCPエキスパート</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Python/Django</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
