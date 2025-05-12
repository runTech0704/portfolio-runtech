import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // カテゴリフィルター用の状態
  const [filter, setFilter] = useState('all');

  // プロジェクトデータ
  const projects = [
    {
      id: 1,
      title: '新製品開発',
      description:
        'BtoB 向けの新規 SaaS プロダクト開発にバックエンドエンジニアとして参画。AlloyDBと共有VPCを導入。',
      image: '/rakumo.jpg',
      technologies: ['Python', 'Django', 'GCP App Engine', 'GCP AlloyDB (Postgres)', '共有VPC', 'Cloud Build', 'Docker', 'Git', 'GitHub'],
      category: 'backend',
    },
    {
      id: 2,
      title: 'rakumo カレンダー開発',
      description:
        'GCP App Engine と Django を使用したGoogleカレンダー拡張アプリ。追加機能開発に5件に、仕様検討から設計、実装までを担当',
      image: '/rakumo.jpg',
      technologies: ['Python', 'Django', 'Google Calendar API','GCP App Engine', 'GCP Firestore' ,'Cloud Build', 'Docker', 'Git', 'GitHub'],
      github: '',
      demo: '',
      category: 'backend',
    },
    {
      id: 3,
      title: 'StudySavings',
      description:
        '勉強した時間を時給換算するアプリです。貯金をモチベーションに勉強に勤しめます。',
      image: '/study-savings-picture.png',
      technologies: ['Python', 'Django', 'GCP Cloud Run', 'Supabase (Postgres)', 'GCP VertexAI', 'Docker', 'Git', 'GitHub'],
      github: 'https://github.com/runTech0704/Study-Savings',
      demo: 'https://study-savings-frontend-456434511485.asia-northeast1.run.app/',
      category: 'private',
    },
    {
      id: 4,
      title: 'スクラム開発導入',
      description:
        '会社内の開発スピードに課題を感じ、スクラム開発を提案・導入。',
      image: '/scrum.png',
      technologies: ['スクラム開発', 'アジャイル開発'],
      github: '',
      demo: '',
      category: 'architect',
    },
  ];

  // フィルタリングされたプロジェクト
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  // カテゴリフィルターのオプション
  const categories = [
    { value: 'all', label: 'すべて' },
    { value: 'backend', label: '仕事' },
    { value: 'private', label: '個人開発' },
    { value: 'architect', label: '手法'}
  ];

  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block mx-auto">作品紹介</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-[800px] mx-auto mt-8">
            これまでに手がけた主なプロジェクトをご紹介します。
            バックエンド開発、クラウドインフラ構築、スクラム開発導入に取り組んできました。
          </p>
        </motion.div>

        {/* フィルター */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${filter === category.value
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* プロジェクトグリッド */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-t-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://via.placeholder.com/600x400.png?text=${encodeURIComponent(project.title)}`;
                }}
              />
              <div className="bg-white dark:bg-slate-700 p-6 rounded-b-xl">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-sky-600 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-sky-600 transition-colors"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
