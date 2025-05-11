import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const QA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // よくある質問のデータ
  const faqs = [
    {
      id: 1,
      question: '文系出身からエンジニアになった経緯を教えてください',
      answer:
        '大学在学中に、教養科目として、マクロVBAに触れたのがきっかけです。そこからプログラミングにハマり、独学で勉強しました。その中でエンジニアへの憧れば芽生えて、晴れて新卒で自社開発の会社に入社できました。',
    },
    {
      id: 2,
      question: '今後取り組みたい技術や分野はありますか？',
      answer:
        'たくさんあります！その中でもAI開発をやってみたいです。例えば、プロ野球に関するデータを分析して、予想するAIとか作ってみたいと思ってみたり。',
    },
    {
      id: 3,
      question: '趣味や興味のある分野を教えてください',
      answer:
        'プロ野球観戦です。生粋の阪神ファンです。',
    },
  ];

  // 開閉状態を管理する状態
  const [openItems, setOpenItems] = useState({});

  // 開閉の切り替え関数
  const toggleItem = (id) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

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
    <section id="qa" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block mx-auto">雑談 Q&A</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-[800px] mx-auto mt-8">
            よくいただく質問にQ&A形式でお答えします。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-[800px] mx-auto"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="mb-4 overflow-hidden"
            >
              <div
                onClick={() => toggleItem(faq.id)}
                className={`flex justify-between items-center p-5 cursor-pointer transition-colors duration-300 ${
                  openItems[faq.id]
                    ? 'bg-primary text-white rounded-t-lg'
                    : 'bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg'
                }`}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-xl">
                  {openItems[faq.id] ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>
              {openItems[faq.id] && (
                <div className="bg-white dark:bg-slate-700 p-5 rounded-b-lg">
                  <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* 追加質問への招待 */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            他にもご質問がありましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="#contact"
            className="btn-outline inline-block"
          >
            お問い合わせへ
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QA;
