import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 職歴データ
  const workExperience = [
    {
      id: 1,
      role: 'エンジニア（新卒入社）',
      company: 'rakumo 株式会社',
      period: '2022年6月 - ',
      description: [
        '自社開発系の企業に新卒入社し、プログラミングとWeb開発の基礎を習得',
        'Python/Djangoを使用して、5件の機能開発に従事',
        '仕様検討から設計(APIやDB)、実装、テストを担当',
        'コスト最適化を目的としたリファクタリングを実施し、40%のコストカットに成功',
        '新製品開発に参画し、仕様検討から設計、実装、テストまで担当',
        '新製品開発に伴い、AlloyDBと共有VPCを1人で導入。'
      ],
      technologies: [
        'Python', 'Django', 'AppEngine', 'Firestore', 'Cloud Build', 'VPC', 'AlloyDB', 'Git', 'GitHub', 'GitHub Actions', 'Docker', 'HTML/CSS', 'JavaScript', 'Angular'
      ],
    },
  ];

  // 学歴データ
  const education = [
    {
      id: 1,
      degree: '学士（文学）',
      institution: '法政大学 文学部史学科',
      period: '2019年4月 - 2023年3月',
      description: [
        '歴史学を専攻し、論理的思考力と分析能力を養成',
        '戦中のマスコミなどを研究',
        'コロナ禍をきっかけに独学でプログラミングを学び始め、Webサービス開発に興味を持つ',
      ],
    },
  ];

  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block mx-auto">経歴</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-[800px] mx-auto mt-8">
            文系出身からIT業界へ。歴史学で培った分析力と論理的思考を活かし、
            Python/Djangoとクラウド技術を専門とするバックエンドエンジニアとしてキャリアを築いてきました。
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* 職歴 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:w-1/2"
          >
            <div className="flex items-center mb-8">
              <FaBriefcase className="text-primary text-2xl mr-3" />
              <h3 className="text-2xl font-bold">職歴</h3>
            </div>
            <div className="border-l-4 border-primary pl-6 space-y-10">
              {workExperience.map((work) => (
                <motion.div key={work.id} variants={itemVariants} className="relative">
                  <div className="absolute -left-10 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-slate-900"></div>
                  <div className="card">
                    <h4 className="text-xl font-bold">{work.role}</h4>
                    <p className="text-primary font-medium mb-2">{work.company}</p>
                    <p className="text-slate-500 dark:text-slate-400 mb-4">{work.period}</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-600 dark:text-slate-400">
                      {work.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {work.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 学歴 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:w-1/2"
          >
            <div className="flex items-center mb-8">
              <FaGraduationCap className="text-primary text-2xl mr-3" />
              <h3 className="text-2xl font-bold">学歴</h3>
            </div>
            <div className="border-l-4 border-primary pl-6 space-y-10">
              {education.map((edu) => (
                <motion.div key={edu.id} variants={itemVariants} className="relative">
                  <div className="absolute -left-10 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-slate-900"></div>
                  <div className="card">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-slate-500 dark:text-slate-400 mb-4">{edu.period}</p>
                    <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-600 dark:text-slate-400">
                      {edu.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 資格・認定 */}
            <motion.div variants={itemVariants} className="mt-12">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-bold">資格・認定</h3>
              </div>
              <div className="card">
                <ul className="list-disc pl-5 space-y-3 text-slate-600 dark:text-slate-400">
                  <li>Google Cloud Associate Cloud Engineer (2022年)</li>
                  <li>Google Cloud Professional Cloud Developer (2024年)</li>
                  <li>Google Cloud Professional Cloud Architect (2025年)</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
