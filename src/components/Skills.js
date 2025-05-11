import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaCloud,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiPython,
  SiDjango,
  SiGooglecloud,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiRabbitmq,
  SiCelery,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiGithub,
  SiJenkins,
  SiGithubactions,
  SiJira,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiGrafana,
  SiPrometheus,
  SiReact,
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // スキルカテゴリ
  const skillCategories = [
    {
      title: 'バックエンド開発',
      skills: [
        { name: 'Python', icon: <SiPython />, level: 95 },
        { name: 'Django', icon: <SiDjango />, level: 90 },
        { name: 'Flask', icon: <SiFlask />, level: 10 },
        { name: 'RESTful API', icon: <FaServer />, level: 85 },
        { name: 'pytest', icon: <FaCode />, level: 90 },
      ],
    },
    {
      title: 'クラウド技術 (GCP)',
      skills: [
        { name: 'Google Cloud Platform', icon: <SiGooglecloud />, level: 90 },
        { name: 'App Engine', icon: <FaCloud />, level: 90 },
        { name: 'Cloud Run', icon: <FaCloud />, level: 85 },
        { name: 'Firestore', icon: <FaDatabase />, level: 80 },
        { name: 'AlloyDB', icon: <FaDatabase />, level: 75 },
        { name: 'Cloud Build', icon: <FaServer />, level: 85 },
        { name: 'VPC', icon: <FaCloud />, level: 80 },
      ],
    },
    {
      title: 'データベース',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70 },
        { name: 'ORM', icon: <FaDatabase />, level: 70 },
        { name: 'Firestore', icon: <FaDatabase />, level: 70 },
      ],
    },
    {
      title: 'DevOps & ツール',
      skills: [
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
        { name: 'GitHub', icon: <SiGithub />, level: 90 },
        { name: 'GitHub Actions', icon: <SiGithubactions />, level: 80 },
      ],
    },
    {
      title: 'フロントエンド (基礎知識)',
      skills: [
        { name: 'HTML', icon: <SiHtml5 />, level: 50 },
        { name: 'CSS', icon: <SiCss3 />, level: 30 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 30 },
        { name: 'React', icon: <SiReact />, level: 30 },
      ],
    },
    {
      title: 'その他',
      skills: [
        { name: 'スクラム開発', icon: <FaCode />, level: 80 },
        { name: 'API設計', icon: <FaServer />, level: 90 },
        { name: 'DB設計', icon: <FaServer />, level: 70 },
        { name: 'アーキテクチャ設計', icon: <FaServer />, level: 80 },
      ],
    },
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
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block mx-auto">技術スタック</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-[800px] mx-auto mt-8">
            Python/Djangoを中心としたバックエンド技術と、GCPを活用したクラウドインフラ構築に強みを持っています。
            スケーラブルで保守性の高いシステム設計を目指し、常に最新技術のキャッチアップに努めています。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="skill-item"
                  >
                    <div className="text-4xl mb-4 text-primary">{skill.icon}</div>
                    <h4 className="font-bold mb-2">{skill.name}</h4>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {skill.level}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
